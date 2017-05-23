import React, { Component } from 'react'
import Pizza from './Pizza'
import BBQ from './BBQ'
import Seafood from './Seafood'
import EverythingElse from './EverythingElse'
import { Jumbotron, Button } from 'react-bootstrap'
import '../styles/reactrouter.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const pizza = () => (
  <div>
    <Pizza />
  </div>
)

const bbq = () => (
  <div>
    <BBQ />
  </div>
)

const seafood = () => (
  <div>
    <Seafood />
  </div>
)

const everythingElse = () => (
  <div>
    <EverythingElse />
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <Jumbotron className='jumbo'>
        <div className='links'>
          <Button className='butt'>
            <Link to='/'>Pizza</Link>
          </Button>
          <Button className='butt'>
            <Link to='/bbq'>BBQ</Link>
          </Button>
          <Button className='butt'>
            <Link to='/seafood'>SeaFood</Link>
          </Button>
          <Button className='butt'>
            <Link to='/everythingElse'>Everything Else</Link>
          </Button>
        </div>
      </Jumbotron>
      <div className='router'>
        <Route exact path='/' component={pizza} />
        <Route path='/bbq' component={bbq} />
        <Route path='/seafood' component={seafood} />
        <Route path='/everythingElse' component={everythingElse} />
      </div>
    </div>
  </Router>
)
export default class ReactRouter extends Component {
  render () {
    return <div>
      <BasicExample />
    </div>
  }
}
