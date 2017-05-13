import React, { Component } from 'react'
import Group1 from './Group1'
import Group2 from './Group2'
import Group3 from './Group3'
import Group4 from './Group4'
import { Jumbotron } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const restaurants1 = () => (
  <div>
    <Group1 />
  </div>
)

const restaurants2 = () => (
  <div>
    <Group2 />
  </div>
)
const restaurants3 = () => (
  <div>
    <Group3 />
  </div>
)

const restaurants4 = () => (
  <div>
    <Group4 />
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <Jumbotron className='jumbo'>
        {/* <ul>
          <li><Link to='/'>PIZZA</Link></li>
          <li><Link to='/restaurants2'><h2>Group<br />2</h2></Link></li>
          <li><Link to='/restaurants3'><h2>Group<br />3</h2></Link></li>
          <li><Link to='/restaurants4'><h2>Group<br />4</h2></Link></li>
        </ul> */}
        <div className='groups'>
          <Link to='/'><h2>PIZZA</h2></Link>
          <Link to='/restaurants2'><h2>Group<br />2</h2></Link>
          <Link to='/restaurants3'><h2>Group<br />3</h2></Link>
          <Link to='/restaurants4'><h2>Group<br />4</h2></Link>
        </div>

      </Jumbotron>
      <Route exact path='/' component={restaurants1} />
      <Route path='/restaurants2' component={restaurants2} />
      <Route path='/restaurants3' component={restaurants3} />
      <Route path='/restaurants4' component={restaurants4} />
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
