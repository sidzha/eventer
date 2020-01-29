import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { eventAddedtoList } from '../../actions';

const CatListItems = ({ events, itemCategorie, onAddedtoList }) => {
  const filtEvents = [];
  events.forEach(item => {
    if (item.categories.includes(itemCategorie)) {
      filtEvents.push(item);
    }
  });

  return (
    <ul className="grid">
      {filtEvents.map(item => {
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
                  onClick={() => onAddedtoList(item.id)}
                  className="fav-buton"
                >
                  <i className="fa fa-star" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = ({ events }) => {
  return { events };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddedtoList: id => dispatch(eventAddedtoList(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CatListItems);
