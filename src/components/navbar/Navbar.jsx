import React from "react";
import "./navbar.css";
import cr7 from "../../assets/images/cr7.jpg";
const NavBar = () => {
  function Dropdown(){
    var x = document.getElementById("myDropdown");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
  return (
    <div>
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
            <i className="bx bx-palette" onClick="Dropdown()" ></i>
            <buton onclick="Dropdown()"> bấm đây</buton>
          </div>
          <div className="navbar__right-item">
            <img src={cr7} alt="" />
            <span>RonalDo</span>
          </div>
        </div>
      </div>
      
      <div id ="myDropdown" className="navnar__paleteteShow">
        <div className="navbar__PlaColor_blue"></div> 
      </div>
    </div>
  );
};

export default NavBar;
