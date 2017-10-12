import * as constants from '../constants';

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

export type Actions = RecipeAddCategory | RecipeChangeCategoryName | RecipeChangeCategoryDescription;

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

export function recipeChangeCategoryDescription(event: React.FormEvent<HTMLInputElement>): RecipeChangeCategoryDescription{
    return {
        type: constants.RECIPE_CHANGE_CATEGORY_DESCRIPTION,
        newDescription: event.currentTarget.value
    };
}