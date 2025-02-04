import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store'; // Correctly import the store
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(

  <Provider store={store}>
  <BrowserRouter >
    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
