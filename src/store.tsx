import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { routerMiddleware } from 'react-router-redux';

import { RootState } from './types/index';
import { rootReducer } from './reducers/index';

import history from './history';

function configureStore(initialState?: RootState) {
  // configure middlewares
  const middlewares = [
    routerMiddleware(history),
  ];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  // create store
  return createStore<RootState>(
    rootReducer,
    initialState!,
    applyMiddleware(...middlewares)
  );
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;
