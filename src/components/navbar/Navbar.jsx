import React, { useEffect, useState } from "react";
import "./navbar.css";
import cr7 from "../../assets/images/cr7.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const NavBar = () => {
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState([]);

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
        </div>
      </div>
    </div>
  );
};

export default NavBar;
