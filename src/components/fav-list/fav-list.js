import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { eventRemovedfromList } from '../../actions';

const FavList = ({ favorites, onRemovedfromList }) => {
  return (
    <ul className="grid">
      {favorites.map(item => {
        return (
          <li className="grid__item card" key={item.id}>
            <Link to={`/event/${item.id}`}>
              <div className="card__body">
                <img src={item.image} alt="news" />
              </div>
            </Link>
            <div className="card__footer">
              <div className="media__body">
                <h2>{item.title}</h2>
                <button
                  onClick={() => onRemovedfromList(item.id)}
                  className="fav-buton"
                >
                  <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = ({ favorites }) => {
  return { favorites };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemovedfromList: id => dispatch(eventRemovedfromList(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavList);
