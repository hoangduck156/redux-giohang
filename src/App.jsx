import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import CartPage from './pages/CartPage';
import ProductDetail from './pages/ProductDetail';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;