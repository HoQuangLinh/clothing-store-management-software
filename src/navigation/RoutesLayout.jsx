import { Switch, Route } from "react-router-dom";
import React from "react";
import Dashboard from "../pages/dashboard/Dashboard";
import Customers from "../pages/customers/Customers";
import Sales from "../pages/sales/Sales";
import Products from "../pages/products/Products";
import Orders from "../pages/orders/Orders";
import Staff from "../pages/staff/Staff";
const RoutesLayout = () => {
  return (
    <Switch>
      <Route path="/customers">
        <Customers></Customers>
      </Route>
      <Route path="/sales">
        <Sales />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/orders">
        <Orders />
      </Route>
      <Route path="/staffs">
        <Staff />
      </Route>
      <Route path="/">
        <Dashboard></Dashboard>
      </Route>
    </Switch>
  );
};

export default RoutesLayout;
