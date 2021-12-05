import { Component } from "react";

import './styles.css'

export default class PostCard extends Component {
  render() {
    const {  cover, title, body } = this.props.post;

    return (
      <div className='post'>
        <img src={cover} alt={title} />
        <div className='post-content'>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </div>
    );
  }
}