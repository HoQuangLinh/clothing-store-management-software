import React from "react";
import "./returnorderdetail.css";
const order = Array.from(Array(6).keys());
const ReturnOrderDetail = () => {
  return (
    <div className="return-order-detail-container">
      <div className="return-order-detail-container-heading">
        <div className="navbar__search">
          <input type="text" placeholder="Tìm kiếm sản phẩm" />
          <i className="bx bx-search"></i>
        </div>
        <div className="return-order-detail-select-all">
          <input type="checkbox" name="" id="" />
          <span>Chọn tất cả (10 sản phẩm)</span>
        </div>
        <button className="return-order-detail-btn-exit">Thoát</button>
      </div>
      <div className="return-order-detail-container-body">
        <div className="return-order-detail-container-body-left">
          <div className="return-order-detail-container-body-left-list">
            {order.map((value) => {
              return (
                <div className="return-order-detail-card ">
                  <div className="return-order-detail-card-left">
                    <input type="checkbox" name="" id="" />
                    <div className="return-order-detail-card-left-img">
                      <img
                        src="https://res.cloudinary.com/hoquanglinh/image/upload/v1637565793/Linh/ht6kng6zr37ufxolbaqv.jpg"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="return-order-detail-card-middle">
                    <b>Mã sản phẩm: SP00100101</b>
                    <p className="return-order-detail-card-middle-content">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum facilis obcaecati odio quas neque cumque, nobis
                      accusantium sed sint molestias vel doloremque debitis
                      mollitia reiciendis sapiente. Libero asperiores aliquid
                      quia?
                    </p>
                    <p>600,000đ</p>
                  </div>
                  <div className="return-order-detail-card-right">
                    <div className="return-order-detail-counts">
                      <div className="group-count">
                        <div className="group-count-item">
                          <i class="bx bx-minus"></i>
                        </div>
                        <div className="group-count-item">
                          <input />
                        </div>
                        <div className="group-count-item">
                          <i class="bx bx-plus"></i>
                        </div>
                      </div>
                      <span>/600</span>
                    </div>
                    <div className="return-order-detail-card-price">
                      <p>1,200,000đ</p>
                    </div>
                    <div className="return-order-detail-delete-btn">
                      <i class="bx bx-trash"></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="return-order-detail-container-body-right">
          <div className="refund-payment-card">
            <div className="refund-payment-row">
              <span>Tên khách hàng:</span>
              <b>Hồ Quang Linh</b>
            </div>
            <div className="refund-payment-row">
              <span>Số điện thoại:</span>
              <span>0352952481</span>
            </div>
            <div className="refund-payment-row">
              <span>Mã hoá đơn:</span>
              <b style={{ color: "#237fcd" }}>HD001002003005</b>
            </div>
            <div className="refund-payment-row">
              <span>Tổng giá gốc hoá đơn:</span>
              <b style={{ color: "#237fcd" }}>400,000đ</b>
            </div>
          </div>
          <div className="refund-payment-card">
            <div className="refund-payment-row">
              <span>Tổng giá trị hoàn trả:</span>
              <b style={{ color: "#237fcd" }}>100,000đ</b>
            </div>
            <div className="refund-payment-row">
              <span>Phí trả hàng:</span>
              <input
                style={{
                  color: "#237fcd",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
                type="text"
                value="10,000đ"
              />
            </div>
            <div className="refund-payment-row">
              <span>Tiền trả khách:</span>
              <b style={{ color: "#237fcd" }}>90,000đ</b>
            </div>
          </div>

          <button className="refund-payment-btn">Trả hàng</button>
        </div>
      </div>
    </div>
  );
};

export default ReturnOrderDetail;
