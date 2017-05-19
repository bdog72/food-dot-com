import React, { Component } from 'react'
import ReactRouter from './ReactRouter'
export default class App extends Component {
  render () {
    return <div>
      <h1 className='header'>Restaurants</h1>
      <ReactRouter />
    </div>
  }
}
