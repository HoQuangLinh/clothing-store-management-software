import React, { useEffect, useState } from "react";
import axios from "axios";

import { useLocation, useHistory } from "react-router";

const ProductQr = () => {
  let location = useLocation();
  const history = useHistory();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://clothesapp123.herokuapp.com/api/products/listProduct`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        alert("Lỗi server");
      });
  }, []);

  return (
    <div className="order-detail-container">
      <div className="order-detail-container-heading">
        <h3>Thông tin danh sách sản phẩm</h3>

        <button
          onClick={() => {
            history.push("/orders");
          }}
          className="order-detail-btn-exit"
        >
          Thoát
        </button>
      </div>
      <div className="order-detail-container-body">
        <div className="order-detail-container-body-left">
          <div className="order-detail-container-body-left-list">
            {products.map((product, index) => {
              return (
                <div className="order-detail-card ">
                  <div className="order-detail-card-left">
                    <div className="order-detail-card-left-img">
                      <img src={product?.qrCodeUrl} alt="" />
                    </div>
                  </div>

                  <div className="order-detail-card-middle">
                    <b>
                      Mã sản phẩm:{" "}
                      {product?._id.substr(product._id.length - 10)}
                    </b>
                    <p className="order-detail-card-middle-content">
                      {product?.name}
                    </p>
                    <div className="order-detail-card-middle-desc">
                      <p className="order-detail-card-middle-desc-item">
                        Giá gốc:
                        {` ${product?.originPrice.toLocaleString("en")} đ`}
                      </p>

                      <span className="order-detail-card-middle-desc-item">
                        Giá bán:{" "}
                        {` ${product?.salePrice.toLocaleString("en")} đ`}
                      </span>

                      <span className="order-detail-card-middle-desc-item">
                        Giảm giá:
                        <b>{` ${product.discount.toLocaleString("en")} %`}</b>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQr;
