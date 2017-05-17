import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

const WellStyles = {maxWidth: 400, margin: '0 auto 10px'}

export default class Group4 extends Component {
  render () {
    return <div>
      <div className='well' style={WellStyles}>
        <a href='http://www.blakescrabcakes.com'>
          <Button className='butt' block>Blakes Crab Cake</Button>
        </a>
        <a href='http://www.docksidedavesgrill.com'>
          <Button className='butt' block>Dave's Dockside</Button>
        </a>
      </div>
    </div>
  }
}
