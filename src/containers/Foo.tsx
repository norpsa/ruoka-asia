import Foo from '../components/Foo/Foo';
import { RootState } from '../types/index';
import { connect } from 'react-redux';

export function mapStateToProps(state: RootState) {
  return {
    fooEnthusiasmLevel: state.foo.enthusiasmLevel,
    languageName: state.foo.languageName,
  };
}

export default connect(mapStateToProps)(Foo);
