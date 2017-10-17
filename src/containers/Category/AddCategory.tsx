import AddCategory from '../../components/Category/AddCategory';
import * as recipeActions from '../../actions/recipe';
import { RootAction } from '../../actions/index';
import { connect, Dispatch } from 'react-redux';
import { RootState } from '../../types/index';

export function mapStateToProps(state: RootState) {
  return {
    categoryName: state.recipes.newCategoryName,
    categoryDescription: state.recipes.newCategoryDescription
  };
}

export function mapDispatchToProps(dispatch: Dispatch<RootAction>) {
  return {
    addCategory: () => recipeActions.recipeAddCategory(),
    categoryNameChanged: (event: React.FormEvent<HTMLInputElement>) =>
      dispatch(recipeActions.recipeChangeCategoryName(event)),
    categoryDescriptionChanged: (event: React.FormEvent<HTMLInputElement>) =>
      dispatch(recipeActions.recipeChangeCategoryDescription(event))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
