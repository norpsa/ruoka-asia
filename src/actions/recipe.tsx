import * as constants from '../constants';
import { AddRecipePayload, RootState, Category } from '../types/index';
import axios from 'axios';
import { Dispatch } from 'redux';
import React from 'react';

export interface RecipeAddCategory {
  type: constants.RECIPE_ADD_CATEGORY;
}

export interface RecipeAddCategorySuccess {
  type: constants.RECIPE_ADD_CATEGORY_SUCCESS;
  category: Category;
}

export interface RecipeAddCategoryFailure {
  type: constants.RECIPE_ADD_CATEGORY_FAILURE;
  error: any;
}

export interface RecipeChangeCategoryName {
  type: constants.RECIPE_CHANGE_CATEGORY_NAME;
  newName: string;
}

export interface RecipeChangeCategoryDescription {
  type: constants.RECIPE_CHANGE_CATEGORY_DESCRIPTION;
  newDescription: string;
}

export interface RecipeAddRecipe {
  type: constants.RECIPE_ADD_RECIPE;
  payload: AddRecipePayload;
}

export interface RecipeChangeRecipeName {
  type: constants.RECIPE_CHANGE_RECIPE_NAME;
  newName: string;
}

export interface RecipeChangeRecipeUrl {
  type: constants.RECIPE_CHANGE_RECIPE_URL;
  newUrl: string;
}

export interface FetchCategoriesSuccess {
  type: constants.FETCH_CATEGORIES_SUCCESS;
  data: any;
}

export interface FetchCategoriesFailure {
  type: constants.FETCH_CATEGORIES_FAILURE;
  error: any;
}

export interface FetchRecipesSuccess {
  type: constants.FETCH_RECIPES_SUCCESS;
  data: any;
}

export interface FetchRecipesFailure {
  type: constants.FETCH_RECIPES_FAILURE;
  error: any;
}

export type Actions = RecipeAddCategory
  | RecipeAddCategorySuccess
  | RecipeAddCategoryFailure
  | RecipeChangeCategoryName
  | RecipeChangeCategoryDescription
  | RecipeAddRecipe
  | RecipeChangeRecipeName
  | RecipeChangeRecipeUrl
  | FetchCategoriesFailure
  | FetchCategoriesSuccess
  | FetchRecipesFailure
  | FetchRecipesSuccess;

export function recipeAddCategory(): any {
  return function (dispatch: Dispatch<RootState>, getState: (() => RootState)) {
    let state = getState();
    return axios({
      method: 'post',
      url: `http://localhost:8080/api/v1/category`,
      headers: [],
      data: {
        name: state.recipes.newCategoryName,
        description: state.recipes.newCategoryDescription
      }
    })
    .then((response) => dispatch(recipeAddCategorySuccess(response.data)))
    .catch((error) => dispatch(recipeAddCategoryFailure(error)));
  };
}

export function recipeAddCategorySuccess(data: any): RecipeAddCategorySuccess {
  return {
    type: constants.RECIPE_ADD_CATEGORY_SUCCESS,
    category: data
  };
}

export function recipeAddCategoryFailure(error: any): RecipeAddCategoryFailure {
  return {
    type: constants.RECIPE_ADD_CATEGORY_FAILURE,
    error: error
  };
}

export function recipeChangeCategoryName(event: React.FormEvent<HTMLInputElement>): RecipeChangeCategoryName {
  return {
    type: constants.RECIPE_CHANGE_CATEGORY_NAME,
    newName: event.currentTarget.value
  };
}

export function recipeChangeCategoryDescription(event: React.FormEvent<HTMLInputElement>):
  RecipeChangeCategoryDescription {
  return {
    type: constants.RECIPE_CHANGE_CATEGORY_DESCRIPTION,
    newDescription: event.currentTarget.value
  };
}

export function recipeAddRecipe(categoryId: number): RecipeAddRecipe {
  return {
    type: constants.RECIPE_ADD_RECIPE,
    payload: { categoryId: categoryId }
  };
}

export function recipeChangeRecipeName(event: React.FormEvent<HTMLInputElement>): RecipeChangeRecipeName {
  return {
    type: constants.RECIPE_CHANGE_RECIPE_NAME,
    newName: event.currentTarget.value
  };
}

export function recipeChangeRecipeUrl(event: React.FormEvent<HTMLInputElement>): RecipeChangeRecipeUrl {
  return {
    type: constants.RECIPE_CHANGE_RECIPE_URL,
    newUrl: event.currentTarget.value
  };
}

export function fetchRecipesSuccess(data: any): FetchRecipesSuccess {
  return {
    type: constants.FETCH_RECIPES_SUCCESS,
    data: data
  };
}

export function fetchCategoriesSuccess(data: any): FetchCategoriesSuccess {
  return {
    type: constants.FETCH_CATEGORIES_SUCCESS,
    data: data
  };
}

export function fetchRecipesFailure(error: any): FetchRecipesFailure {
  return {
    type: constants.FETCH_RECIPES_FAILURE,
    error: error
  };
}

export function fetchCategoriesFailure(error: any): FetchCategoriesFailure {
  return {
    type: constants.FETCH_CATEGORIES_FAILURE,
    error: error
  };
}
