import React, { useState, useEffect } from "react";
import OrdersNavbar from "./orders_navbar/Orders_Navbar";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";

import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import "./orders.css";
import Checkbox from "@mui/material/Checkbox";
import ModalUnstyled from "@mui/core/ModalUnstyled";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

import { styled } from "@mui/system";
import OrderDetail from "./OrderDetail/orderDetail";
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

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(1);
  const [orders, setOrders] = useState([]);
  const [originOrders, setOriginOrders] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [orderFilter, setOrderFilter] = useState({
    orderId: "",
    customerName: "",
    phone: "",
  });
  const pages = [];

  for (let i = 2; i <= Math.ceil(orders.length / itemsPerPage); i++) {
    pages.push(i);
  }
  console.log(Math.ceil(orders.length / 9));

  const currentOrders = orders.slice(
    currentPage * itemsPerPage - itemsPerPage,
    currentPage * itemsPerPage
  );
  const renderPageNumbers = pages.map((number) => {
    if (number <= maxPageNumberLimit && number >= minPageNumberLimit) {
      return (
        <div
          onClick={() => {
            setCurrentPage(number);
          }}
          class={`cell ${currentPage === number ? "active" : null}`}
        >
          {number}
        </div>
      );
    }
    return null;
  });

  useEffect(() => {
    axios
      .get("https://clothesapp123.herokuapp.com/api/orders/list")
      .then((res) => {
        setOrders(res.data);
        setOriginOrders(res.data);
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
  const handlePreviousPagination = () => {
    setCurrentPage(currentPage - 1);
    if (currentPage - 1 < minPageNumberLimit) {
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
    }
  };
  const handleNextPagination = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
    }
  };
  const handleFilter = (orderId, name, phone, fromDate, toDate) => {
    if (!orderId && !name && !phone && !fromDate && !toDate) {
      setOrders(originOrders);
    } else {
      setCurrentPage(1);
      const fromDateTime = (fromDate && fromDate.getTime()) || 0;
      const toDateTime = (toDate && toDate.getTime()) || new Date().getTime();
      var orderFiltered = originOrders.filter((order) => {
        const dateOrder = new Date(order.dateOrder);
        if (order.customer) {
          return (
            fromDateTime < dateOrder.getTime() &&
            toDateTime > dateOrder.getTime() &&
            order._id.indexOf(orderId) >= 0 &&
            order.customer &&
            order.customer?.name.toLowerCase().indexOf(name.toLowerCase()) >=
              0 &&
            order.customer &&
            order.customer?.phone.indexOf(phone) >= 0
          );
        } else {
          return (
            fromDateTime < dateOrder.getTime() &&
            toDateTime > dateOrder.getTime() &&
            order._id.indexOf(orderId) >= 1
          );
        }
      });

      setOrders(orderFiltered);
    }
  };

  return (
    <div>
      <div className="row order-container">
        <div className="col-3 order-card-list">
          <div className="order-card">
            <h4 className="order-card-heading">Tìm kiếm</h4>
            <div className="order-card-body">
              <div className="order-card-item">
                <input
                  placeholder="Theo mã hoá đơn"
                  type="text"
                  className="order-card-input"
                />
              </div>
              <div className="order-card-item">
                <input
                  placeholder="Theo tên khách hàng"
                  type="text"
                  className="order-card-input"
                />
              </div>
              <div className="order-card-item">
                <input
                  placeholder="Theo tên người bán"
                  type="text"
                  className="order-card-input"
                />
              </div>
            </div>
          </div>
          <div className="order-card">
            <h4 className="order-card-heading">Thời gian</h4>
            <div className="order-card-body">
              <div className="order-card-date-picker">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    inputFormat="dd/MM/yyyy"
                    views={["day", "month", "year"]}
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
              <div className="order-card-date-picker">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    minDate={fromDate}
                    inputFormat="dd/MM/yyyy"
                    views={["day", "month", "year"]}
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
                        size="small"
                      />
                    )}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>
          <div className="order-card">
            <h4 className="order-card-heading">Trạng thái</h4>

            <div className="order-card-item">
              <Checkbox />
              <span>Đã thanh toán</span>
            </div>
            <div className="order-card-item">
              <Checkbox />
              <span>Đã trả hàng</span>
            </div>
          </div>
        </div>
        <div className="col-9" style={{ padding: "10px 0px 10px 10px" }}>
          <div class="order-table-container">
            <table id="order-table">
              <thead>
                <tr>
                  <th>Mã hoá đơn</th>
                  <th>Ngày tạo</th>
                  <th>Khách hàng</th>
                  <th>Nhân viên</th>
                  <th>Tổng cộng</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {orders &&
                  currentOrders.map((order, index) => {
                    // console.log(currentOrders);
                    return (
                      <tr>
                        <td>{order._id.substr(order._id.length - 10)}</td>
                        <td>{formateDate(order.dateOrder)}</td>

                        <td>
                          {order.customer ? order.customer.name : "Khách lẻ"}
                        </td>
                        <td>{order.user.fullname}</td>
                        <td>{`${(
                          order.orderTotal - (order?.totalReturnPrice || 0)
                        ).toLocaleString("en")}đ`}</td>
                        <td>{order.status}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            {/**Start Pagination */}
            {pages.length >= 1 && (
              <div class="pagination">
                <div class="pagination-left">
                  <button
                    disabled={currentPage === 1 ? true : false}
                    onClick={handlePreviousPagination}
                    class="cell"
                    id="prev-btn"
                  >
                    <i class="fas fa-caret-left"></i>
                  </button>
                  <div
                    onClick={() => {
                      setCurrentPage(1);
                      setminPageNumberLimit(1);
                      setmaxPageNumberLimit(pageNumberLimit);
                    }}
                    className={`cell ${currentPage === 1 ? "active" : ""}`}
                  >
                    1
                  </div>
                  {minPageNumberLimit > 1 && (
                    <div onClick={handlePreviousPagination} class="cell">
                      {" "}
                      &hellip;
                    </div>
                  )}

                  {renderPageNumbers}

                  {maxPageNumberLimit < pages.length && (
                    <div onClick={handleNextPagination} class="cell">
                      {" "}
                      &hellip;
                    </div>
                  )}

                  <button
                    disabled={
                      currentPage === pages[pages.length - 1] ? true : false
                    }
                    onClick={handleNextPagination}
                    class="cell"
                    id="next-btn"
                  >
                    <i class="fas fa-caret-right"></i>
                  </button>
                </div>
                <div class="pagination-right">
                  <p>Số hàng mỗi dòng: {itemsPerPage} / Tổng số hoá đơn</p>
                </div>
              </div>
            )}
            {/**Pagination */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
