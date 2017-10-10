import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { rootReducer } from './reducers/index';
import { RootState } from './types/index';

import Hello from './containers/Hello';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore<RootState>(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
