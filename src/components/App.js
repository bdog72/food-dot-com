import React, { Component } from 'react'
import ReactRouter from './ReactRouter'
export default class App extends Component {
  render () {
    return <div>
      <h1 className='header'>Restaurants</h1>
      <h1 className='header'>That I Enjoy</h1>
      <div>
        <ReactRouter />
      </div>
      {/* <h1>Bozo Bdog</h1> */}
    </div>
  }
}
