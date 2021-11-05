import React, { useState, useRef } from "react";
import "./AddStaff.css";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import useFormStaff from "../form_validate/useFormStaff";
import validateStaff from "../form_validate/validateStaff";
import axios from "axios";
import formatDate from "../../../utils/formatDate";
const AddStaff = ({ onCloseForm }) => {
  const inputAvatarRef = useRef(null);
  const birthdayRef = useRef(null);
  const [gender, setGender] = useState("male");
  const [position, setPositon] = useState("warehousestaff");
  //Call API
  const submitForm = () => {
    var formStaff = new FormData();
    formStaff.append("username", staff.username);
    formStaff.append("password", staff.password);
    formStaff.append("fullname", staff.fullname);
    formStaff.append("address", staff.address);
    formStaff.append("birthday", formatDate(staff.birthday));
    formStaff.append("gender", gender);
    formStaff.append("position", position);
    formStaff.append("email", staff.email);
    formStaff.append("phone", staff.phone);
    formStaff.append("image", avatar);

    //post to API
    axios
      .post(
        "https://clothesapp123.herokuapp.com/api/users/register",
        formStaff,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
          },
        },
        { timeout: 1000 }
      )
      .then((res) => {
        alert("Thêm nhân viên thành công");
        onCloseForm(false);
      })
      .catch((err) => {
        alert("Thêm nhân viên thất bại");
        onCloseForm(false);
      });
  };
  const { handleChange, handleChangeBirthday, handleSubmit, staff, errors } =
    useFormStaff(submitForm, validateStaff);
  const [avatar, setAvatar] = useState();
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setAvatar(event.target.files[0]);
    }
  };
  const onExitClick = () => {
    onCloseForm(false);
  };
  return (
    <div className="add_staff-container">
      <div className="add_staff-heading">
        <h3 className="add_staff-heading-title">Thêm mới nhân viên</h3>
        <div className="add_staff-heading-info">
          <p>Thông tin</p>
          <div className="line-add"></div>
        </div>
        <div onClick={onExitClick} className="add_staff-btn-exit">
          X
        </div>
      </div>
      <div className="add_staff-body">
        <div className="add_staff_img">
          <img
            src={
              avatar
                ? URL.createObjectURL(avatar)
                : "https://res.cloudinary.com/hoquanglinh/image/upload/v1635330645/profile_ieghzz.jpg"
            }
            alt=""
            className="add_staff-avatar"
          />
          <input
            ref={inputAvatarRef}
            type="file"
            onChange={onImageChange}
            style={{ display: "none" }}
          />
          <button
            className="btn-pickImage"
            onClick={() => {
              inputAvatarRef.current.click();
            }}
          >
            Chọn ảnh
          </button>
        </div>
        <div className="add_staff-form">
          <div className="add_staff-form-row">
            <span>Tên tài khoản</span>
            <input
              className={errors.username ? "error" : ""}
              onChange={handleChange}
              name="username"
              value={staff.username}
              type="text"
            />
            <p className="add_staff-form-error">{errors.username}</p>
          </div>
          <div className="add_staff-form-row">
            <span>Ngày sinh</span>
            <p className="add_staff-form-error">{errors.birthday}</p>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                inputFormat="dd/MM/yyyy"
                ref={birthdayRef}
                views={["day", "month", "year"]}
                value={staff.birthday}
                name="birthday"
                onChange={handleChangeBirthday}
                renderInput={(params) => (
                  <TextField
                    open
                    fullWidth
                    size="small"
                    style={{
                      height: "100%",
                      width: "206px",
                      borderRadius: 5,
                      zIndex: 4,
                      border: "1px solid #4e5052",
                    }}
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
          </div>
          <div className="add_staff-form-row">
            <span>Mật khẩu</span>
            <input
              className={errors.password ? "error" : ""}
              onChange={handleChange}
              type="password"
              value={staff.password}
              name="password"
            />
            <p className="add_staff-form-error">{errors.password}</p>
          </div>

          <div className="add_staff-form-row">
            <span>Giới tính</span>

            <select
              value={gender}
              className="add_staff-form-select"
              name="gender"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="different">Khác</option>
            </select>
          </div>
          <div className="add_staff-form-row">
            <span>Xác nhận mật khẩu</span>
            <input
              type="password"
              name="confirmPassword"
              value={staff.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? "error" : ""}
            />
            <p className="add_staff-form-error">{errors.confirmPassword}</p>
          </div>
          <div className="add_staff-form-row">
            <span>Chức vụ</span>
            <select
              onChange={(e) => {
                setPositon(e.target.value);
              }}
              value={position}
              className="add_staff-form-select"
              name="active"
              id="active"
            >
              <option value="warehousestaff">Nhân viên bán hàng</option>
              <option value="cashier">Nhân viên thu ngân</option>
            </select>
          </div>
          <div className="add_staff-form-row">
            <span>Họ tên</span>
            <input
              name="fullname"
              onChange={handleChange}
              value={staff.fullname}
              className={errors.fullname ? "error" : ""}
              type="text"
            />
            <p className="add_staff-form-error">{errors.fullname}</p>
          </div>
          <div className="add_staff-form-row">
            <span>Email</span>
            <input
              name="email"
              onChange={handleChange}
              value={staff.value}
              type="text"
              className={errors.email ? "error" : ""}
            />
            <p className="add_staff-form-error">{errors.email}</p>
          </div>
          <div className="add_staff-form-row">
            <span>Địa chỉ</span>
            <input
              name="address"
              onChange={handleChange}
              value={staff.address}
              className={errors.address ? "error" : ""}
              type="text"
            />
            <p className="add_staff-form-error">{errors.address}</p>
          </div>
          <div className="add_staff-form-row">
            <span>Số điện thoại</span>
            <input
              name="phone"
              value={staff.phone}
              onChange={handleChange}
              className={errors.phone ? "error" : ""}
              type="text"
            />
            <p className="add_staff-form-error">{errors.phone}</p>
          </div>
        </div>
      </div>
      <div className="add_staff-btn-row">
        <button onClick={handleSubmit} className="add_staff-btn-save">
          Lưu
        </button>
        <button onClick={onExitClick} className="add_staff-btn-cancel">
          Bỏ qua
        </button>
      </div>
    </div>
  );
};

export default AddStaff;
