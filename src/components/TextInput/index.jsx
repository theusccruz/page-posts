import React, { Component } from 'react'

import './styles.css'

export default class TextInput extends Component {
  render() {
    const { value, onChange, type } = this.props;

    return (
      <input className='text-input' value={value} onChange={onChange} type={type} />
    )
  }
}
