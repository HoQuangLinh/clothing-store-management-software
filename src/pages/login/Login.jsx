import React from "react";
import loginBg from "../../assets/images/login_bg.png";
import "./login.css";
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h3 id="login-form-title">LOGIN HERE</h3>

        <input className="login-form-input" type="text" placeholder="Account" />

        <input
          className="login-form-input"
          type="password"
          placeholder="PassWord"
        />

        <div className="login-form-row">
          <div className="login-form-item">
            <input style={{ marginRight: "5px" }} type="checkbox" />
            <span>Remember me</span>
          </div>

          <div className="login-form-item">
            <span>Forgot password? </span>
          </div>
        </div>
        <div className="login-form-item">
          <button className="btn-login">Login</button>
        </div>
        <div className="login-form-item ">
          <p>To register New Account</p>
          <button className="btn-click-here">Click Here</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
