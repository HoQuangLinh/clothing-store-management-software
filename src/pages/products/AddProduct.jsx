import React, { useState, useRef } from "react";
import "../staff/addstaff/AddStaff.css";
import "./AddProduct.css";
const AddProduct = ({ setShowFormAddProduct }) => {
  const onExitClick = () => {
    setShowFormAddProduct(false);
  };
  return (
    <div className="add_product-container">
      <div className="add_product-heading">
        <h3 className="add_product-heading-title">Thêm mới sản phẩm</h3>
        <div className="add_product-heading-info">
          <p>Thông tin</p>
          <div className="line-add"></div>
        </div>
        <div onClick={onExitClick} className="add_product-btn-exit">
          X
        </div>
      </div>
      <div className="add_product-body">
        <div className="add_product-form">
          <div className="add_product-form-row">
            <span>Mã sản phẩm</span>
            <input type="text" />
          </div>
          <div className="add_product-form-row">
            <span>Giá vốn (đồng)</span>
            <input />
          </div>
          <div className="add_product-form-row">
            <span>Loại sản phẩm</span>

            <select className="add_product-form-select" name="gender">
              <option value="Nam">Áo </option>

              <option value="Nữ">Quần</option>
            </select>
          </div>

          <div className="add_product-form-row">
            <span>Giá bán (đồng)</span>
            <input name="fullname" type="text" />
          </div>
          <div className="add_product-form-row">
            <span>Tên sản phẩm</span>
            <input />
            <p className="add_product-form-error"></p>
          </div>
          <div className="add_product-form-row">
            <span>Tồn kho</span>
            <input type="text" />
          </div>
          <div className="add_product-form-row">
            <span style={{ width: "30%" }}>Size</span>
            <div
              style={{ width: "70%" }}
              className="add_product-form-list-size"
            >
              <div className="add_product-form-size-item">
                <input type="checkbox" />
                <span>XXL</span>
              </div>
              <div className="add_product-form-size-item">
                <input type="checkbox" />
                <span>XL</span>
              </div>
              <div className="add_product-form-size-item">
                <input type="checkbox" />
                <span>L</span>
              </div>
              <div className="add_product-form-size-item">
                <input type="checkbox" />
                <span>M</span>
              </div>
              <div className="add_product-form-size-item">
                <input type="checkbox" />
                <span>S</span>
              </div>
            </div>
          </div>
          <div className="add_product-form-row">
            <span>Màu sắc</span>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="add_product-form-images">
        <div className="add_product-form-image">
          <p>Hình ảnh sản phẩm</p>
          <img
            style={{ height: 100 }}
            src="https://res.cloudinary.com/hoquanglinh/image/upload/v1636559426/Linh/4fc20722-5368-e911-80d5-b82a72db46f2_a7cy10.png"
            alt=""
          />
        </div>
        <div className="add_product-form-image">
          <p>Mã vạch</p>
          <img
            style={{ height: 100 }}
            src="https://res.cloudinary.com/hoquanglinh/image/upload/v1636559426/Linh/4fc20722-5368-e911-80d5-b82a72db46f2_a7cy10.png"
            alt=""
          />
        </div>
      </div>
      <div className="add_product-btn-row">
        <button className="add_product-btn-save">Lưu</button>
        <button onClick={onExitClick} className="add_product-btn-cancel">
          Bỏ qua
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
