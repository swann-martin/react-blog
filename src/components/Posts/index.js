import React from 'react';
import PropTypes from 'prop-types';
import Post from 'src/components/Post';

import './styles.scss';

const Posts = ({ posts, zenOn }) => (
  <main className="posts">
    <h1 className="posts-title">Dev Of Thrones</h1>
    <div className={zenOn ? 'posts-list' : 'post-list post-list--zenOn'}>
      {posts.map((post) => (
        <Post key={post.id} {...post} zen={zenOn} />
      ))}
    </div>
  </main>
);

Posts.propTypes = {
  zenOn: PropTypes.bool,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

Posts.defaultProps = {
  zenOn: false,
  posts: [],
};

export default Posts;
