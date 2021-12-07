import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({component: Component, loggedIn, ...props}) => {

  return (
    <Route>
      {
        () => loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    </Route>
  )
};

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
  };
};

export default connect(mapStateToProps, null)(ProtectedRoute);
