import AddCategory from '../../components/Category/AddCategory';
import * as recipeActions from '../../actions/recipe';
import { RootAction } from '../../actions/index';
import { NewCategoryPayload } from '../../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapDispatchToProps(dispatch: Dispatch<RootAction>) {
  return {
    addCategory: (newCategory: NewCategoryPayload) => dispatch(recipeActions.recipeAddCategory(newCategory)),
  };
}

export default connect(undefined, mapDispatchToProps)(AddCategory);
