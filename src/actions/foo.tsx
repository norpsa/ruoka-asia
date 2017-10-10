import * as constants from '../constants';

export interface FooIncrementEnthusiasm {
    type: constants.FOO_INCREMENT_ENTHUSIASM;
}

export interface FooDecrementEnthusiasm {
    type: constants.FOO_DECREMENT_ENTHUSIASM;
}

export type Actions = FooIncrementEnthusiasm | FooDecrementEnthusiasm;

export function fooIncrementEnthusiasm(): FooIncrementEnthusiasm {
    return {
        type: constants.FOO_INCREMENT_ENTHUSIASM
    };
}

export function fooDecrementEnthusiasm(): FooDecrementEnthusiasm {
    return {
        type: constants.FOO_DECREMENT_ENTHUSIASM
    };
}
