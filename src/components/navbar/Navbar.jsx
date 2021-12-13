import React, { useEffect, useState } from "react";
import "./navbar.css";
import cr7 from "../../assets/images/cr7.jpg";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import axios from "axios";
||||||| parent of e5ec2e7 (update boosstrap)
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <i class="bx bx-menu"></i>
        <p>Dashboard</p>
      </div>
=======
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
>>>>>>> e5ec2e7 (update boosstrap)

<<<<<<< HEAD
const NavBar = () => {
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState([]);
||||||| parent of e5ec2e7 (update boosstrap)
      {
        //<div className="navbar__search">
        // <input type="text" placeholder="Tìm kiếm..." />
        // <i className="bx bx-search"></i>
        //</div>
      }
=======
        {
          //<div className="navbar__search">
          // <input type="text" placeholder="Tìm kiếm..." />
          // <i className="bx bx-search"></i>
          //</div>
        }
>>>>>>> e5ec2e7 (update boosstrap)

<<<<<<< HEAD
  useEffect(() => {
    axios
      .get(
        "https://clothesapp123.herokuapp.com/api/users/getInfo/618646e56829ed0ec21a4cac"
      )
      .then((res) => {
        setUser(res.data);
      });
  }, []);
  return (
    <div>
      <div className="navbar">
        <div className="navbar__left">
          <i class="bx bx-menu"></i>
          <p></p>
        </div>

        <div className="navbar__right">
          <Link
            to={{
              pathname: "/editProfile",
              state: { user },
            }}
          >
            <div className="navbar__right-item">
              <img src={user?.imageUrl} alt="" />
              <span>{user.fullname}</span>
            </div>
          </Link>
||||||| parent of e5ec2e7 (update boosstrap)
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
=======
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
>>>>>>> e5ec2e7 (update boosstrap)
        </div>
      </div>
      
      <div id ="myDropdown" className="navnar__paleteteShow">
        <div className="navbar__PlaColor_blue"></div> 
      </div>
    </div>
  );
};

export default NavBar;
