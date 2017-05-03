import React, { Component } from 'react'
import ReactRouter from './ReactRouter'
// import { Button } from 'react-bootstrap'

// const WellStyles = {maxWidth: 400, margin: '0 auto 10px'}

export default class App extends Component {
  render () {
    return <div>
      <h1>Food</h1>
      <ReactRouter />
    </div>
  }
}
