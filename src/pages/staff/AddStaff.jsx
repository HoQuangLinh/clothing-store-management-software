import React, { useState, useRef } from "react";
import "./AddStaff.css";
const AddStaff = ({ onCloseForm }) => {
  const inputAvatarRef = useRef(null);
  const [avatar, setAvatar] = useState(
    "https://res.cloudinary.com/hoquanglinh/image/upload/v1635330645/profile_ieghzz.jpg"
  );
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setAvatar(URL.createObjectURL(event.target.files[0]));
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
          <img src={avatar} alt="" className="add_staff-avatar" />
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
            <span>Mã nhân viên</span>
            <input type="text" placeholder="Mã tự động" readOnly />
          </div>
          <div className="add_staff-form-row">
            <span>Tên nhân viên</span>
            <input type="text" />
          </div>
          <div className="add_staff-form-row">
            <span>Ngày sinh</span>
            <input type="date" />
          </div>
          <div className="add_staff-form-row">
            <span>Giới tính</span>

            <select className="add_staff-form-select" name="active" id="active">
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="different">Khác</option>
            </select>
          </div>
          <div className="add_staff-form-row">
            <span>CMND</span>
            <input type="text" />
          </div>
          <div className="add_staff-form-row">
            <span>Chức vụ</span>
            <select className="add_staff-form-select" name="active" id="active">
              <option value="male">Nhân viên bán hàng</option>
              <option value="female">Nhân viên thu ngân</option>
            </select>
          </div>
          <div className="add_staff-form-row">
            <span>Số điện thoại</span>
            <input type="text" />
          </div>
          <div className="add_staff-form-row">
            <span>Email</span>
            <input type="text" />
          </div>
          <div className="add_staff-form-row">
            <span>Địa chỉ</span>
            <input type="text" />
          </div>
          <div className="add_staff-form-row">
            <span>Ghi chú</span>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="add_staff-btn-row">
        <button className="add_staff-btn-save">Lưu</button>
        <button onClick={onExitClick} className="add_staff-btn-cancel">
          Bỏ qua
        </button>
      </div>
    </div>
  );
};

export default AddStaff;
