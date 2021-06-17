import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

const Header = ({ list, zenMode, onZenActivationClicked }) => (
  <header className="menu">
    <nav>
      {list.map(({ route, label }) => (
        <NavLink
          className="menu-link"
          key={route}
          to={route}
          activeClassName="menu-link--selected"
        >
          {label}
        </NavLink>
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
  list: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
};

Header.defaultProps = {
  zenMode: false,
  list: [],
};

export default Header;
