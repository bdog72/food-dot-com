import React, { Component } from 'react'

export default class Everything extends Component {
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
