import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { enthusiasm as foo } from './foo';
import { enthusiasm as bar } from './bar';

import { RootState } from '../types/index';

export const rootReducer = combineReducers<RootState>({
  router: routerReducer,
  foo,
  bar,
});
