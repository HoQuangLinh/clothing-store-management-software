import React from "react";
import "./navbar.css";
import cr7 from "../../assets/images/cr7.jpg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <i class="bx bx-menu"></i>
        <p>Dashboard</p>
      </div>

      {
        //<div className="navbar__search">
        // <input type="text" placeholder="Tìm kiếm..." />
        // <i className="bx bx-search"></i>
        //</div>
      }

      <div className="navbar__right">
        <div className="navbar__right-item">
          <i className="bx bx-bell"></i>
        </div>
        <div className="navbar__right-item">
          <i className="bx bx-palette"></i>
        </div>
        <div className="navbar__right-item">
          <img src={cr7} alt="" />
          <span>RonalDo</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
