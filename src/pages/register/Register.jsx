import React from "react";
import casherImg from "../../assets/images/casher.png";
import warehoseStaffImg from "../../assets/images/warehouse_staff.png";
import "./register.css";
const Register = () => {
  return (
    <div className="signup-container">
      <h3 className="signup-title">CLOTHE SHOP SIGNUP</h3>
      <div className="signup-form">
        <div className="signup-form-left"></div>
        <div className="signup-form-right">
          <div className="signup-form-list">
            <input
              placeholder="Email"
              type="text"
              className="signup-form-list-item"
            />
            <input
              placeholder="Username"
              type="text"
              className="signup-form-list-item"
            />
            <input
              placeholder="Password"
              type="text"
              className="signup-form-list-item"
            />
            <input
              placeholder="Confirm password"
              type="text"
              className="signup-form-list-item"
            />
            <input
              placeholder="Code"
              type="text"
              className="signup-form-list-item"
            />
          </div>
          <div className="signup-form-service">
            <p>Select Your Job &ensp; </p>
            <img style={{ height: "30px" }} src={casherImg} alt="" />
            <span>&ensp; or&ensp;</span>
            <img style={{ height: "30px" }} src={warehoseStaffImg} alt="" />
          </div>
          <button className="btn-signup">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
