import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import List from '../pages/List';
import NotFound from '../pages/NotFound';
import RequestFail from '../pages/Request/Fail';

const limitPerPage = 4;

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      {/** listagem */}
      <Route path="/list/animes/" exact>
        <List limitPerPage={limitPerPage} pageName="animes" type="animes" />
      </Route>
      <Route path="/list/mangas/" exact>
        <List limitPerPage={limitPerPage} pageName="mangas" type="mangas" />
      </Route>
      <Route path="/list/animes/:page" exact>
        <List limitPerPage={limitPerPage} pageName="animes" type="animes" />
      </Route>
      <Route path="/list/mangas/:page" exact>
        <List limitPerPage={limitPerPage} pageName="mangas" type="mangas" />
      </Route>
      {/** request fail */}
      <Route path="/request/fail" exact>
        <RequestFail />
      </Route>
      {/** not found */}
      <Route path="/notfound" exact>
        <NotFound />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
