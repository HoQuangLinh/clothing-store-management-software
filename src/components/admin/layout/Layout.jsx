import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./layout.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../../navigation/admin/Routes";

const Layout = () => {
  return (
    <Router>
      <Sidebar />
      <div className="layout__content">
        <Navbar />
        <div className="layout__content-routes">
          <Routes />
        </div>
      </div>
    </Router>
  );
};

export default Layout;
