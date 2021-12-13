import React, { useState } from "react";

import "./sidebar.css";
import sidebar from "../../assets/data/sidebar.json";
import SidebarItem from "./SidebarItem";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo1.png";
const Sidebar = () => {
  let [curentIndex, setCurentIndex] = useState(0);

  return (
    <div className="sidebar">
      <img style={{ width:"100%" , height: "150px" }} src={logo} alt="" />

      {sidebar.map((item, index) => {
        return (
          <Link to={item.route}>
            <SidebarItem
              onClick={() => {
                setCurentIndex(index);
              }}
              active={index === curentIndex}
              icon={item.icon}
              title={item.display_name}
            ></SidebarItem>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
