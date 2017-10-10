import * as React from 'react';
import * as ReactDOM from 'react-dom';

import store from './store';

import HelloPage from './pages/HelloPage';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <HelloPage />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
