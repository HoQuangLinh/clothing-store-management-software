import React, { useState, useEffect } from "react";
import ReturnsCard from './returnCard/ReturnsCard';
import "./returns.css";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import ReturnForm from './returns_NewForm/returnForm';
import ModalUnstyled from "@mui/core/ModalUnstyled";
import { styled, Box } from "@mui/system";
const columns = [
  { id: 'ID', label: 'Mã Hóa Đơn', minWidth: 170 },
  { id: 'Datetime', label: 'Ngày tạo', minWidth: 100 },
  {
    id: 'Customers',
    label: 'Khách hàng',
    minWidth: 170,
    align: 'right',
    //format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Staff',
    label: 'Nhân viên',
    minWidth: 170,
    align: 'right',
    //format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'PhoneNumber',
    label: 'Số điện thoại',
    minWidth: 170,
    align: 'right',
    //format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'TotalPrice',
    label: 'Tổng tiền (VNĐ)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(ID,Datetime, Customers,Staff, PhoneNumber, TotalPrice) {
  
  return { ID,Datetime, Customers,Staff, PhoneNumber, TotalPrice};
}

const rows = [
  createData('HD0123','12/10/2021','Chí Đạt','Hồ Linh','0808150877','150000000'),
  createData('HD0123','12/10/2021','Chí Đạt','Hồ Linh','0808150877','150000000'),
  createData('HD0123','12/10/2021','Chí Đạt','Hồ Linh','0808150877','150000000'),
  createData('HD0123','12/10/2021','Chí Đạt','Hồ Linh','0808150877','150000000'),
  createData('HD0123','12/10/2021','Chí Đạt','Hồ Linh','0808150877','150000000'),
  createData('HD0123','12/10/2021','Chí Đạt','Hồ Linh','0808150877','150000000'),
  createData('HD0123','12/10/2021','Chí Đạt','Hồ Linh','0808150877','150000000'),
  createData('HD0123','12/10/2021','Chí Đạt','Hồ Linh','0808150877','150000000'),
  createData('HD0123','12/10/2021','Chí Đạt','Hồ Linh','0808150877','150000000'),
  createData('HD0123','12/10/2021','Chí Đạt','Hồ Linh','0808150877','150000000'),
  createData('HD0123','12/10/2021','Chí Đạt','Hồ Linh','0808150877','150000000'),
  createData('HD0123','12/10/2021','Chí Đạt','Hồ Linh','0808150877','150000000'),
  createData('HD0123','12/10/2021','Chí Đạt','Hồ Linh','0808150877','150000000'),
  createData('HD0123','12/10/2021','Chí Đạt','Hồ Linh','0808150877','150000000'),
  createData('HD0123','12/10/2021','Chí Đạt','Hồ Linh','0808150877','150000000'),
  createData('HD0123','12/10/2021','Chí Đạt','Hồ Linh','0808150877','150000000'),
  createData('HD0123','12/10/2021','Chí Đạt','Hồ Linh','0808150877','150000000'),
  createData('HD0123','12/10/2021','Chí Đạt','Hồ Linh','0808150877','150000000'),
  
];
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
const Returns = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedReturns, setselectedReturns] = useState();
  const [showNewFormReturn, setNewFormReturn] = useState(false);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="returns">
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={showNewFormReturn}
        onClose={() => {
          setNewFormReturn(false);
        }}
        BackdropComponent={Backdrop}
      >
        <ReturnForm
          staff={selectedReturns}
          setStaff={setselectedReturns}
          setNewFormReturn={setNewFormReturn}
        />
      </StyledModal>
      <div className='returns_header'>
        <div className="returns_search">
          <input type="text" placeholder="Tìm kiếm" />
          <i className="bx bx-search"></i> 
        </div>
        <div className='marginRight'>
          <ReturnsCard />
        </div>
      </div>
      <div className="returns_body">
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 480 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead >
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                    
                  ))}
                  <TableCell> 
                    <button></button>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow 
                        
                        hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                                
                            </TableCell>
                          );
                        })}
                        <TableCell> 
                          <button className='buttonDoiTra'
                          onClick={() => {
                            setselectedReturns(row);
                            setNewFormReturn(true);
                          }}
                          > Đổi trả </button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
};

export default Returns;
