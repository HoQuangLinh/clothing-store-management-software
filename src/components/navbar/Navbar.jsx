import React from "react";
import "./navbar.css";
import cr7 from "../../assets/images/cr7.jpg";
const NavBar = () => {
<<<<<<< HEAD
  function Dropdown(){
    var x = document.getElementById("myDropdown");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
=======
  /* When the user clicks on the button, 
  toggle between hiding and showing the dropdown content */
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
>>>>>>> 033c490dff1858959e3c052388e8a626fd493daf
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
<<<<<<< HEAD
          <div className="navbar__right-item">
            <i className="bx bx-palette" onClick="Dropdown()" ></i>
            <buton onclick="Dropdown()"> bấm đây</buton>
=======
          <div className="navbar__right-icon">
            <i className="bx bx-palette" onClick={myFunction} ></i>
            <div id ="myDropdown" className="navnar__paleteteShow"> 
              <div className = "navbar__PlaColor_row">
                <div className = "navbar__PlaColor_blue"> </div>     
                <div className = "navbar__PlaColor_red"> </div> 
                <div className = "navbar__PlaColor_pink"> </div> 
              </div>    
              <div className = "navbar__PlaColor_row">
                <div className = "navbar__PlaColor_yellow"> </div>     
                <div className = "navbar__PlaColor_green"> </div> 
                <div className = "navbar__PlaColor_orange"> </div> 
              </div>   
            </div>
>>>>>>> 033c490dff1858959e3c052388e8a626fd493daf
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
