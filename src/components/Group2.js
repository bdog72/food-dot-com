import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

const WellStyles = {maxWidth: 400, margin: '0 auto 10px'}

export default class Group2 extends Component {
  render () {
    return <div className='well' style={WellStyles}>
      <a href='http://luckiebs.com'>
        <Button className='butt' block>Luckie B's</Button>
      </a>
      <a href='http://www.jimbosbarbq.com'>
        <Button className='butt' block>Jimbos Pit BBQ</Button>
      </a>
      <a href='http://www.burgermonger.com'>
        <Button className='butt' block>Burger Monger</Button>
      </a>
      <a href='http://www.peteandshortys.com'>
        <Button className='butt' block>Pete and Shorty's</Button>
      </a>
      <a href='http://biffburgers.com'>
        <Button className='butt' block>Biff Burger</Button>
      </a>
      <a href='https://www.bjsrestaurants.com'>
        <Button className='butt' block>BJ's BrewHouse</Button>
      </a>
      <a href='http://pollotropical.com'>
        <Button className='butt' block>Pollo Tropical</Button>
      </a>
      <a href='https://www.glorydaysgrill.com'>
        <Button className='butt' block>Glory Days</Button>
      </a>
      <a href='http://cheddars.com'>
        <Button className='butt' block>Cheddars</Button>
      </a>
      <a href='https://www.peiwei.com'>
        <Button className='butt' block>Pei Wei</Button>
      </a>
      <a href='http://www.hookssushi.com/'>
        <Button className='butt' block>Hooks</Button>
      </a>
      <a href='https://tijuanaflats.com'>
        <Button className='butt' block>Tijuana Flats</Button>
      </a>
      <a href='https://www.eatpdq.com'>
        <Button className='butt' block>PDQ</Button>
      </a>
      <a href='http://www.eatfreshkitchen.com'>
        <Button className='butt' block>Fresh Kitchen</Button>
      </a>
      <a href='http://www.babalueats.com/'>
        <Button className='butt' block>Babalu</Button>
      </a>
      <a href='http://www.casualclam.com'>
        <Button className='butt' block>Casual Clam</Button>
      </a>
      <a href='https://www.bonefishgrill.com'>
        <Button className='butt' block>BoneFish Grill</Button>
      </a>
    </div>
  }
}
