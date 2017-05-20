import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
export default class Pizza extends Component {
  render () {
    return <div>
      <div className='flex'>
        <a href='https://tobysoriginallittleitalypizza.com'>
          <Button className='button'>Little Italy</Button>
        </a>
        <a href='http://laitaliamia.com'>
          <Button className='button'>Italia Mia</Button>
        </a>
        <a href='http://paisanospnp.com'>
          <Button className='button'>Paisanos</Button>
        </a>
        <a href='http://www.28gramspizza.com'>
          <Button className='button'>28 Grams Pizza</Button>
        </a>
        <a href='https://www.pizzabox727.com'>
          <Button className='button'>Pizza Box</Button>
        </a>
        <a href='http://www.unclemaddios.com'>
          <Button className='button'>Uncle Maddios</Button>
        </a>
        <a href='http://joeybrooklynsfamouspizzakitchen.com'>
          <Button className='button'>Joey Brooklyn's</Button>
        </a>
        <a href='http://mellowmushroom.com'>
          <Button className='button'>Mellow Mushroom</Button>
        </a>
      </div>
    </div>
  }
}
