import React from 'react';
import PropTypes from 'prop-types';
import Post from 'src/components/Post';

import './styles.scss';

const Posts = ({ posts }) => (
  <main className="posts">
    <h1 className="posts-title">Dev Of Thrones</h1>
    <div className="posts-list">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}

      {/* <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post /> */}
    </div>
  </main>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ),
};

Posts.defaultProps = {
  posts: [],
};

export default Posts;
