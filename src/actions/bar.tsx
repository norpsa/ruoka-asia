import * as constants from '../constants';

export interface BarIncrementEnthusiasm {
  type: constants.BAR_INCREMENT_ENTHUSIASM;
}

export interface BarDecrementEnthusiasm {
  type: constants.BAR_DECREMENT_ENTHUSIASM;
}

export type Actions = BarIncrementEnthusiasm | BarDecrementEnthusiasm;

export function barIncrementEnthusiasm(): BarIncrementEnthusiasm {
  return {
      type: constants.BAR_INCREMENT_ENTHUSIASM
  };
}

export function barDecrementEnthusiasm(): BarDecrementEnthusiasm {
  return {
      type: constants.BAR_DECREMENT_ENTHUSIASM
  };
}
