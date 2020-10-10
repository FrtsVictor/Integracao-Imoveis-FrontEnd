import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cadastro from '../pages/cadastro';
import Favoritos from '../pages/favoritos';
import Home from '../pages/home';
import Login from '../pages/login';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/Home" component={Home} />
    <Route path="/Login" component={Login} />
    <Route path="/Cadastro" component={Cadastro} />
    <Route path="/Favoritos" component={Favoritos} />
  </Switch>
);

export default Routes;
