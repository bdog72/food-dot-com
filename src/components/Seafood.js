import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
export default class Seafood extends Component {
  render () {
    return <div>
      <div className='flex'>
        <a href='https://www.midpeninsulaseafood.com'>
          <Button className='button' block>Mid P Seafood</Button>
        </a>
        <a href='http://www.casualclam.com'>
          <Button className='button' block>Casual Clam</Button>
        </a>
        <a href='https://www.bonefishgrill.com'>
          <Button className='button' block>BoneFish Grill</Button>
        </a>
        <a href='http://www.crabshack.com'>
          <Button className='button' block>Crab Shack</Button>
        </a>
        <a href='http://www.blakescrabcakes.com'>
          <Button className='button' block>Blakes Crab Cake</Button>
        </a>
        <a href='http://www.docksidedavesgrill.com'>
          <Button className='button' block>Dave's Dockside</Button>
        </a>
        <a href='http://www.keegansseafood.com'>
          <Button className='button' block>Keegan's SeaFood</Button>
        </a>
        <a href='http://www.tedpetersfish.com'>
          <Button className='button' block>Ted Peters</Button>
        </a>
        <a href='http://www.billysstonecrab.com'>
          <Button className='button' block>Billy's StoneCrab</Button>
        </a>
      </div>
    </div>
  }
}
