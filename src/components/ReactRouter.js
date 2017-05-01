import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const restaurants1 = () => (
  <div>
    <h2>Restaurant-1</h2>
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
      <li><Link to='/'>Restaurant-1</Link></li>
      <li><Link to='/restaurants2'>Restaurant-2</Link></li>
      <hr />
      <Route exact path='/' component={restaurants1} />
      <Route exact path='/restaurants2' component={restaurants2} />
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
