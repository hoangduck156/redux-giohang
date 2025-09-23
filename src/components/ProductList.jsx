import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct } from '../store/ProductSlice';
import { addToCart } from '../store/cartSlice.js';
import { removeFromCart, updateQuantity } from '../store/cartSlice.js';

const ProductList = () => {
  const dispatch = useDispatch();
  const { items: products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: 10, // Giá mẫu
    }));
  };

  const handleDelete = (id) => {
    if (window.confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
      dispatch(deleteProduct(id));
    }
  };

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>Lỗi: {error}</div>;

  return (
    <div className="product-list">
      <h2>Danh sách sản phẩm</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.title}</h3>
            <p>{product.body}</p>
            <p className="price">$10</p>
            <div className="actions">
              <button 
                onClick={() => handleAddToCart(product)}
                className="btn-primary"
              >
                Thêm vào giỏ
              </button>
              <button 
                onClick={() => handleDelete(product.id)}
                className="btn-danger"
              >
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;