import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import List from '../pages/List';
import NotFound from '../pages/NotFound';
import RequestFail from '../pages/Request/Fail';
import Info from '../pages/Info';
import SingUp from '../pages/SingUp';

const limitPerPage = 6;
// TODO: #5 rota do histórico
const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      {/** listagem */}
      {/* <Route path="/list/animes/" exact>
        <List limitPerPage={limitPerPage} pageName="animes" type="anime" />
      </Route>
      <Route path="/list/mangas/" exact>
        <List limitPerPage={limitPerPage} pageName="mangas" type="manga" />
      </Route>
      <Route path="/list/animes/:page" exact>
        <List limitPerPage={limitPerPage} pageName="animes" type="anime" />
      </Route>
      <Route path="/list/mangas/:page" exact>
        <List limitPerPage={limitPerPage} pageName="mangas" type="manga" />
      </Route> */}
      <Route path="/search" exact>
        <List limitPerPage={limitPerPage} pageName="Pesquisa" />
      </Route>
      {/** info page */}
      {/* <Route path="/anime/:name" exact>
        <Info />
      </Route>
      <Route path="/manga/:name" exact>
        <Info />
      </Route> */}
      <Route path="/details/:name" exact>
        <Info />
      </Route>
      {/** request fail */}
      <Route path="/request/fail" exact>
        <RequestFail />
      </Route>
      {/** not found */}
      <Route path="/notfound" exact>
        <NotFound />
      </Route>
      {/* sing-up */}
      <Route path="/singup" exact>
        <SingUp />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
