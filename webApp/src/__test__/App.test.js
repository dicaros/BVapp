// counter.test.js
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { initialState, reducer } from '../store/reducers/reducer.js'
import { CreateComponent, GameComponent, LoginComponent, UserComponent, GameDetailsComponent, UserProfileComponent, RegisterComponent } from '../AppContainer';
import GameList from '../components/GameList.js'


function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),

    store,
  }
}
