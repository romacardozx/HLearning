import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => state.userReducer);

  return (
    <Route {...rest}>
      {isAuthenticated ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
