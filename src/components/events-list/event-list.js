import React, { Component } from 'react';
import EventsListItem from '../events-list-item';
import { connect } from 'react-redux';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withEventerService } from '../hoc';
import { fetchEvents, eventAddedtoList } from '../../actions';
import { compose } from '../../utils';
import './event-list.css';

const EventsList = ({ events, onAddedtoList }) => {
  return (
    <ul className="grid">
      {events.map(event => {
        return (
          <li className="grid__item card" key={event.id}>
            <EventsListItem
              event={event}
              onAddedtoList={() => onAddedtoList(event.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

class EventsListContainer extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const { events, loading, error, onAddedtoList } = this.props;
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <EventsList events={events} onAddedtoList={onAddedtoList} />;
  }
}

const mapStateToProps = ({ events, loading, error }) => {
  return { events, loading, error };
};

const mapDispatchToProps = (dispatch, { eventerService }) => {
  return {
    fetchEvents: fetchEvents(eventerService, dispatch),
    onAddedtoList: id => {
      dispatch(eventAddedtoList(id));
    }
  };
};

export default compose(
  withEventerService(),
  connect(mapStateToProps, mapDispatchToProps)
)(EventsListContainer);
