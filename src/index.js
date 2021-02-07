import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import Root from './components/Root.jsx';
import { createStore, applyMiddleware } from 'redux';
import reducer from './redux/reducer';
import { addRiskOne } from './redux/actions';
import { logger } from 'redux-logger'


document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');
  const store = createStore(reducer, applyMiddleware(logger));
  window.store = store;
  window.addRiskOne = addRiskOne;
  ReactDOM.render(<Root store={store}/>, rootEl)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
