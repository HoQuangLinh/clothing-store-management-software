import React from "react";
import "./products_navbar.css";
const ProductsNavbar = () => {
  return (
    <div>
      <div
        className="row products_navbar_container "
        style={{ alignItems: "center", fontSize: "20px" }}
      >
        <div className="col-3">
          <h3>Loại sản phẩm</h3>
        </div>
        <div className="col-5">
          <div className="navbar__search">
            <input type="text" placeholder="Tìm kiếm..." />
            <i className="bx bx-search"></i>
          </div>
        </div>
        <div className="col-4">
          <div className="row list-action-products-btn">
            <div className="action-products-btn">
              <i class="bx bx-plus"></i>
              Thêm mới{" "}
            </div>
            <div className="action-products-btn">
              <i class="bx bxs-file-import"></i>
              Import
            </div>
            <div className="action-products-btn">
              <i class="bx bxs-file-export"></i>Xuất file
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsNavbar;
