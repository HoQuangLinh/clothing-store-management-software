import React, { useState, useRef, useEffect } from "react";
import "../staff/addstaff/AddStaff.css";
import "./AddProduct.css";
import axios from "axios";
import QRCode from "qrcode";
import validateProduct from "./form_validate/validateProduct";
import useFormProduct from "./form_validate/useFormProduct";

const AddProduct = ({ setShowFormAddProduct }) => {
  const inputAvatarRef = useRef(null);
  const [avatar, setAvatar] = useState();
  const [qrImage, setQrImage] = useState(
    "https://res.cloudinary.com/hoquanglinh/image/upload/v1636559426/Linh/4fc20722-5368-e911-80d5-b82a72db46f2_a7cy10.png"
  );
  const [product, setProduct] = useState({
    name: "",
    category: "Áo",
    costPrice: 0,
    salePrice: 0,
    desc: "",
    discount: 0,
  });
  useEffect(() => {}, [qrImage]);

  const [options, setOptions] = useState([
    { id: 0, size: "3XL", quantity: 0 },
    { id: 1, size: "XXL", quantity: 0 },
    { id: 2, size: "XL", quantity: 0 },
    { id: 3, size: "L", quantity: 0 },
    { id: 4, size: "M", quantity: 0 },
    { id: 5, size: "S", quantity: 0 },
  ]);

  const handleOptionChecked = (index) => {
    let newOptions = [...options];
    newOptions[index] = {
      ...options[index],
      checked: !newOptions[index].checked,
    };
    setOptions(newOptions);
  };
  const getOption = async () => {
    // const newOptions = options.filter((option) => option.checked == true);

    var newOptions = options
      .filter((option) => option.checked === true && option.quantity > 0)
      .map((option) => {
        return {
          size: option.size,
          quantity: option.quantity,
        };
      });

    return newOptions;
  };

  const handleIncreaseDiscount = (e) => {
    setProduct((prev) => {
      if (prev.discount <= 99) {
        const discount = Math.floor(prev.discount) + 1;
        return {
          ...prev,
          discount: discount,
          salePrice: prev.costPrice - (discount * prev.costPrice) / 100,
        };
      } else {
        return prev;
      }
    });
  };

  const handleDecreaseDiscount = (e) => {
    setProduct((prev) => {
      if (prev.discount > 0) {
        const discount = Math.floor(prev.discount) - 1;
        return {
          ...prev,
          discount: discount,
          salePrice: prev.costPrice - (discount * prev.costPrice) / 100,
        };
      } else {
        return prev;
      }
    });
  };

  //active function when choose image from pc
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setAvatar(event.target.files[0]);
    }
  };

  //generate QrCode from product
  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(product.name);
      setQrImage(response);
      var arr = response.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }

      return new File([u8arr], "qrImage", { type: mime });
    } catch (error) {
      console.log(error);
    }
  };

  //Submit form
  const submitForm = async () => {
    var optionsVal = await getOption();
    var qrUrl = await generateQrCode();
    console.log(qrUrl);
    const formProduct = new FormData();
    formProduct.append("categoryId", "618d621ba78b901522255752");
    formProduct.append("name", product.name);
    formProduct.append("costPrice", product.costPrice);
    formProduct.append("discount", product.discount);
    formProduct.append("salePrice", product.salePrice);
    formProduct.append("desc", product.desc);

    formProduct.append("images", avatar);
    formProduct.append("images", qrUrl);
    for (var i = 0; i < optionsVal.length; i++) {
      var optionVal = optionsVal[i];
      for (var prop in optionVal) {
        formProduct.append(`options[${i}][${prop}]`, optionVal[prop]);
      }
    }
    //post to API
    axios
      .post(
        "https://clothesapp123.herokuapp.com/api/products/add",
        formProduct,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
          },
        },
        { timeout: 1000 }
      )
      .then((res) => {
        console.log(res.data);
        alert("Thêm sản phẩm thành công");
      })
      .catch((error) => {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
        }
      });
  };
  const { handleChange, handleSubmit, errors } = useFormProduct(
    submitForm,
    product,
    setProduct,
    validateProduct
  );

  const onExitClick = () => {
    setShowFormAddProduct(false);
  };

  return (
    <div className="add_product-container">
      <div className="add_product-heading">
        <h3 className="add_product-heading-title">Thêm mới sản phẩm</h3>
        <div className="add_product-heading-info">
          <p>Thông tin</p>
          <div className="line-add"></div>
        </div>
        <div onClick={onExitClick} className="add_product-btn-exit">
          X
        </div>
      </div>
      <div className="add_product-body">
        <div className="add_product-form">
          <div className="add_product-form-row">
            <span>Mã sản phẩm</span>
            <input type="text" placeholder="Mã tự động" readOnly />
          </div>
          <div className="add_product-form-row">
            <span>Giá vốn (đồng)</span>
            <input
              type="text"
              pattern="[0-9]*"
              name="costPrice"
              value={product.costPrice}
              onChange={handleChange}
            />
            <p className="add_product-form-error">{errors.costPrice}</p>
          </div>
          <div className="add_product-form-row">
            <span>Loại sản phẩm</span>

            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              className="add_product-form-select"
            >
              <option value="Áo">Áo </option>

              <option value="Quần">Quần</option>
            </select>
          </div>
          <div className="add_product-form-row">
            <span>Giảm giá (%)</span>
            <input
              name="discount"
              type="text"
              pattern="[0-9]*"
              value={product.discount}
              onChange={handleChange}
            />

            <div className="discount_type">
              <i
                onClick={handleIncreaseDiscount}
                class="bx bxs-up-arrow discount_type_item"
              ></i>
              <i
                onClick={handleDecreaseDiscount}
                class="bx bxs-down-arrow discount_type_item"
              ></i>
            </div>
            <p className="add_product-form-error">{errors.countInStock}</p>
          </div>

          <div className="add_product-form-row">
            <span>Tên sản phẩm</span>
            <input name="name" value={product.name} onChange={handleChange} />
            <p className="add_product-form-error">{errors.name}</p>
          </div>
          <div className="add_product-form-row">
            <span>Giá bán (đồng)</span>
            <input
              type="text"
              pattern="[0-9]*"
              name="salePrice"
              className="salePrice"
              value={product.salePrice}
              onChange={handleChange}
            />
            <p className="add_product-form-error">{errors.salePrice}</p>
          </div>
          <div className="add_product-form-row">
            <span style={{ width: "30%" }}>Size</span>
            <div
              style={{ width: "70%" }}
              className="add_product-form-list-size"
            >
              {options.map((option, index) => {
                return (
                  <div className="add_product-form-size-item">
                    <input
                      onChange={() => handleOptionChecked(index)}
                      type="checkbox"
                    />
                    <span>{`${option.size}:`}</span>
                    <input
                      value={option.quantity}
                      type="text"
                      className="add_product-form-size-count"
                      onChange={(e) => {
                        let newOptions = [...options];
                        let option = { ...newOptions[index] };
                        option.quantity = Math.floor(e.target.value);
                        newOptions[index] = option;
                        setOptions(newOptions);
                      }}
                    />
                  </div>
                );
              })}
            </div>
            <p className="add_product-form-error">{errors.size}</p>
          </div>
          <div className="add_product-form-row">
            <span>Mô tả</span>
            <input
              name="desc"
              type="text"
              value={product.desc}
              onChange={handleChange}
            />
            <p className="add_product-form-error">{errors.desc}</p>
          </div>
        </div>
      </div>
      <div className="add_product-form-images">
        <div className="add_product-form-image">
          <input
            ref={inputAvatarRef}
            type="file"
            onChange={onImageChange}
            style={{ display: "none" }}
          />
          <p>Hình ảnh sản phẩm</p>
          <img
            onClick={() => {
              inputAvatarRef.current.click();
            }}
            style={{ height: 120, width: 120 }}
            src={
              avatar
                ? URL.createObjectURL(avatar)
                : "https://res.cloudinary.com/hoquanglinh/image/upload/v1636559426/Linh/4fc20722-5368-e911-80d5-b82a72db46f2_a7cy10.png"
            }
            alt=""
          />
        </div>
        <div className="add_product-form-image">
          <p>Mã vạch</p>
          <img style={{ height: 120, width: 120 }} src={qrImage} alt="" />
        </div>
      </div>
      <div className="add_product-btn-row">
        <button onClick={handleSubmit} className="add_product-btn-save">
          Lưu
        </button>
        <button onClick={onExitClick} className="add_product-btn-cancel">
          Bỏ qua
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
