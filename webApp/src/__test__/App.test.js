// counter.test.js
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { initialState, reducer } from '../store/reducers/reducer.js'
import { CreateComponent, GameComponent, LoginComponent, UserComponent, GameDetailsComponent, UserProfileComponent, RegisterComponent } from '../AppContainer';
import GameList from '../components/GameList.js'

// this is a handy function that I normally make available for all my tests
// that deal with connected components.
// you can provide initialState for the entire store that the ui is rendered with
function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  }
}

test('can render with redux with defaults', () => {
  const { getByTestId, getByText } = renderWithRedux(<GameList />)
  fireEvent.click(getByText('+'))
  expect(getByTestId('count-value')).toHaveTextContent('1')
})
