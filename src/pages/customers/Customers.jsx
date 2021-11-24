import React, { useEffect, useState } from "react";
import CustomersNavbar from "./customer_navbar/CustomersNavbar";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import DatePicker from "react-datepicker";
import axios from "axios";

import "react-datepicker/dist/react-datepicker.css";
import "./customers.css";
import Checkbox from "@mui/material/Checkbox";
const columns = [
  { id: "customerId", label: "Mã Khách hàng" },
  { id: "name", label: "Tên khách hàng" },
  {
    id: "phone",
    label: "Số điện thoại",
  },
  {
    id: "totalPrice",
    label: "Tổng tiền",

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "points",
    label: "Điểm tích luỹ",

    format: (value) => value.toLocaleString("en-US"),
  },
];

const ctm = [
  {
    id: 1,
    customerId: "1",
    name: "Nguyễn Ngọc Thịnh",
    phone: "0352952482",
    totalPrice: 20000,
    points: 100,
    list: [
      {
        asd: 123,
      },
    ],
  },
  {
    id: 1,
    customerId: "1",
    name: "Nguyễn Ngọc Thịnh",
    phone: "0352952482",
    totalPrice: 20000,
    points: 100,
  },
  {
    id: 1,
    customerId: "1",
    name: "Nguyễn Ngọc Thịnh",
    phone: "0352952482",
    totalPrice: 20000,
    points: 100,
  },
  {
    id: 1,
    customerId: "1",
    name: "Nguyễn Ngọc Thịnh",
    phone: "0352952482",
    totalPrice: 20000,
    points: 100,
  },
  {
    id: 1,
    customerId: "1",
    name: "Nguyễn Ngọc Thịnh",
    phone: "0352952482",
    totalPrice: 20000,
    points: 100,
  },
  {
    id: 1,
    customerId: "1",
    name: "Nguyễn Ngọc Thịnh",
    phone: "0352952482",
    totalPrice: 20000,
    points: 100,
  },
  {
    id: 1,
    customerId: "1",
    name: "Nguyễn Ngọc Thịnh",
    phone: "0352952482",
    totalPrice: 20000,
    points: 100,
  },
];

const Customers = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [customers, setCustomers] = useState(ctm);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  useEffect(() => {
    console.log("Chạy USe effect");
    axios
      .get("https://clothingshopapp.herokuapp.com/api/customers/list")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.res);
      });
  });

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <CustomersNavbar />
      <div className="row customers_content">
        <div className="col-3">
          <div className="customer-card">
            <h3 className="customer-card-heading">Điểm tích luỹ</h3>
            <div className="customer-card-body">
              <div className="customer-card-item">
                <span>Từ</span>
                <input
                  className="customer-card-input"
                  placeholder="Giá trị"
                  type="text"
                />
              </div>
              <div className="customer-card-item">
                <span>Đến</span>
                <input
                  className="customer-card-input"
                  placeholder="Giá trị"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="customer-card">
            <h3 className="customer-card-heading">Tổng tiền</h3>
            <div className="customer-card-body">
              <div className="customer-card-item">
                <span>Từ</span>
                <input
                  className="customer-card-input"
                  placeholder="Giá trị"
                  type="text"
                />
              </div>
              <div className="customer-card-item">
                <span>Đến</span>
                <input
                  className="customer-card-input"
                  placeholder="Giá trị"
                  type="text"
                />
              </div>
              <div className="customer-card-item">
                <input
                  className="timer-choice"
                  type="radio"
                  name="timer-choice"
                  id=""
                />
                <input
                  className="customer-card-input"
                  readOnly
                  type="text"
                  placeholder="Toàn thời gian"
                />
              </div>
              <div className="customer-card-item">
                <input
                  className="timer-choice"
                  type="radio"
                  name="timer-choice"
                  id=""
                />
                <input
                  className="customer-card-input"
                  type="date"
                  name=""
                  defaultValue="2021-10-17"
                />
              </div>
            </div>
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
                  {customers
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
              count={customers.length}
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

export default Customers;
