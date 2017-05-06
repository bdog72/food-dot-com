import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

const WellStyles = {maxWidth: 400, margin: '0 auto 10px'}

export default class Group3 extends Component {
  render () {
    return <div>
      <div className='well' style={WellStyles}>
        <a href='http://www.bigapplebuffet.com'>
          <Button className='butt' block>Big Apple Buffet</Button>
        </a>
        <a href='https://www.yelp.com/biz/chi-town-beefs-and-dogs-saint-petersburg'>
          <Button className='butt' block>Chi Town Beef and Dogs</Button>
        </a>
        <a href='https://www.midpeninsulaseafood.com/'>
          <Button className='butt' block>Mid Peninsula Seafood</Button>
        </a>
      </div>
    </div>
  }
}
