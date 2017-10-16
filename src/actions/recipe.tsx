import * as constants from '../constants';
import { AddRecipePayload } from '../types/index';

export interface RecipeAddCategory {
  type: constants.RECIPE_ADD_CATEGORY;
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

export type Actions = RecipeAddCategory
  | RecipeChangeCategoryName
  | RecipeChangeCategoryDescription
  | RecipeAddRecipe
  | RecipeChangeRecipeName
  | RecipeChangeRecipeUrl;

export function recipeAddCategory(): RecipeAddCategory {
  return {
    type: constants.RECIPE_ADD_CATEGORY,
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
