import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
export default class Pizza extends Component {
  render () {
    return <div>
      <div className='flex'>
        <a href='https://tobysoriginallittleitalypizza.com'>
          <Button className='button'><h1>Little Italy</h1></Button>
        </a>
        <a href='http://laitaliamia.com'>
          <Button className='button'><h1>Italia Mia</h1></Button>
        </a>
        <a href='http://paisanospnp.com'>
          <Button className='button'><h1>Paisanos</h1></Button>
        </a>
        <a href='http://www.28gramspizza.com'>
          <Button className='button'><h1>28 Grams Pizza</h1></Button>
        </a>
        <a href='https://www.pizzabox727.com'>
          <Button className='button'><h1>Pizza Box</h1></Button>
        </a>
        <a href='http://www.unclemaddios.com'>
          <Button className='button'><h1>Uncle Maddios</h1></Button>
        </a>
        <a href='http://joeybrooklynsfamouspizzakitchen.com'>
          <Button className='button'><h1>Joey Brooklyn's</h1></Button>
        </a>
        <a href='http://mellowmushroom.com'>
          <Button className='button'><h1>Mellow Shroom</h1></Button>
        </a>
      </div>
    </div>
  }
}
