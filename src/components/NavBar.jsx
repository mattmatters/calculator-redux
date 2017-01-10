import React, { PropTypes } from 'react';

const propTypes = {
  user: PropTypes.string,
};

// eslint-disable-next-line
const NavBar = ({ user }) => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button" className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar-content"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="#slk">
          <b>Bev-Collab</b>
        </a>
      </div>
      <div id="navbar-content" className="navbar-right collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li> My Profile </li>
          <li className="active"> My beers </li>
          <li> Expore </li>
        </ul>
      </div>
    </div>
  </nav>
);

NavBar.propTypes = propTypes;

export default NavBar;
