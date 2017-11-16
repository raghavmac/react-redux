/* eslint no-undef: 0 */
/* eslint global-require: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import ApplicationContainer from './containers/AppContainer';
import configureStore from './store';

require('es6-promise').polyfill();

const store = configureStore();

const renderApp = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Route component={Component} path="/" />
        </BrowserRouter>
      </Provider>
    </AppContainer>
    , document.getElementById('app'),
  );
};

renderApp(ApplicationContainer);

if (module.hot) {
  module.hot.accept('./containers/AppContainer.jsx', () => {
    const NextRootContainer = require('./containers/AppContainer.jsx').default;
    renderApp(NextRootContainer);
  });
}
