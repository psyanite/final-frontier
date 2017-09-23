import React, { Component } from 'react'
import { Provider } from 'react-redux'

import MainApp from './src/components/App'
import store from './src/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainApp />
      </Provider>
    )
  }
}
