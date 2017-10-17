import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import axios, { AxiosResponse, AxiosError } from 'axios';

import { RootState } from './types/index';
import {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_RECIPES_FAILURE,
  FETCH_RECIPES_SUCCESS
} from './constants/index';

import { rootReducer } from './reducers/index';

import history from './history';
import { loadState, saveState } from './localStorage';

function configureStore(initialState?: RootState) {
  // configure middlewares
  const middlewares = [
    routerMiddleware(history),
    thunk
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

export function loadInitialCategoryData() {
  let url = 'http://localhost:8080/api/v1/category';
  return function () {
    axios.get(url)
      .then((response: AxiosResponse) => store.dispatch({
        type: FETCH_CATEGORIES_SUCCESS,
        data: response.data
      })).catch((error: AxiosError) => store.dispatch({
        type: FETCH_CATEGORIES_FAILURE,
        error: error
      }));
  }
}

export function loadInitialRecipeData() {
  let url = 'http://localhost:8080/api/v1/recipe';
  return function () {
    axios.get(url)
      .then((response: AxiosResponse) => store.dispatch({
        type: FETCH_RECIPES_SUCCESS,
        data: response.data
      })).catch((error: AxiosError) => store.dispatch({
        type: FETCH_RECIPES_FAILURE,
        error: error
      }));
  }
}

// pass an optional param to rehydrate state on app start
const store = configureStore();
store.subscribe(() => {
  saveState(store.getState());
});

store.dispatch(loadInitialCategoryData());
store.dispatch(loadInitialRecipeData());

// export store singleton instance
export default store;
