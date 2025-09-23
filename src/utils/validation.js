export const validateProduct = (product) => {
  const errors = {};

  if (!product.title || product.title.trim() === '') {
    errors.title = 'Tên sản phẩm là bắt buộc';
  }

  if (!product.price || product.price <= 0) {
    errors.price = 'Giá sản phẩm phải lớn hơn 0';
  }

  if (!product.description || product.description.trim() === '') {
    errors.description = 'Mô tả sản phẩm là bắt buộc';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateCartItem = (item) => {
  const errors = {};

  if (!item.quantity || item.quantity <= 0) {
    errors.quantity = 'Số lượng phải lớn hơn 0';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};