import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import CategoriesList from '../categories-list';
import { HomePage, FavoritesPage, EventPage, CategoriePage } from '../pages';
import './app.css';

const App = () => {
  return (
    <main>
      <Header />
      <CategoriesList />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route
          path="/events/:categories"
          render={({ match }) => {
            const { categories } = match.params;
            return <CategoriePage itemCategorie={categories} />;
          }}
        />
        <Route
          path="/event/:id"
          exact
          render={({ match }) => {
            const { id } = match.params;
            return <EventPage itemID={id} />;
          }}
        />
        <Route path="/favorites" component={FavoritesPage} />
      </Switch>
    </main>
  );
};

export default App;
