import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const cartQuantity = useSelector(state => state.cart.quantity);

  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <Link to="/" className="logo">Shop</Link>
          <div className="nav-links">
            <Link to="/">Trang chủ</Link>
            <Link to="/products">Sản phẩm</Link>
            <Link to="/cart" className="cart-link">
              Giỏ hàng
              {cartQuantity > 0 && <span className="cart-badge">{cartQuantity}</span>}
            </Link>
          </div>
        </nav>
      </header>
      
      <main className="main-content">
        {children}
      </main>
      
      <footer className="footer">
        <p>&copy; 2025 Redux Cart App</p>
      </footer>
    </div>
  );
};

export default Layout;