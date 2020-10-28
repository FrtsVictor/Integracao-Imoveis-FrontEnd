import React from 'react';
import { Redirect, Route as ReactDOMRoute } from 'react-router-dom';
import { useAuth } from '../hooks/integracaoAuth';

// rest pega o resto da propiedae das rotas... path, is actvated
// renomeando componente que vem do index
const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={({ location }) => {
        // TODO verificar se o token é válido
        if (isPrivate && !user.id) {
          return (
            <Redirect to={{
              pathname: '/login',
              state: { from: location },
            }}
            />
          );
        }

        return <Component />;
      }}
    />
  );
};

export default Route;
