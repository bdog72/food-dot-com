import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
export default class Seafood extends Component {
  render () {
    return <div>
      <div className='flex'>
        <a href='https://www.midpeninsulaseafood.com'>
          <Button className='button' block><h1>Mid P Seafood</h1></Button>
        </a>
        <a href='http://www.casualclam.com'>
          <Button className='button' block><h1>Casual Clam</h1></Button>
        </a>
        <a href='https://www.bonefishgrill.com'>
          <Button className='button' block><h1>BoneFish Grill</h1></Button>
        </a>
        <a href='http://www.crabshack.com'>
          <Button className='button' block><h1>Crab Shack</h1></Button>
        </a>
        <a href='http://www.blakescrabcakes.com'>
          <Button className='button' block><h1>Blakes Crab</h1></Button>
        </a>
        <a href='http://www.docksidedavesgrill.com'>
          <Button className='button' block><h1>Dave's Dock</h1></Button>
        </a>
        <a href='http://www.keegansseafood.com'>
          <Button className='button' block><h1>Keegan's</h1></Button>
        </a>
        <a href='http://www.tedpetersfish.com'>
          <Button className='button' block><h1>Ted Peters</h1></Button>
        </a>
        <a href='http://www.billysstonecrab.com'>
          <Button className='button' block><h1>Billy's Stone-C</h1></Button>
        </a>
      </div>
    </div>
  }
}
