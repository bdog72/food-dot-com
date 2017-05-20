import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
export default class BBQ extends Component {
  render () {
    return <div>
      <div className='flex'>
        <a href='http://luckiebs.com'>
          <Button className='button'>Luckie B's</Button>
        </a>
        <a href='http://www.jimbosbarbq.com'>
          <Button className='button'>Jimbos</Button>
        </a>
        <a href='http://www.deucesbbq.com'>
          <Button className='button'>Deuces BBQ</Button>
        </a>
      </div>
    </div>
  }
}
