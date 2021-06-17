import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Post = ({ title, category, excerpt, zen }) => (
  <article className={zen ? 'post' : 'post post--zen'}>
    <h2 className="post-title">{title}</h2>
    <div className="post-category">{category}</div>
    <p className="post-excerpt">{excerpt}</p>
  </article>
);

Post.propTypes = {
  zen: PropTypes.bool,
  title: PropTypes.string,
  category: PropTypes.string,
  excerpt: PropTypes.string,
};

Post.defaultProps = {
  zen: false,
  title: '',
  category: '',
  excerpt: '',
};

export default Post;
