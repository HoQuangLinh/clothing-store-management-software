import React from "react";
import "./customers_navbar.css";
const CustomersNavbar = () => {
  return (
    <div>
      <div
        className="row customers_navbar_container"
        style={{ alignItems: "center", fontSize: "20px" }}
      >
        <div className="navbar__search">
          <input type="text" placeholder="Tìm kiếm..." />
          <i className="bx bx-search"></i>
        </div>

        <div className=" list-action-customers-btn">
          {/* <div className="action-customers-btn">
            <i class="bx bx-plus"></i>
            Thêm mới{" "}
          </div> */}

          <div className="action-customers-btn">
            <i class="bx bxs-file-export"></i>Xuất file
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersNavbar;
