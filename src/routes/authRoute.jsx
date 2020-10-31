import React from 'react';
import { Redirect, Route as ReactDOMRoute } from 'react-router-dom';
import { useUser } from '../components/core/UserProvider/useUser';

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user: { id } } = useUser();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        if (isPrivate && !id) {
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
