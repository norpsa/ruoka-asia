import { Actions } from '../actions/recipe';
import { RecipeState } from '../types/index';
import {
  RECIPE_ADD_CATEGORY, RECIPE_CHANGE_CATEGORY_NAME,
  RECIPE_CHANGE_CATEGORY_DESCRIPTION
} from '../constants/index';

const initialState: RecipeState = {
  categories: [],
  recipes: [],
  nextCategoryId: 0,
  nextRecipeId: 0,
  newCategoryName: '',
  newCategoryDescription: ''
};

export function recipes(state: RecipeState = initialState, action: Actions): RecipeState {
  switch (action.type) {
    case RECIPE_ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories,
        { id: state.nextCategoryId, name: state.newCategoryName, description: state.newCategoryDescription }
        ],
        nextCategoryId: state.nextCategoryId + 1,
        newCategoryName: '',
        newCategoryDescription: ''
      };
    case RECIPE_CHANGE_CATEGORY_NAME:
      return {
        ...state,
        newCategoryName: action.newName
      };
    case RECIPE_CHANGE_CATEGORY_DESCRIPTION:
      return {
        ...state,
        newCategoryDescription: action.newDescription
      };
    default:
      return state;
  }
}