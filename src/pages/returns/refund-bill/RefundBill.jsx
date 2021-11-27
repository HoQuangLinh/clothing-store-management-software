import React, { useRef, useState, useEffect } from "react";
import "./checkout.css";
import { useReactToPrint } from "react-to-print";
import { useLocation, useHistory } from "react-router-dom";
import QRCode from "qrcode";
import axios from "axios";
import { Alert } from "react-bootstrap";
const RefundBill = () => {
  let history = useHistory();
  let location = useLocation();
  const order = location.state.order;
  const [orderId, setOrderId] = useState("");
  const [qrImage, setQrImage] = useState("");

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handleCheckout = () => {
    handlePrint();
  };
  const getDate = () => {
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    return `${date}/${month}/${year}`;
  };
  return (
    <div ref={componentRef} className="invoice-container">
      <div className="invoice-header">
        <h3>HOÁ ĐƠN TRẢ HÀNG</h3>
        <h4>Mã trả hàng: </h4>
        <p>Ngày lập hoá đơn: {getDate()}</p>
      </div>
      <div className="invoice-info">
        <div className="invoice-info-row">
          <h3>Shop quần áo The Clothes</h3>
          <p>Đường Vành Đai, Kí túc xá Đại học quốc gia khu B</p>
          <p>Phường Đông Hoà, thị xã Dĩ An, tỉnh Bình Dương</p>
        </div>
        <div className="invoice-info-right">
          <div className="invoice-qrcode">
            <img src={qrImage} alt="" />
          </div>
          <div className="invoice-info-p">
            <p>Khách hàng: </p>
            <p>Số điện thoại: </p>
            <p>Nhân viên bán hàng: </p>
          </div>
        </div>
      </div>
      <div class="invoice-table-bill-container">
        <table id="invoice-table">
          <thead>
            <tr>
              <th>Số thứ tự</th>
              <th>Tên sản phẩm</th>
              <th>Đơn giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {order.orderDetails.map((orderItem, index) => {
              if (orderItem.quantity) {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{orderItem.productName}</td>

                    <td>{`${orderItem.salePrice.toLocaleString("en")}đ`}</td>
                    <td>{orderItem.quantity}</td>
                    <td>{`${(
                      orderItem.salePrice * orderItem.quantity
                    ).toLocaleString("en")}đ`}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
      <div className="table-footer">
        <div className="table-footer-left">
          <p>
            Cảm ơn quý khách đã mua hàng tại <b>The Clothes</b>
          </p>
        </div>
        <div className="table-footer-right">
          <p>{`Tạm tính ${order.subTotal.toLocaleString("en")}đ`}</p>
          {order.discount > 0 && (
            <p>{`Giảm giá: ${order.discount.toLocaleString("en")}đ`}</p>
          )}
          <b>{`Tổng tiền: ${order.orderTotal.toLocaleString("en")}đ`}</b>
        </div>
      </div>
      <div className="invoice-confirm-row">
        <button
          onClick={() => {
            handleCheckout();
          }}
          className="invoice-confirm-access"
        >
          Xác nhận
        </button>

        <button
          onClick={() => {
            history.push("/returns");
          }}
          className="invoice-confirm-cancel"
        >
          Huỷ
        </button>
      </div>
    </div>
  );
};

export default RefundBill;
