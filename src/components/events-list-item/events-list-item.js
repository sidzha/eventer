import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './events-list-item.css';

const EventsListItem = ({ event, onAddedtoList }) => {
  const { id, title, image } = event;
  return (
    <Fragment>
      <Link to={`/event/${id}`}>
        <div className="card__body">
          <img src={image} alt="news" />
        </div>
      </Link>
      <div className="card__footer">
        <div className="media__body">
          <h2>{title}</h2>
          <button onClick={onAddedtoList} className="fav-buton">
            <i className="fa fa-star" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default EventsListItem;
