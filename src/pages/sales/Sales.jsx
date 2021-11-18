import React, { useState } from "react";

import ComboBox from "../../components/combobox/Combobox";
import "./sales.css";
const listProducts = Array.from(Array(10).keys());
const listCustomers = Array.from(Array(10).keys());
const orderDetail = Array.from(Array(10).keys());
const Sales = () => {
  const [showListCustomers, setShowListCustomer] = useState(false);
  const [customer, setCustomer] = useState();
  return (
    <div className="sales-container">
      <div className="sales-body-container">
        <div className="sales-header-container">
          <div className="sales-searchs">
            <div className="navbar__search">
              <input type="text" placeholder="Tìm kiếm..." />
              <i className="bx bx-search"></i>
            </div>
          </div>
        </div>
        <div className="tab-bills">
          <ul>
            <li className="active">Hoá đơn 1</li>
            <li>Hoá đơn 2</li>
            <li>Hoá đơn 3</li>
            <li>Hoá đơn 4</li>
            <li>Trả hàng</li>
          </ul>
        </div>
        <div className="sales-filter">
          <ComboBox />
        </div>
        <div className="sales-list-products row">
          {listProducts.map((value) => {
            return (
              <div className=" col-4">
                <div className="sales-card">
                  <div className="sales-card-img">
                    <img
                      className="sales-card-img"
                      src="https://cf.shopee.vn/file/eb9c378d7d029a70af4171c495c8f2f4"
                      alt=""
                    />
                  </div>
                  <div className="sales-card-desc">
                    <div className="sales-card-name">
                      <p>
                        Áo sơ mi trắng, thương hiệu handmake, chất coton siêu
                        mềm mại
                      </p>
                    </div>
                    <div className="sales-card-prices">
                      <p className="sales-card-cost-price">1,000,000đ</p>
                      <p className="sales-card-sale-price">750,000đ</p>
                    </div>
                    <div className="sales-card-buy">
                      <div className="sales-card-buy-btn">Bán ngay</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="sales-bill-customer-container">
        <div className="sales-bill-customer">
          <div className="sales-bill-customer-header">
            <p>Khách hàng</p>
            <button className="btn-add">Thêm mới</button>
          </div>
          <div className="sales-bill-search-container">
            <div className="sales-bill-search">
              <input
                value={customer}
                type="text"
                placeholder="Tìm kiếm khách hàng"
              />
              <i
                onClick={() => {
                  setShowListCustomer(!showListCustomers);
                }}
                className="bx bx-search"
              ></i>
            </div>
            {showListCustomers && (
              <div className="sales-bill-list">
                {listCustomers.map((value) => {
                  return (
                    <div
                      onClick={() => {
                        setShowListCustomer(!showListCustomers);
                        setCustomer("Hồ Quang Linh");
                      }}
                      className="sales-bill-list-item"
                    >
                      Hồ Quang Linh
                    </div>
                  );
                })}
              </div>
            )}

            <div className="sales-bill-customer-info">
              <div className="sales-bill-customer-info-item">
                Khách hàng:&nbsp; <b>Hồ Quang Linh</b>
              </div>
              <div className="sales-bill-customer-info-item">
                Số điện thoại:&nbsp; <b>0352952481</b>
              </div>
            </div>
          </div>
        </div>

        <div className="sales-order-detail">
          <h3 className="sales-order-detail-header">Chi tiết hoá đơn</h3>
          <div className="sales-order-detail-body">
            {orderDetail.map((value) => {
              return (
                <div className="sales-order-detail-item">
                  <div className="sales-order-detail-img">
                    <img
                      src="https://cf.shopee.vn/file/eb9c378d7d029a70af4171c495c8f2f4"
                      alt=""
                    />
                  </div>
                  <div className="sales-order-detail-midle">
                    <div className="sales-order-detail-name">
                      <p>
                        Áo sơ mi trắng, thương hiệu handmake, chất Áo sơ mi
                        trắng, thương hiệu handmake, chất
                      </p>
                    </div>
                    <div className="sales-order-detail-desc">
                      <div className="group-count">
                        <div className="group-count-item">
                          <i class="bx bx-minus"></i>
                        </div>
                        <div className="group-count-item">
                          <input type="text" value="50" />
                        </div>
                        <div className="group-count-item">
                          <i class="bx bx-plus"></i>
                        </div>
                      </div>
                      <b>2,000,000đ</b>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="sales-prices">
          <div className="sales-prices-item">
            <p>Tạm tính</p>
            <span>2,000,000đ</span>
          </div>
          <div className="sales-prices-item">
            <p>Điểm tích luỹ</p>
            <span>100</span>
          </div>
          <div className="sales-prices-item">
            <p>Sử dụng điểm</p>
            <input className="sales-score-used" type="text" value={100} />
          </div>
          <div className="sales-prices-item">
            <p>Giảm giá</p>
            <b>1,000,000đ</b>
          </div>
          <div className="sales-prices-item">
            <p>Tổng tiền</p>
            <b>1,000,000đ</b>
          </div>
        </div>
        <div className="sales-checkout">
          <button>Thanh toán</button>
        </div>
      </div>
    </div>
  );
};

export default Sales;
