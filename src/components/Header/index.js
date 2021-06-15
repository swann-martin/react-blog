import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Header = ({ categories }) => (
  <header className="menu">
    <nav>
      {categories.map(({ route, label }) => (
        <a className="menu-link menu-link--selected" href={route}>
          {label}
        </a>
      ))}

      <button className="menu-btn" type="button">
        Activer le mode zen
      </button>
    </nav>
  </header>
);

Header.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
};

Header.defaultProps = {
  categories: [],
};

export default Header;
