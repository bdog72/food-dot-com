import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

const WellStyles = {maxWidth: 400, margin: '0 auto 10px'}

export default class Group4 extends Component {
  render () {
    return <div>
      <div className='well' style={WellStyles}>
        <a href=''>
          <Button className='butt' block>Bdog</Button>
        </a>
      </div>
    </div>
  }
}
