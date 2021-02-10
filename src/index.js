import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root.jsx';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers/index'
import { selectRiskOne, selectAllRisks } from './redux/actions/risk_actions';
import { logger } from 'redux-logger'


document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');
  const store = createStore(rootReducer, applyMiddleware(logger));
  window.store = store;
  window.selectRiskOne = selectRiskOne;
  window.selectAllRisks = selectAllRisks
  ReactDOM.render(<Root store={store}/>, rootEl)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
