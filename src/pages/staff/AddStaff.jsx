import React from "react";
import "./AddStaff.css";
const AddStaff = ({closeForm}) => {
  return(
  <div className="show_div">
    
      <div className="header_div">
        <button onClick={()=>closeForm(false)} className="btn_close">X</button>
        <b className="title">Thêm mới nhân viên</b>
        <div className="txtInfo">Thông tin</div>
        <div className="line_add"></div>
      </div>
      <div className="body_div">
        <div>
          <div className="picture"></div>
          <button className="btn_pickImage">Chọn ảnh</button>
        </div>
        <div className="info1">
          <div className="form_row1">
            <label className="label1">Mã nhân viên</label>
            <input className="form_input1" placeholder="Mã tự động"></input>        
          </div>
          <div className="form_row2">
            <label className="label1" >Tên nhân viên</label>
            <input className="form_input1" type="text" id></input>       
          </div>
          <div className="form_row3">
            <label className="label1">Ngày sinh</label>
            <input className="form_input1" type="text" id></input>          
          </div>
          <div className="form_row4">
            <label className="label1" >Giới tính</label>
            <input className="form_input1" type="text" id></input>          
          </div>
          <div className="form_row5">
            <label className="label1" >CMND</label>
            <input className="form_input1" type="text" id></input>       
          </div>
          <div className="form_row6">
            <label className="label1">Chức vụ</label>
            <input className="form_input1" type="text" id></input>
          </div>
        </div>
        <div className="info2">
          <div className="form_row1">         
            <label className="label2"> Chi nhánh làm việc</label>
            <input className="form_input2" type="text" id></input>
          </div>
          <div className="form_row2">         
            <label className="label2">Số điện thoại</label>
            <input className="form_input2" type="text" id></input>
          </div>
          <div className="form_row3">          
            <label className="label2"> Email</label>
            <input className="form_input2" type="text" id></input>
          </div>
          <div className="form_row4">         
            <label className="label2" >Facebook</label>
            <input className="form_input2" type="text" id></input>
          </div>
          <div className="form_row5">        
            <label className="label2" > Địa chỉ</label>
            <input className="form_input2" type="text" id></input>
          </div>
          <div className="form_row6">
            <label className="label2">Ghi chú</label>
            <input className="form_input2" type="text" id></input>
          </div>
        </div>
        <button onClick={()=>closeForm(false)} className="btn_Cancel">
            Bỏ qua
        </button>
        <button className="btn_Save">
            Lưu
        </button>
      </div>
   
    
  </div>

  )
};

export default AddStaff;
