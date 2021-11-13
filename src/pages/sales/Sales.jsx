import React,{ useState } from "react";
import "./sales.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";

  var showdate = new Date();
  var displaytodaysdate = showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();
  var displaytime= showdate.getHours()+':'+showdate.getMinutes();
  function createData(name, price, number, discount, totalPrice) {
    return { name, price, number, discount, totalPrice };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
const Sales = () => {
  const [showorder,setShoworder]=useState(false)
  const [show,setShow]=useState(false)
  return (
    <div className="div_sale">
      <div className="sales_header">
        <div className="sales_search">
          <input type="text" placeholder="Tìm kiếm" />
          <i className="bx bx-search"></i> 
        </div>
      </div>
      <div className="sales_body">
        <div className="sales_left" >
          <div className="sales_order" >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Tên sản phẩm</TableCell>
                  <TableCell align="right">Giá &nbsp;(NVĐ)</TableCell>
                  <TableCell align="right">Số lượng</TableCell>
                  <TableCell align="right">Giảm giá&nbsp;(%)</TableCell>
                  <TableCell align="right">Tổng tiền&nbsp;(VNĐ)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.number}</TableCell>
                    <TableCell align="right">{row.discount}</TableCell>
                    <TableCell align="right">{row.totalPrice}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </div>
          <div className="sales_products"> 
              <button onClick={()=>setShoworder(true)} className="product1" >
                <i className="bx bx-image" ></i>
                <p>200.000</p>
              </button>
          </div>
        </div>
        <div className="sales_right">
          <div className="sales_header_right">
            <p>Nguyễn Tiến Đạt</p>
            <input type="text" value={displaytodaysdate} readOnly="true"/>
            <input type="text" value={displaytime} readOnly="true"/>
          </div>
          <div className="sales_search_customer">
            <input className="input_search" placeholder="Tìm tên khách hàng"></input>    
            <i className="bx bx-search"></i> 
          </div>
          <div className="sales_infoBill">
            <div className="sales_row1">
              <label className="label_name_customer">Họ tên khách hàng:</label>
              <input className="input_name_customer" placeholder=""></input>        
            </div>
            <div className="sales_row1">
              <label className="label_phone_customer">Số điện thoại:</label>
              <input className="input_phone_customer" placeholder=""></input>        
            </div>
            <div className="sales_row1">
              <label className="label_money_customer">Tổng tiền:</label>
              <input className="input_money_customer" placeholder=""></input>        
            </div>
            <div className="sales_row1">
              <label className="label_discount_customer">Giảm giá:</label>
              <input className="input_discount_customer" placeholder=""></input>        
            </div>
            <div className="sales_row1">
              <label className="label_pay_customer">Khách hàng cần trả:</label>
              <input className="input_pay_customer" placeholder=""></input>        
            </div>
            <div className="sales_row1">
              <label className="label_exchange_customer">Tiền thừa trả khách:</label>
              <input className="input_exchange_customer" placeholder=""></input>        
            </div>
            <div className="sales_note">
              <i className='bx bx-notepad'></i>
              <input className="input_note" placeholder="Ghi chú"></input>    
            </div>
            <button className="btn_pay">Thanh toán</button>
          </div>
        </div>

      </div>   
      
    </div> 


  )
};

export default Sales;
