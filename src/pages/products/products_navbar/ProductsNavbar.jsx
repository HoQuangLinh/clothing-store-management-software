import React, { useState } from "react";
import "./products_navbar.css";
import AddProduct from "./../AddProduct";
import ModalUnstyled from "@mui/core/ModalUnstyled";

import { styled, Box } from "@mui/system";
const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;
const ProductsNavbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div>
      <div>
        <StyledModal
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={show}
          onClose={handleClose}
          BackdropComponent={Backdrop}
        >
          <AddProduct onClose={handleClose} />
        </StyledModal>
      </div>
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
            <div onClick={() => setShow(true)} className="action-products-btn">
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
