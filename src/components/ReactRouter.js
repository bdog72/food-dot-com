import React, { Component } from 'react'
import Everything from './Everything'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const restaurants1 = () => (
  <div>
    <Everything />
  </div>
)

const restaurants2 = () => (
  <div>
    <h2>Restaurant-2</h2>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/'><h2>Group-1</h2></Link></li>
        <li><Link to='/restaurants2'><h2>Group-2</h2></Link></li>
      </ul>
      <hr />
      <Route exact path='/' component={restaurants1} />
      <Route path='/restaurants2' component={restaurants2} />
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
