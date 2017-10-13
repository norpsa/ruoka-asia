import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { routerMiddleware } from 'react-router-redux';

import { RootState } from './types/index';
import { rootReducer } from './reducers/index';

import history from './history';
import { loadState, saveState } from './localStorage';

function configureStore(initialState?: RootState) {
  // configure middlewares
  const middlewares = [
    routerMiddleware(history),
  ];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  const persistedState = loadState();

  // create store
  return createStore<RootState>(
    rootReducer,
    persistedState,
    applyMiddleware(...middlewares)
  );
}

// pass an optional param to rehydrate state on app start
const store = configureStore();
store.subscribe(() => {
  saveState(store.getState());
});

// export store singleton instance
export default store;
