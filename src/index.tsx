import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';

import store from './store';
import history from './history';

import HelloPage from './pages/HelloPage';
import HelloAsia from './components/HelloAsia';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact={true} path="/" component={HelloPage}/>
        <Route path="/about" component={HelloAsia}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
