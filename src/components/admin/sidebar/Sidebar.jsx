import React, { useState } from "react";
import logo from "../../../assets/images/favicon.ico";
import "./sidebar.css";
import sidebar from "../../../assets/data/sidebar.json";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  let [curentIndex, setCurentIndex] = useState(0);

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="shop logo" />
      </div>
      {sidebar.map((item, index) => {
        return (
          <SidebarItem
            onClick={() => {
              setCurentIndex(index);
            }}
            active={index === curentIndex}
            icon={item.icon}
            title={item.display_name}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
