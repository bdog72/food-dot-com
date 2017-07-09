import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
export default class BBQ extends Component {
  render () {
    return <div>
      <div className='flex'>
        <a href='http://luckiebs.com'>
          <Button className='button'><h1>Luckie B's</h1></Button>
        </a>
        <a href='http://www.jimbosbarbq.com'>
          <Button className='button'><h1>Jimbos</h1></Button>
        </a>
        <a href='http://www.deucesbbq.com'>
          <Button className='button'><h1>Deuces BBQ</h1></Button>
        </a>
        <a href='https://www.yelp.com/biz/rush-hour-chicken-and-waffles-saint-petersburg?osq=Chicken+and+Waffles'>
          <Button className='button' block><h1>Rush Hour C&W</h1></Button>
        </a>
      </div>
    </div>
  }
}
