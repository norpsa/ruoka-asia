import ListCategories from '../../components/Category/ListCategories';
import { connect } from 'react-redux';
import { RootState } from '../../types/index';

export function mapStateToProps(state: RootState) {
  return {
    categories: state.recipes.categories
  };
}

export default connect(mapStateToProps, undefined)(ListCategories);
