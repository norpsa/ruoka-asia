import { Actions } from '../actions/foo';
import { FooState } from '../types/index';
import { FOO_INCREMENT_ENTHUSIASM, FOO_DECREMENT_ENTHUSIASM } from '../constants/index';

const initialState: FooState = {
  enthusiasmLevel: 10,
  languageName: 'elm'
};

export function enthusiasm(state: FooState = initialState, action: Actions): FooState {
  switch (action.type) {
    case FOO_INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case FOO_DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    default:
      return state;
  }
}
