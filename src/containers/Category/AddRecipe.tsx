import AddRecipe from '../../components/Category/AddRecipe';
import { connect, Dispatch } from 'react-redux';
import { RootState, OwnProps } from '../../types/index';
import { RootAction } from '../../actions/index';
import * as recipeActions from '../../actions/recipe';

export function mapStateToProps(state: RootState, params: OwnProps) {
  return {
    categoryId: params.id,
    recipeName: state.recipes.newRecipeName,
    recipeUrl: state.recipes.newRecipeUrl
  };
}

export function mapDispatchToProps(dispatch: Dispatch<RootAction>) {
  return {
    addRecipe: (categoryId: number) => dispatch(recipeActions.recipeAddRecipe(categoryId)),
    recipeNameChanged: (event: React.FormEvent<HTMLInputElement>) =>
      dispatch(recipeActions.recipeChangeRecipeName(event)),
    recipeUrlChanged: (event: React.FormEvent<HTMLInputElement>) =>
      dispatch(recipeActions.recipeChangeRecipeUrl(event))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe);
