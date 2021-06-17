// == Import
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios'
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

  const onPostButtonClick = () => {
    axios({
      method: 'get',
      url: 'https://oclock-open-apis.vercel.app/api/blog/posts'
    })
      .then((res) => {

        console.log('res.data', res.data)
        updateList(res.data, 'posts')
      })
      .catch((err) => {
        console.log(console.log('oups ça ne fonctionne pas', err))
      })
  }

  const onCategoriesButtonClick = () => {
    axios({
      method: 'get',
      url: 'https://oclock-open-apis.vercel.app/api/blog/categories'
    })
      .then((res) => {

        console.log('res.data', res.data)
        updateList(res.data, 'categories')
      })
      .catch((err) => {
        console.log(console.log('oups ça ne fonctionne pas', err))
      })
  }

  const updateList = (data, stateToUpdate) => {
    if (stateToUpdate === 'posts') {
      setPostsList(data);
    } else if (stateToUpdate === 'categories')
      setCategoriesList(data)
  }

  return (
    <div className="blog">
      <Header
        list={categoriesList}
        zenMode={zenMode}
        onZenActivationClicked={handleZenMode}
      />

      <button onClick={onPostButtonClick}> Update les posts</button>
      <button onClick={onCategoriesButtonClick}> Update les posts</button>
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
