import { Switch, Route } from "react-router-dom";
import React from "react";
import Dashboard from "../../pages/admin/dashboard/Dashboard";
import Customers from "../../pages/admin/customers/Customers";
const Routes = () => {
  return (
    <Switch>
      <Route path="/customers">
        <Customers></Customers>
      </Route>
      <Route path="/">
        <Dashboard></Dashboard>
      </Route>
    </Switch>
  );
};

export default Routes;
