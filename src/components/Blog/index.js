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
      isZen: true,
      posts: postsData,
      categories: categoriesData,
    };
  }

  handleZenMode = () => {
    const { isZen } = this.state;
    this.setState({
      isZen: !isZen,
    });
  };

  render() {
    const { posts, categories, isZen } = this.state;

    console.log('categoriesData', categoriesData);
    console.log('postData', postsData);
    return (
      <div className="blog">
        <Header
          categories={categories}
          zenMode={isZen}
          onZenActivationClicked={this.handleZenMode}
        />
        <Posts posts={posts} zenOn={isZen} />
        <Footer />
      </div>
    );
  }
}

// == Export
export default Blog;
