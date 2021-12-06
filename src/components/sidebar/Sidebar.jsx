import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import "./sidebar.css";
import sidebar from "../../assets/data/sidebar.json";
import SidebarItem from "./SidebarItem";
import { Link } from "react-router-dom";
const Sidebar = () => {
  let [curentIndex, setCurentIndex] = useState(0);

  return (
    <div className="sidebar">
      <img className="logoshop" src={logo}/>
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
