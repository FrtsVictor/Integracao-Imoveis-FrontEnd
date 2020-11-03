import React from 'react';
import { Switch } from 'react-router-dom';
import { Cadastro } from '../pages/cadastro';
import { Favoritos } from '../pages/favoritos';
import { Home } from '../pages/home';
import { Login } from '../pages/login';
import { Search } from '../pages/search';
import Route from './authRoute';

export const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/Home" component={Home} />
    <Route path="/Login" component={Login} />
    <Route path="/Cadastro" component={Cadastro} />
    <Route path="/search" component={Search} />
    <Route path="/Favoritos" component={Favoritos} isPrivate />
  </Switch>
);
