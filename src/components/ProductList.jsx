import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice.js';

const products = [
  { id: 1, title: 'Áo khoác', price: 200, image: 'https://i.pinimg.com/1200x/6e/dc/51/6edc51656cbff06884a1253f05840591.jpg' },
  { id: 2, title: 'Quần jean', price: 300, image: 'https://i.pinimg.com/736x/ad/c4/82/adc482b40e0adc9f7defe2f464775901.jpg' },
  { id: 3, title: 'Tất', price: 30, image: 'https://i.pinimg.com/1200x/69/1a/d2/691ad2536dbd9f1e2f8b9c6c23851fbf.jpg' },
  { id: 4, title: 'Giày', price: 800, image: 'https://i.pinimg.com/1200x/b2/d2/50/b2d250e9b4ba81c48a88385ee105e120.jpg' },
  { id: 5, title: 'Túi xách', price: 500, image: 'https://i.pinimg.com/736x/a0/60/5f/a0605f799e22f2618f158a864900a01d.jpg' },
  { id: 6, title: 'Balo', price: 200, image: 'https://i.pinimg.com/736x/0a/18/82/0a18825fca5cf486aded34045b20203f.jpg' },
  { id: 7, title: 'Đồng hồ', price: 1000, image: 'https://i.pinimg.com/1200x/ee/57/60/ee5760ac8264dd8083690a4adb7ae76b.jpg' },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-list">
      <h2>Danh sách sản phẩm</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} style={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: 8, marginBottom: 8 }} />
            <h3>{product.title}</h3>
            <p className="price">{product.price}k</p>
            <div className="actions">
              <button 
                onClick={() => handleAddToCart(product)}
                className="btn-primary"
              >
                Thêm vào giỏ
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;