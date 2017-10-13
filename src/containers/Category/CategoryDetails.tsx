import CategoryDetails from '../../components/Category/CategoryDetails';
import { connect } from 'react-redux';
import { RootState, OwnProps } from '../../types/index';

export function mapStateToProps(state: RootState, params: OwnProps) {
  return {
    id: params.id,
    category: state.recipes.categories.find((c) => c.id === Number(params.id))
  };
}

export default connect(mapStateToProps, undefined)(CategoryDetails);
