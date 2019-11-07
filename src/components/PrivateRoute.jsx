import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {

  const { isLoggedIn, username } = rest;

  return (
    <Route
      {...rest}
      render = {(props) => {
        props["username"] = username;

        return isLoggedIn !== false
          ? <Component {...props} />
          : <Redirect to={{
              pathname: '/login',
              state: { from: props.location },
            }}
            />
      }}
    />

  );
}

// function mapStateToProps({ authedUser }) {
//   return {
//     authedUser,
//   };
// }

export default PrivateRoute;
