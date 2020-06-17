import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import List from '../pages/List';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/list/animes/:page" exact>
        <List limitPerPage={4} pageName="animes" type="animes" />
      </Route>
      <Route path="/list/mangas/:page" exact>
        <List limitPerPage={4} pageName="mangas" type="mangas" />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
