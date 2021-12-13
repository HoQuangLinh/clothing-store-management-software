import React from "react";
import NavBar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./layout.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesLayout from "../../navigation/RoutesLayout";
const Layout = () => {
  return (
    <Router>
      <Sidebar />
      <div className="layout__content">
        <NavBar />
        <div className="layout__content-routes">
          <RoutesLayout />
        </div>
      </div>
    </Router>
  );
};

export default Layout;
