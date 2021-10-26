import React from "react";
import "./AddProduct.css";

const AddProduct = ({closeForm}) => {
    return(
    <div className="show_div_add">
        <div className="header_div_add">
          <button onClick={()=>closeForm(false)} className="btn_close">X</button>
          <b className="title">Thêm mới sản phẩm</b>
          <div className="txtInfo">Thông tin</div>
          <div className="line_add"></div>
        </div>
        <div className="body_div_add">
          <div className="info1_product">
            <div className="form_row1_product">
              <label className="label1_product">Mã sản phẩm</label>
              <input className="form_input1_product" placeholder="Mã tự động"></input>        
            </div>
            <div className="form_row2_product">
              <label className="label1_product" >Tên sản phẩm</label>
              <input className="form_input1_product" type="text" id></input>       
            </div>
            <div className="form_row3_product">
              <label className="label1_product">Loại sản phẩm</label>
              <input className="form_input1_product" type="text" id></input>          
            </div>
            <div className="form_row4_product">
              <label className="label1_product">Hình ảnh sản phẩm</label>
            </div>
            <div className="form_row5_product">
            <div className="picture_product"></div>
            <div className="picture2"></div>
            <div className="picture3"></div>
            <div className="picture4"></div>
            </div>
          </div>
          <div className="info2_product">
            <div className="form_row1_product">         
              <label className="label2_product"> Giá vốn</label>
              <input className="form_input2_product" type="text" id></input>
            </div>
            <div className="form_row2_product">         
              <label className="label2_product">Giá bán</label>
              <input className="form_input2_product" type="text" id></input>
            </div>
            <div className="form_row3_product">          
              <label className="label2_product"> Tồn kho</label>
              <input className="form_input2_product" type="text" id></input>
            </div>
        </div>
        {/* <div className="div_picture">
        <label className="label3"> Hình ảnh sản phẩm</label>
        <div className="picture"></div>
        </div> */}
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
  
  export default AddProduct;