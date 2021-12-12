import { Switch, Route } from "react-router-dom";
import React from "react";
import Dashboard from "../pages/dashboard/Dashboard";
import Customers from "../pages/customers/Customers";
import Sales from "../pages/sales/Sales";
import Products from "../pages/products/Products";
import Orders from "../pages/orders/Orders";
import Staff from "../pages/staff/Staff";
import Revenues from "../pages/revenues/Revenues";
import Returns from "../pages/returns/Returns";
import Checkout from "../pages/sales/checkout/Checkout";
import ReturnOrderDetail from "../pages/returns/returnorderdetail/ReturnOrderDetail";
import ReturnBill from "../pages/returns/return-bill/ReturnBill";
// import OrderDetail from "../pages/orders/OrderDetail/orderDetail";
import OrderDetail from "../pages/orders/OrderDetail/orderDetail";

const RoutesLayout = () => {
  return (
    <Switch>
      <Route path="/customers">
        <Customers></Customers>
      </Route>
      <Route path="/sales">
        <Sales />
      </Route>
      <Route path="/checkout">
        <Checkout />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/orders">
        <Orders />
      </Route>
      <Route path="/orderDetail">
        <OrderDetail />
      </Route>
      <Route path="/staffs">
        <Staff />
      </Route>
      <Route path="/revenues">
        <Revenues />
      </Route>
      <Route path="/returns">
        <Returns />
      </Route>
      <Route path="/returnOrderDetail">
        <ReturnOrderDetail />
      </Route>
      <Route path="/returnBill">
        <ReturnBill />
      </Route>
      <Route path="/">
        <Dashboard></Dashboard>
      </Route>
    </Switch>
  );
};

export default RoutesLayout;
