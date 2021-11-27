import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/core/ModalUnstyled";
import axios from "axios";
import "./returnorder.css";
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

const ReturnOrder = ({ open, handleCancel }) => {
  const [orders, setOrders] = useState();
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  useEffect(() => {
    axios
      .get("https://clothesapp123.herokuapp.com/api/orders/list")
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
      })
      .catch((err) => {
        alert("Lỗi call api");
      });
  }, []);
  const formateDate = (dateStr) => {
    var date = new Date(dateStr);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <StyledModal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open={open}
      close={handleCancel}
      BackdropComponent={Backdrop}
    >
      <div className="return-order-container">
        <div className="return-order-btn-exit">
          <i class="bx bx-x"></i>
        </div>
        <div className="return-order-header">
          <h3>Chọn hoá đơn trả hàng</h3>
        </div>
        <div className="return-order-body">
          <div className="return-order-body-left">
            <div className="return-order-card">
              <h4 className="return-order-card-heading">Tìm kiếm</h4>
              <div className="return-order-card-body">
                <div className="return-order-card-item">
                  <input
                    placeholder="Theo mã hoá đơn"
                    type="text"
                    className="return-order-card-input"
                  />
                </div>
                <div className="return-order-card-item">
                  <input
                    placeholder="Theo tên khách hàng"
                    type="text"
                    className="return-order-card-input"
                  />
                </div>
                <div className="return-order-card-item">
                  <input
                    placeholder="Theo số điện thoại"
                    type="text"
                    className="return-order-card-input"
                  />
                </div>
              </div>
            </div>
            <div className="return-order-card">
              <h4 className="return-order-card-heading">Thời gian</h4>
              <div className="return-order-card-body">
                <div className="return-order-card-date-picker">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      InputProps={{
                        disableUnderline: true,
                      }}
                      label={fromDate ? "" : "Từ ngày"}
                      value={fromDate}
                      onChange={(newValue) => {
                        setFromDate(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          InputLabelProps={{
                            shrink: false,
                          }}
                          {...params}
                          variant="standard"
                        />
                      )}
                    />
                  </LocalizationProvider>
                </div>
                <div className="return-order-card-date-picker">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label={toDate ? "" : "Đến ngày"}
                      value={toDate}
                      onChange={(newValue) => {
                        setToDate(newValue);
                      }}
                      InputProps={{
                        disableUnderline: true,
                      }}
                      renderInput={(params) => (
                        <TextField
                          InputLabelProps={{
                            shrink: false,
                          }}
                          {...params}
                          variant="standard"
                        />
                      )}
                    />
                  </LocalizationProvider>
                </div>
              </div>
            </div>
          </div>
          <div class="return-order-table-container">
            <table id="return-order-table">
              <thead>
                <tr>
                  <th>Mã hoá đơn</th>
                  <th>Ngày tạo</th>
                  <th>Số điện thoại</th>
                  <th>Khách hàng</th>
                  <th>Tổng cộng</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders &&
                  orders.slice(0, 6).map((order) => {
                    return (
                      <tr>
                        <td>{order._id.substr(order._id.length - 6)}</td>
                        <td>{formateDate(order.dateOrder)}</td>

                        <td>{order.customer?.phone} </td>
                        <td>{order.customer?.name}</td>
                        <td>{`${order.orderTotal.toLocaleString("en")}đ`}</td>
                        <td>
                          <Link to="/returnOrderDetail">
                            <button className="return-order-table-btn-select">
                              Chọn
                            </button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};

export default ReturnOrder;
