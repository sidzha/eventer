import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import EventerService from './services/eventer-service';
import { EventerServiceProvider } from './components/eventer-service-context';

import store from './store';

const eventerService = new EventerService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <EventerServiceProvider value={eventerService}>
        <Router>
          <App />
        </Router>
      </EventerServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
