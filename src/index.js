import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import App from './Components/App/App.js';
import './index.css';

export const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
 
      <App />
    
  </Provider>,
  document.getElementById('root')
);