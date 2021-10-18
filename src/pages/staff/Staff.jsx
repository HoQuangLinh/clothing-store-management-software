import React,{ useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import "./staff.css";
import Arrow from "../../assets/images/arrow.png";

import AddStaff from "./AddStaff.jsx";

import { render } from "@testing-library/react";
const columns = [
  { id: "staffId", label: "Mã nhân viên" },
  { id: "staffName", label: "Tên nhân viên" },
  {
    id: "position",
    label: "Chức vụ",

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "phoneNumber",
    label: "Số điện thoại",

    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "sex",
    label: "Giới tính",

    format: (value) => value.toLocaleString("en-US"),
  },
];
const staffs = [
  {
    id: 1,
    staffId: "NV0001",
    staffName: "Nguyễn Tiến Đạt",
    position: "Nhân viên",
    phoneNumber: "012345677",
    sex: "Nam",
  },
  {
    id: 2,
    staffId: "NV0002",
    staffName: "Hồ Quang Linh",
    position: "Nhân viên",
    phoneNumber: "012345677",
    sex: "Nam",
  },
  {
    id: 3,
    staffId: "NV0003",
    staffName: "Nguyễn Ngọc Thịnh",
    position: "Nhân viên",
    phoneNumber: "012345677",
    sex: "Nam",
  },
  {
    id: 4,
    staffId: "NV0004",
    staffName: "Nguyễn Đức Chí Đạt",
    position: "Nhân viên",
    phoneNumber: "012345677",
    sex: "Nam",
  },
  {
    id: 5,
    staffId: "NV0005",
    staffName: "Nguyễn Tiến Đạt",
    position: "Nhân viên",
    phoneNumber: "012345677",
    sex: "Nam",
  },
  {
    id: 6,
    staffId: "NV0006",
    staffName: "Hồ Quang Linh",
    position: "Nhân viên",
    phoneNumber: "012345677",
    sex: "Nam",
  },
  {
    id: 7,
    staffId: "NV0007",
    staffName: "Nguyễn Ngọc Thịnh",
    position: "Nhân viên",
    phoneNumber: "012345677",
    sex: "Nam",
  },
  {
    id: 8,
    staffId: "NV0008",
    staffName: "Nguyễn Đức Chí Đạt",
    position: "Nhân viên",
    phoneNumber: "012345677",
    sex: "Nam",
  },
];
const Staff = (props) => {
  const [show,setShow]=useState(false)
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
    <div className="div_staff">
          <div className="form_addstaff">
              {
                show&&<AddStaff closeForm={setShow}/>
              }
          </div>
      <div className="div_left">
        <div className="div_search">
          <div className="header_search">
              Tìm kiếm
          </div>
          <div className="search">
                <input type="text" placeholder="Tìm theo mã, tên nhân viên" />
                <i className="bx bx-search"></i>
               
          </div>
        </div>
        <div className="div_search">
          <div className="header_search">
              Chức vụ
          </div>
          <select className="selectbox">
          <option value="staff">Tất cả</option>
            <option value="staff">Nhân viên</option>
            <option value="management">Quản lý</option>
            <option value="cashier">Thu ngân</option>
          </select>


          
        </div>
        <div>

          <div onClick={()=>setShow(true)} className="action-staff-btn1" >
            <i class="bx bx-plus"></i>
            Thêm nhân viên{" "}
          </div>
        </div>

      </div>
      <div className="div_right">
        <div className="col-9" style={{ padding: "10px 0px 10px 10px" }}>
            <Paper sx={{ width: "135%", overflow: "hidden" }}>
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
                    {staffs
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
                count={staffs.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
        </div>   
    </div>
    




    
  )
};

export default Staff;
