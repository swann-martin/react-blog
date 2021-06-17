// == Import
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import PropTypes from 'prop-types';

// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
import NotFound from 'src/components/NotFound';

// data, styles et utilitaires
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
import './styles.scss';

// == Composant
const Blog = () => {
  const [zenMode, setZenMode] = useState(true);
  const [postsList, setPostsList] = useState(postsData);
  const [categoriesList, setCategoriesList] = useState(categoriesData);

  const handleZenMode = () => {
    setZenMode(!zenMode);
  };

  const filterPosts = (label) => {
    if (label === 'Accueil') {
      return postsList;
    }
    return postsList.filter((post) => post.category === label);
  };

  return (
    <div className="blog">
      <Header
        list={categoriesList}
        zenMode={zenMode}
        onZenActivationClicked={handleZenMode}
      />
      <Switch>
        {categoriesList.map((routeObject) => (
          <Route exact key={routeObject.route} path={routeObject.route}>
            <Posts list={filterPosts(routeObject.label)} zenOn={zenMode} />
          </Route>
        ))}

        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

Header.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// == Export
export default Blog;
