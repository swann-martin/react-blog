// == Import
import React, { PureComponent } from 'react';

// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

// data, styles et utilitaires
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
import './styles.scss';

// == Composant
class Blog extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      posts: postsData,
      categories: categoriesData,
    };
  }

  render() {
    const { posts, categories } = this.state;
    console.log('categoriesData', categoriesData);
    console.log('postData', postsData);
    return (
      <div className="blog">
        <Header categories={categories} />
        <Posts posts={posts} />
        <Footer />
      </div>
    );
  }
}

// == Export
export default Blog;
