import React from 'react';
import { EventerServiceConsumer } from '../eventer-service-context';

const withEventerService = () => Wrapped => {
  return props => {
    return (
      <EventerServiceConsumer>
        {eventerService => {
          return <Wrapped {...props} eventerService={eventerService} />;
        }}
      </EventerServiceConsumer>
    );
  };
};

export default withEventerService;
