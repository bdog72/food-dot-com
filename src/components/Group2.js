import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

const WellStyles = {maxWidth: 400, margin: '0 auto 10px'}

export default class Group2 extends Component {
  render () {
    return <div className='well' style={WellStyles}>
      <a href='http://luckiebs.com/'>
        <Button className='butt' block>Luckie B's</Button>
      </a>
      <a href='http://www.jimbosbarbq.com/'>
        <Button className='butt' block>Jimbos Pit BBQ</Button>
      </a>
    </div>
  }
}
