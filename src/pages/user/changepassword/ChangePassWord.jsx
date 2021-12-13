import React, { useState, useEffect } from "react";

import axios from "axios";
import { useHistory } from "react-router";
import "./changepassword.css";
import { Link } from "react-router-dom";
const ChangePassWord = () => {
  return (
    <div className="change-password">
      <div className="change-password-container">
        <div className="change-password-title ">
          <p>Đổi mật khẩu</p>
        </div>
        <div className="change-password-input-container">
          <input
            name="name"
            className={`change-password-input 
            }`}
            type="password"
            placeholder={"Nhập mật khẩu cũ "}
          />
          <input
            name="phone"
            className={`change-password-input 
               
            }`}
            type="password"
            placeholder={"Nhập mật khẩu mới"}
          />
          <input
            name="email"
            type="password"
            className={`change-password-input 
              
            `}
            placeholder={"Xác nhận mật khẩu"}
          />
          <div onClick={() => {}} className="change-password-close-btn">
            <i style={{ color: "#fff" }} class="fas fa-times"></i>
          </div>
        </div>

        <button className="btn-change-password">Đồng ý</button>
      </div>
    </div>
  );
};

export default ChangePassWord;
