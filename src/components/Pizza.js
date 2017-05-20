import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
export default class Pizza extends Component {
  render () {
    return <div>
      <div className='flex'>
        <a href='https://tobysoriginallittleitalypizza.com'>
          <Button className='pizza'>Little Italy</Button>
        </a>
        <a href='http://laitaliamia.com'>
          <Button className='pizza'>Italia Mia</Button>
        </a>
        <a href='http://paisanospnp.com'>
          <Button className='pizza'>Paisanos</Button>
        </a>
        <a href='http://www.28gramspizza.com'>
          <Button className='pizza'>28 Grams Pizza</Button>
        </a>
      </div>
    </div>
  }
}
