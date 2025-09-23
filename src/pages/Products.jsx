import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const Products = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="products-page">
      <div className="page-header">
        <h1>Quản lý sản phẩm</h1>
        <button 
          onClick={() => setShowForm(true)}
          className="btn-primary"
        >
          Thêm sản phẩm
        </button>
      </div>

      {showForm && (
        <ProductForm onCancel={() => setShowForm(false)} />
      )}

      <ProductList />
    </div>
  );
};

export default Products;