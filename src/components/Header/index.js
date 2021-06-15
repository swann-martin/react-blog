import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Header = ({ categories, zenMode, onZenActivationClicked }) => (
  <header className="menu">
    <nav>
      {categories.map(({ route, label }) => (
        <a className="menu-link menu-link--selected" href={route}>
          {label}
        </a>
      ))}

      <button
        className="menu-btn"
        type="button"
        onClick={() => {
          onZenActivationClicked();
        }}
      >
        {zenMode ? 'Activer le mode zen' : 'Desactiver le mode zen'}
      </button>
    </nav>
  </header>
);

Header.propTypes = {
  zenMode: PropTypes.bool,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
};

Header.defaultProps = {
  zenMode: false,
  categories: [],
};

export default Header;
