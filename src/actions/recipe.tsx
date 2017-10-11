import * as constants from '../constants';
import { NewCategoryPayload } from '../types';

export interface RecipeAddCategory {
    type: constants.RECIPE_ADD_CATEGORY;
    payload: NewCategoryPayload;
}

export type Actions = RecipeAddCategory;

export function recipeAddCategory(newCategory: NewCategoryPayload): RecipeAddCategory {
    return {
        type: constants.RECIPE_ADD_CATEGORY,
        payload: newCategory
    };
}
