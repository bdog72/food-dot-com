import React, { Component } from 'react'
import Pizza from './Pizza'
import BBQ from './BBQ'
import Seafood from './Seafood'
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

const BasicExample = () => (
  <Router>
    <div>
      <div className='links'>
        <Link to='/'>Pizza</Link>
        <Link to='/bbq'>BBQ</Link>
        <Link to='/seafood'>SeaFood</Link>
      </div>
      <div className='router'>
        <Route exact path='/' component={pizza} />
        <Route path='/bbq' component={bbq} />
        <Route path='/seafood' component={seafood} />
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
