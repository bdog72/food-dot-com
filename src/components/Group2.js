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
      <a href='https://tobysoriginallittleitalypizza.com'>
        <Button className='butt' block>Little Italy</Button>
      </a>
      <a href='http://laitaliamia.com'>
        <Button className='butt' block>Italia Mia</Button>
      </a>
      <a href='http://paisanospnp.com'>
        <Button className='butt' block>Paisanos</Button>
      </a>
      <a href='http://www.28gramspizza.com'>
        <Button className='butt' block>28 Grams</Button>
      </a>
      <a href='https://www.pizzabox727.com'>
        <Button className='butt' block>Pizza Box</Button>
      </a>
      <a href='http://www.unclemaddios.com'>
        <Button className='butt' block>Uncle Maddio's</Button>
      </a>
      <a href='http://joeybrooklynsfamouspizzakitchen.com'>
        <Button className='butt' block>Joey Brooklyns</Button>
      </a>
    </div>
  }
}
