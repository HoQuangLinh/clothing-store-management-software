import React, { useState } from "react";
import OrdersNavbar from "./orders_navbar/Orders_Navbar";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "./orders.css";
import Checkbox from "@mui/material/Checkbox";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const staffs = ["Hà Duy Kiên", "Lê Văn Đỗ", "Mã Tiến An"];
const columns = [
  { id: "orderId", label: "Mã hoá đơn" },
  {
    id: "customer",
    label: "Tên khách hàng",

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "seller",
    label: "Người bán",

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "dateCreated",
    label: "Thời gian tạo",

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "totalPrice",
    label: "Tổng tiền",

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Trạng thái",

    format: (value) => value.toLocaleString("en-US"),
  },
];

const orders = [
  {
    orderId: "HD001",
    customer: "Chí Đạt",
    seller: "Hồ Quang Linh",
    dateCreated: "15/10/2021",
    totalPrice: 1000000,
    status: "Đã thanh toán",
  },
  {
    orderId: "HD001",
    customer: "Chí Đạt",
    seller: "Hồ Quang Linh",
    dateCreated: "15/10/2021",
    totalPrice: 1000000,
    status: "Đã thanh toán",
  },
  {
    orderId: "HD001",
    customer: "Chí Đạt",
    seller: "Hồ Quang Linh",
    dateCreated: "15/10/2021",
    totalPrice: 1000000,
    status: "Đã thanh toán",
  },
  {
    orderId: "HD001",
    customer: "Chí Đạt",
    seller: "Hồ Quang Linh",
    dateCreated: "15/10/2021",
    totalPrice: 1000000,
    status: "Đã thanh toán",
  },
  {
    orderId: "HD001",
    customer: "Chí Đạt",
    seller: "Hồ Quang Linh",
    dateCreated: "15/10/2021",
    totalPrice: 1000000,
    status: "Đã thanh toán",
  },
  {
    orderId: "HD001",
    customer: "Chí Đạt",
    seller: "Hồ Quang Linh",
    dateCreated: "15/10/2021",
    totalPrice: 1000000,
    status: "Đã thanh toán",
  },
];

const Orders = () => {
  const [staff, setStaff] = useState("");
  const [openDatePickerModal, setOpenDatePickerModal] = useState(false);
  const [openStaffModal, setOpenStaffModal] = useState(false);
  const [openCustomerModal, setOpenCustomerModal] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div>
      <OrdersNavbar />
      <div className="row products_content">
        <div className="col-3">
          <div className="orders-card">
            <h3>Thời gian</h3>
            <div className="orders-card-item">
              <input
                type="radio"
                name="choose_date"
                onClick={() => {
                  setOpenDatePickerModal(false);
                }}
              />
              <label htmlFor="">Tháng này</label>
            </div>
            <div className="orders-card-item">
              <input
                type="radio"
                name="choose_date"
                onClick={() => {
                  setOpenDatePickerModal(true);
                }}
              />
              <label htmlFor="">Lựa chọn khác</label>

              {openDatePickerModal && (
                <div className="date-time-modal">
                  <div className="div-date-picker-item">
                    <label htmlFor="">Từ ngày</label>
                    <input type="date" />
                  </div>
                  <div className="div-date-picker-item">
                    <label htmlFor="">Đến ngày</label>
                    <input type="date" name="" id="" />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="orders-card">
            <h3>Trạng thái</h3>
            <div className="orders-card-item">
              <input type="checkbox" />
              <span>Đã huỷ</span>
            </div>
            <div className="orders-card-item">
              <input type="checkbox" />
              <span>Không thể xử lý</span>
            </div>
            <div className="orders-card-item">
              <input type="checkbox" />
              <span>Hoàn thành</span>
            </div>
          </div>
          <div className="orders-card">
            <div className="orders-card-title">
              <h3>Nhân viên</h3>
            </div>
            <div className="orders-card-input">
              <input
                value={staff}
                placeholder="Chọn nhân viên"
                type="text"
                onClick={() => {
                  setOpenStaffModal(true);
                }}
                onMouseDown={() => {
                  setOpenStaffModal(false);
                }}
              />
              <i class="bx bx-up-arrow-alt"></i>
              <i class="bx bx-down-arrow-alt"></i>
            </div>

            {openStaffModal && (
              <div className="list-item-modal">
                <ul>
                  {staffs.map((staff, index) => {
                    return (
                      <li
                        key={index}
                        onClick={(e) => {
                          setStaff(staff);
                        }}
                      >
                        {staff}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
          <div className="orders-card">
            <div className="orders-card-title">
              <h3>Khách hàng</h3>
            </div>
            <div className="orders-card-input">
              <input
                placeholder="Chọn khách hàng"
                type="text"
                onClick={() => {
                  setOpenCustomerModal(true);
                }}
                onBlur={() => {
                  setOpenCustomerModal(false);
                }}
              />
              <i class="bx bx-up-arrow-alt"></i>
              <i class="bx bx-down-arrow-alt"></i>
            </div>

            {openCustomerModal && (
              <div className="list-item-modal">
                <ul>
                  {staffs.map((staff) => {
                    return <li>{staff}</li>;
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="col-9" style={{ padding: "10px 0px 10px 10px" }}>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      padding="checkbox"
                      style={{
                        backgroundColor: "#03a9f4",
                      }}
                    >
                      <Checkbox
                        color="primary"
                        inputProps={{
                          "aria-label": "select all desserts",
                        }}
                      />
                    </TableCell>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          minWidth: column.minWidth,
                          backgroundColor: "#03a9f4",
                        }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          key={row.code}
                          style={
                            index % 2 == 1 ? { backgroundColor: "#e8e8e8" } : {}
                          }
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              color="primary"
                              inputProps={{
                                "aria-label": "select all desserts",
                              }}
                            />
                          </TableCell>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[6, 12, 100]}
              component="div"
              count={orders.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Orders;
