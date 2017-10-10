import Hello from '../components/Hello/Hello';
import * as fooActions from '../actions/foo';
import * as barActions from '../actions/bar';
import { RootAction } from '../actions/index';
import { RootState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps(state: RootState) {
  return {
    fooEnthusiasmLevel: state.foo.enthusiasmLevel,
    barEnthusiasmLevel: state.bar.enthusiasmLevel,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<RootAction>) {
  return {
    onFooIncrement: () => dispatch(fooActions.fooIncrementEnthusiasm()),
    onFooDecrement: () => dispatch(fooActions.fooDecrementEnthusiasm()),
    onBarIncrement: () => dispatch(barActions.barIncrementEnthusiasm()),
    onBarDecrement: () => dispatch(barActions.barDecrementEnthusiasm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
