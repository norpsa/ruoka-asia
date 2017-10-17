import { Actions } from '../actions/recipe';
import { RecipeState } from '../types/index';
import {
  RECIPE_ADD_CATEGORY, RECIPE_CHANGE_CATEGORY_NAME,
  RECIPE_CHANGE_CATEGORY_DESCRIPTION,
  RECIPE_ADD_RECIPE,
  RECIPE_CHANGE_RECIPE_NAME,
  RECIPE_CHANGE_RECIPE_URL,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_RECIPES_FAILURE,
  FETCH_RECIPES_SUCCESS,
  RECIPE_ADD_CATEGORY_FAILURE,
  RECIPE_ADD_CATEGORY_SUCCESS
} from '../constants/index';

const initialState: RecipeState = {
  categories: [],
  recipes: [],
  nextCategoryId: 0,
  nextRecipeId: 0,
  newCategoryName: '',
  newCategoryDescription: '',
  newRecipeName: '',
  newRecipeUrl: '',
  error: '',
  loading: true
};

export function recipes(state: RecipeState = initialState, action: Actions): RecipeState {
  switch (action.type) {
    case RECIPE_ADD_CATEGORY:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case RECIPE_ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: [...state.categories,
        action.category
        ],
        newCategoryName: '',
        newCategoryDescription: '',
        loading: false,
        error: '',
      };
    case RECIPE_ADD_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case RECIPE_CHANGE_CATEGORY_NAME:
      return {
        ...state,
        newCategoryName: action.newName,
        error: '',
      };
    case RECIPE_CHANGE_CATEGORY_DESCRIPTION:
      return {
        ...state,
        newCategoryDescription: action.newDescription,
        error: '',
      };
    case RECIPE_ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes,
        {
          id: state.nextRecipeId,
          name: state.newRecipeName,
          url: state.newRecipeUrl,
          categoryId: action.payload.categoryId
        }],
        nextRecipeId: state.nextRecipeId + 1,
        newRecipeName: '',
        newRecipeUrl: '',
        error: '',
      };
    case RECIPE_CHANGE_RECIPE_NAME:
      return {
        ...state,
        newRecipeName: action.newName,
        error: '',
      };
    case RECIPE_CHANGE_RECIPE_URL:
      return {
        ...state,
        newRecipeUrl: action.newUrl,
        error: '',
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        error: '',
        categories: action.data
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        error: '',
        recipes: action.data
      };
    case FETCH_RECIPES_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
