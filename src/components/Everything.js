import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

const WellStyles = {maxWidth: 400, margin: '0 auto 10px'}

export default class Everything1 extends Component {
  render () {
    return <div>
      <div className='well' style={WellStyles}>
        <a href='https://www.bjsrestaurants.com'>
          <Button className='butt' bsStyle='primary' bsSize='large' block>BJ's BrewHouse</Button>
        </a>
        <a href='https://www.bjsrestaurants.com'>
          <Button className='butt' bsStyle='primary' bsSize='large' block>Pollo Tropical</Button>
        </a>
        <a href='https://www.bjsrestaurants.com'>
          <Button className='butt' bsStyle='primary' bsSize='large' block>Glory Days</Button>
        </a>
        <a href='https://www.bjsrestaurants.com'>
          <Button className='butt' bsStyle='primary' bsSize='large' block>Cheddars</Button>
        </a>
        <a href='https://www.bjsrestaurants.com'>
          <Button className='butt' bsStyle='primary' bsSize='large' block>Pei Wei</Button>
        </a>
        <a href='https://www.bjsrestaurants.com'>
          <Button className='butt' bsStyle='primary' bsSize='large' block>Hooks</Button>
        </a>
      </div>
    </div>
  }
}

    // <a href=''>
    //   <Button className='butt' bsStyle='primary' block>BB</Button>
    // </a>
