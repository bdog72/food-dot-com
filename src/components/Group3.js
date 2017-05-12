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
        <a href='https://www.midpeninsulaseafood.com'>
          <Button className='butt' block>Mid Peninsula Seafood</Button>
        </a>
        <a href='http://www.mazzarosmarket.com'>
          <Button className='butt' block>Mazzaro's Italian Market</Button>
        </a>
        <a href='http://www.cicciocali.com'>
          <Button className='butt' block>Ciccio's Cali</Button>
        </a>
        <a href='https://metrodiner.com/'>
          <Button className='butt' block>Metro Diner</Button>
        </a>
        <a href='http://www.senortacomexicanrestaurant.com'>
          <Button className='butt' block>Senor Taco</Button>
        </a>
        <a href='http://www.rickyps.com'>
          <Button className='butt' block>Ricky P's</Button>
        </a>
        <a href='http://www.pofolks.net'>
          <Button className='butt' block>Po Folks</Button>
        </a>
        <a href='http://www.crabshack.com'>
          <Button className='butt' block>Crab Shack</Button>
        </a>
        <a href='http://noble-crust.com/Noble-Crust-St-Petersburg/Brunch'>
          <Button className='butt' block>Noble Crust</Button>
        </a>
        <a href='https://www.outback.com/locations/fl/st-pete-4th'>
          <Button className='butt' block>Outback SteakHouse</Button>
        </a>
        <a href='http://www.thaiwokstpete.com'>
          <Button className='butt' block>Thai Wok</Button>
        </a>
      </div>
    </div>
  }
}
