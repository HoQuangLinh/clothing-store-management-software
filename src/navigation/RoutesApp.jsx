import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Layout from "../components/layout/Layout";
const RoutesApp = () => {
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>

      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Layout />
      </Route>
    </Switch>
  );
};

export default RoutesApp;
