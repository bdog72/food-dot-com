import React, { Component } from 'react'
import ReactRouter from './ReactRouter'

export default class App extends Component {
  render () {
    return <div>
      <h1>Restaurants</h1>
      {/* <h1>I</h1>
      <h1>Enjoy</h1> */}
      <ReactRouter />
    </div>
  }
}
