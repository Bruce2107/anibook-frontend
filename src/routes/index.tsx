import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import List from '../pages/List';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/list/animes"
        exact
        render={() => <List limitPerPage={4} pageName="animes" type="animes" />}
      />
      <Route
        path="/list/mangas"
        exact
        render={() => <List limitPerPage={4} pageName="mangas" type="mangas" />}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
