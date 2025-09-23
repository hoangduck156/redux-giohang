import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div className="product-detail">
      <h1>Chi tiết sản phẩm #{id}</h1>
      <p>Trang chi tiết sản phẩm sẽ được cập nhật sau</p>
    </div>
  );
};

export default ProductDetail;