import React from 'react';
import EventPageItem from '../event-page-item';

const EventPage = ({ itemID }) => {
  return (
    <div>
      <EventPageItem itemID={itemID} />
    </div>
  );
};

export default EventPage;
