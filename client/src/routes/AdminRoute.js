import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ component: Component, ...rest }) => {
  const { isAdmin } = useSelector((state) => state.userReducer);

  return (
    <Route {...rest}>
        {isAdmin ? <Component /> : <Redirect to="/home" />}
    </Route>
  );
};

export default AdminRoute;
