import React from 'react';
import {
  Route as ReactDOMRoute, Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/integracaoAuth';
// rest pega o resto da propiedae das rotas... path, is actvated
// renomeando componente que vem do index
const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();

  return (

    <ReactDOMRoute
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={({ location }) => (isPrivate === !!user ? (
        <Component />
      ) : (
        <Redirect to={{
          pathname: isPrivate ? '/' : '/favoritos',
          state: { from: location },
        }}
        />
      ))}
    />
  );
};

export default Route;
