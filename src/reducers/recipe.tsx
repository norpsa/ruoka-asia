import { Actions } from '../actions/recipe';
import { RecipeState } from '../types/index';
import { RECIPE_ADD_CATEGORY } from '../constants/index';

const initialState: RecipeState = {
  categories: [],
  recipes: [],
  nextCategoryId: 0,
  nextRecipeId: 0
};

export function recipes(state: RecipeState = initialState, action: Actions): RecipeState {
  switch (action.type) {
    case RECIPE_ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, { id: state.nextCategoryId, name: action.payload.name, description: action.payload.description }],
        nextCategoryId: state.nextCategoryId + 1
      };
    default:
      return state;
  }
}