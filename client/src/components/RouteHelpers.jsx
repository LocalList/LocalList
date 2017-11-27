import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}

const PrivateRoute = ({ component, user, ...rest }) => (
  <Route {...rest} render={routeProps => (
    user ? (
      renderMergedProps(component, routeProps, rest, { user })
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: routeProps.location }
      }}/>
    )
  )}/>
)

export { PropsRoute, PrivateRoute };
