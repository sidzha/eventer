const eventsRequested = () => {
  return {
    type: 'FETCH_EVENTS_REQUEST'
  };
};

const eventsLoaded = newEvents => {
  return {
    type: 'FETCH_EVENTS_SUCCESS',
    payload: newEvents
  };
};

const eventsError = error => {
  return {
    type: 'FETCH_EVENTS_FAILURE',
    payload: error
  };
};

export const eventAddedtoList = eventId => {
  return {
    type: 'EVENT_ADDED_TO_LIST',
    payload: eventId
  };
};

export const eventRemovedfromList = eventId => {
  return {
    type: 'EVENT_REMOVED_FROM_LIST',
    payload: eventId
  };
};

export const searchEvents = searchParams => {
  return {
    type: 'SEARCH_EVENTS',
    payload: searchParams
  };
};

const fetchEvents = (eventerService, dispatch) => () => {
  dispatch(eventsRequested());
  eventerService
    .getEvents()
    .then(data => dispatch(eventsLoaded(data)))
    .catch(err => dispatch(eventsError(err)));
};

export { eventsLoaded, fetchEvents };
