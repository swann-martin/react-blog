import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Post = ({ title, category }) => (
  <article className="post">
    <h2 className="post-title">{title}</h2>
    <div className="post-category">{category}</div>
    <p className="post-excerpt">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed mollitia ad
      incidunt cum sunt voluptatum, fuga quos vero aliquid veniam.
    </p>
  </article>
);

Post.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
};

Post.defaultProps = {
  title: '',
  category: '',
};

export default Post;
