import React from "react";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesApp from "./navigation/RoutesApp";
const App = () => {
  return (
    <Router>
      <RoutesApp />
    </Router>
  );
};

export default App;
