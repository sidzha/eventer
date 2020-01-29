import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import './event-page-item.css';

const EventPageItem = ({ events, itemID }) => {
  const filtrEvents = events.filter(event => parseInt(itemID) === event.id);
  return (
    <Fragment>
      {filtrEvents.map(event => {
        return (
          <article className="event-page-item" key={event.id}>
            <h2>{event.title}</h2>
            <img src={event.image} alt="news-pic" />
            <p>{event.description}</p>
            <span className="event-page-item_price">
              {event.is_free ? 'Вход бесплантый!' : event.price}
            </span>
          </article>
        );
      })}
    </Fragment>
  );
};

const mapStateToProps = ({ events }) => {
  return { events };
};

export default connect(mapStateToProps)(EventPageItem);
