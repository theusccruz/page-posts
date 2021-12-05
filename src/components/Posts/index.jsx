import React, { Component } from 'react'

import PostCard from '../PostCard';
import './styles.css';

export default class Posts extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div className='posts'>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    )
  }
}
