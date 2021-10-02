import React, { useEffect, useState } from "react";
import DashBoardCard from "../../../components/admin/dashboard-card/DashBoardCard";
import Table from "../../../components/admin/table/Table";
import "./dashboard.css";
import axios from "axios";
import Badge from "../../../components/admin/badge/Badge";
import Chart from "react-apexcharts";
const customerColumns = ["User", "Total Order", "Total Spending"];
const orderColumns = ["Order Id", "User", "Total Price", "Date", "Status"];
const Dashboard = () => {
  const [topCustomer, setTopCustomer] = useState([]);
  const [latestOrders, setLatestOrders] = useState([]);

  //get top customer from API
  useEffect(() => {
    axios.get("http://localhost:3004/topCustomers").then((response) => {
      setTopCustomer(response.data);
    });
  }, []);

  //get latest orders from API
  useEffect(() => {
    axios.get("http://localhost:3004/getLatestOrders").then((res) => {
      setLatestOrders(res.data);
    });
  }, []);
  const orderStatus = {
    shipping: "primary",
    pending: "warning",
    paid: "success",
    refund: "danger",
  };
  console.log(`order status ${orderStatus.shipping}`);
  const renderCustomerHead = (columns) => {
    return (
      <thead>
        <tr>
          {columns.map((value, index) => (
            <th>{value}</th>
          ))}
        </tr>
      </thead>
    );
  };
  const renderCustomerBody = (customers) => {
    return (
      <tbody>
        {customers.map((customer, index) => (
          <tr>
            <td>{customer.user}</td>
            <td>{customer.total_order}</td>
            <td>{customer.total_spending}</td>
          </tr>
        ))}
      </tbody>
    );
  };
  const renderLatestOrderBody = (orders) => (
    <tbody>
      {orders.map((order, index) => (
        <tr>
          <td>{order.order_id}</td>
          <td>{order.user}</td>
          <td>{order.total_price}</td>
          <td>{order.date}</td>
          <td>
            <Badge type={orderStatus[order.status]}>{order.status}</Badge>
          </td>
        </tr>
      ))}
    </tbody>
  );
  const renderLatestOrderHead = (columns) => (
    <thead>
      <tr>
        {columns.map((value, index) => (
          <th>{value}</th>
        ))}
      </tr>
    </thead>
  );
  const options = {
    dataLabels: {
      enabled: false,
    },
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
  };
  const series = [
    {
      name: "Revenue ",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 100, 100, 200],
    },
  ];
  return (
    <div>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              <DashBoardCard
                name="Customer"
                quantity="1000"
                icon="fas fa-user-friends"
              />
            </div>
            <div className="col-6">
              <DashBoardCard
                name="Orders"
                quantity="2000"
                icon="fas fa-receipt "
              />
            </div>
            <div className="col-6">
              <DashBoardCard
                name="Income"
                icon="fas fa-hryvnia"
                quantity="2300"
              />
            </div>
            <div className="col-6">
              <DashBoardCard name="Visited" quantity="3000" icon="fas fa-eye" />
            </div>
          </div>
        </div>
        <div className="col-6 ">
          <div className=" full-height">
            <Chart
              options={options}
              series={series}
              type="bar"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="col-5">
          <div className="card">
            <div className="card__header">
              <h3>Top customers</h3>
            </div>

            <Table
              theadData={customerColumns}
              tbodyData={topCustomer}
              renderHead={renderCustomerHead}
              renderBody={renderCustomerBody}
            />
          </div>
        </div>
        <div className="col-7">
          <div className="card">
            <div className="card__header">
              <h3>Latest Orders</h3>
            </div>
            <Table
              theadData={orderColumns}
              tbodyData={latestOrders}
              renderHead={renderLatestOrderHead}
              renderBody={renderLatestOrderBody}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
