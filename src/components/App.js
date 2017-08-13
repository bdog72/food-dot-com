import React, { Component } from 'react'
import ReactRouter from './ReactRouter'
import { PageHeader } from 'react-bootstrap'
export default class App extends Component {
  render () {
    return <div>
      <PageHeader className='header1'>
        <h1 className='header'>Restaurants</h1>
        <h1 className='header'>That I Enjoy</h1>
      </PageHeader>
      <div>
        <ReactRouter />
      </div>
      {/* <h1>Bozo Bdog</h1> */}
    </div>
  }
}
