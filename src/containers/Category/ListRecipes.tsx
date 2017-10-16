import ListRecipes from '../../components/Category/ListRecipes';
import { connect } from 'react-redux';
import { RootState } from '../../types/index';

export function mapStateToProps(state: RootState) {
  return {
    recipes: state.recipes.recipes
  };
}

export default connect(mapStateToProps, undefined)(ListRecipes);
