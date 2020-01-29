import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { searchEvents } from '../../actions';

import './header.css';

const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <Link className="logo" to="/">
        Eventer
      </Link>
      <div className="header_container">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input
          type="search"
          placeholder="поиск по заголовкам"
          onChange={e => onSearch(e.target.value)}
        />
      </div>
      <Link className="favorites" to="/favorites">
        <i className="fa fa-star" aria-hidden="true"></i> Избранное
      </Link>
    </header>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onSearch: searchParams => dispatch(searchEvents(searchParams))
  };
};

export default connect(null, mapDispatchToProps)(Header);
