import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

const WellStyles = {maxWidth: 400, margin: '0 auto 10px'}

export default class Group1 extends Component {
  render () {
    return <div>
      <div className='well' style={WellStyles}>
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
        <a href='http://mellowmushroom.com'>
          <Button className='butt' block>Mellow MushRoom</Button>
        </a>
      </div>
    </div>
  }
}
