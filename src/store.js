/* eslint "no-undef": 0 */
/* eslint "global-require": 0 */

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const devToolsExtension = () => (window.devToolsExtension ? window.devToolsExtension() : f => f);
const logger = () => createLogger();

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'dev') {
    return applyMiddleware(thunkMiddleware, logger())(createStore);
  }
  return applyMiddleware(thunkMiddleware)(createStore);
};

const createStoreWithMiddleware = () => {
  const middleware = getMiddleware();
  if (process.env.NODE_ENV === 'dev') {
    return middleware(reducers, devToolsExtension());
  }
  return middleware(reducers);
};

export default function configureStore() {
  const store = createStoreWithMiddleware();

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
