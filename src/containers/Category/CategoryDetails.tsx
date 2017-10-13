import CategoryDetails from '../../components/Category/CategoryDetails';
import { connect } from 'react-redux';
import { RootState, OwnProps } from '../../types/index';

export function mapStateToProps(state: RootState, params: OwnProps) {
  console.log("ads", params);
  return {
    id: params.id
  };
}

export default connect(mapStateToProps, undefined)(CategoryDetails);
