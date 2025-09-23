import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Chào mừng đến với cửa hàng</h1>
      <p>Khám phá các sản phẩm tuyệt vời của chúng tôi</p>
      <div className="home-actions">
        <Link to="/products" className="btn-primary">Xem sản phẩm</Link>
        <Link to="/cart" className="btn-secondary">Xem giỏ hàng</Link>
      </div>
    </div>
  );
};

export default Home;