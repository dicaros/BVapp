import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/reducer';

import thunk from 'redux-thunk';


// store.js
export function configureStore(initialState = {}) {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  return store;
}

export const store = configureStore();