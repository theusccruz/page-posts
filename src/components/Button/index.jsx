import React, { Component } from 'react'

import './styles.css'

export default class Button extends Component {
  render() {
    const { onClick, children, disabled } = this.props;

    return (
      <button disabled={disabled} type='button' onClick={onClick} className='button'>
        {children}
      </button>
    )
  }
}
