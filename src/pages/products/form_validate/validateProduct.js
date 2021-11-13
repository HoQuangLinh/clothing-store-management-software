import formatDate from "../../../utils/formatDate";
export default function validateProduct(product) {
  let errors = {};

  if (!product.name?.trim()) {
    errors.name = "Sản phẩm không được trống";
  } else if (!/^[A-Za-z]+/.test(product.name.trim())) {
    errors.name = "Sản phẩm không bắt đầu bằng số";
  }

  if (product.costPrice <= 0) {
    errors.costPrice = "Giá vốn phải lớn hơn 0";
  }
  if (product.salePrice <= 0) {
    errors.salePrice = "Giá bán phải lớn hơn 0";
  }

  if (product.discount < 0) {
    errors.color = "Khuyến mãi phải lớn hơn 0";
  }

  return errors;
}
