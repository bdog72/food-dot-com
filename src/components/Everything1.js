import React, { Component } from 'react'
import dataeverything from '../dataeverything.json'
export default class Everything1 extends Component {
  state = {
    name: ''
  }

  static propTypes = {
    params: React.PropTypes.object
  }

  componentDidMount () {
    this.setState(dataeverything[this.props.params.slug])
  }
  render () {
    return <div>
      <h1>B</h1>
    </div>
  }
}
