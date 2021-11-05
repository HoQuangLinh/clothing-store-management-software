import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../pages/login/Login";

import Layout from "../components/layout/Layout";
const RoutesApp = () => {
  return (
    <Switch>
      <Route defa path="/login">
        <Login />
      </Route>
      <Route path="/home">
        <Layout />
      </Route>
      <Route path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
};

export default RoutesApp;
