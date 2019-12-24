import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css'

import { Provider } from 'react-redux';
import { store } from './store/store';

// Wrap existing app in Provider - Step 2
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);

