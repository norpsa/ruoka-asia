
import { Actions } from '../actions/bar';
import { BarState } from '../types/index';
import { BAR_INCREMENT_ENTHUSIASM, BAR_DECREMENT_ENTHUSIASM } from '../constants/index';

const initialState: BarState = {
  enthusiasmLevel: 10,
  languageName: 'elm'
};

export function enthusiasm(state: BarState = initialState, action: Actions): BarState {
  switch (action.type) {
    case BAR_INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case BAR_DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    default:
      return state;
  }
}
