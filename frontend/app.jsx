import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Store from './store'

import ButtonsContainer from './components/ButtonsContainer'
import TodosContainer from './components/TodosContainer'
import ResetContainer from './components/ResetContainer'

const Root = () => (
  <Provider store={Store}>
    <div>
      <ButtonsContainer />
      <TodosContainer />
      <ResetContainer />
    </div>
  </Provider>
)

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root')
  ReactDOM.render(<Root />, rootEl)
})

window.Store = Store
