import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { eventRemovedfromList } from '../../actions';
import './fav-list.css';

const FavList = ({ favorites, onRemovedfromList }) => {
  return (
    <Fragment>
      {favorites.length ? (
        <ul className="fav-list grid">
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
      ) : (
        <div className="empty-cart">
          Список пуст! Добавьте эвент в&nbsp;избранное кликнув на&nbsp;
          <span role="img" aria-hidden="true">
            ⭐
          </span>
        </div>
      )}
    </Fragment>
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
