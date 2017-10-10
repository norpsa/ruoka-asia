import { combineReducers } from 'redux';

import { enthusiasm as foo } from './foo';
import { enthusiasm as bar } from './bar';

import { RootState } from '../types/index';
export const rootReducer = combineReducers<RootState>({
  foo,
  bar,
});
