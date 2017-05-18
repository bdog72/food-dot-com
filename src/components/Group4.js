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
        <a href='http://www.deucesbbq.com/'>
          <Button className='butt' block>Deuces BBQ</Button>
        </a>
        <a href='https://www.tacosonmexicangrill.com'>
          <Button className='butt' block>Taco Son</Button>
        </a>
        <a href='http://www.keegansseafood.com'>
          <Button className='butt' block>Keegan's SeaFood</Button>
        </a>
        <a href='http://www.tedpetersfish.com'>
          <Button className='butt' block>Ted Peters</Button>
        </a>
      </div>
    </div>
  }
}
