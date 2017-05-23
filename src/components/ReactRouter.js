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
          <Button><Link to='/'>Pizza</Link></Button>
          <Link to='/bbq'>BBQ</Link>
          <Link to='/seafood'>SeaFood</Link>
          <Link to='/everythingElse'>Everything Else</Link>
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
