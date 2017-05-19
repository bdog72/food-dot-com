import React, { Component } from 'react'
import Pizza from './Pizza'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const pizza = () => (
  <div>
    <Pizza />
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <Link to='/'>Pizza</Link>
      <Route exact path='/' component={pizza} />
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
