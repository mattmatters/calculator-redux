import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import App from './components/App';
import calculatorReducer from './reducer';
import '../style/style.scss';

const loggerMiddleware = createLogger();

const store = createStore(
  calculatorReducer,
  applyMiddleware(loggerMiddleware),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
