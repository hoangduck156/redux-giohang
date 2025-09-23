import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../store/ProductSlice';
import { validateProduct } from '../utils/validation';

const ProductForm = ({ product, onCancel }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: product?.title || '',
    price: product?.price || '',
    description: product?.description || '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validation = validateProduct(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    if (product) {
      dispatch(updateProduct({ 
        id: product.id, 
        productData: formData 
      }));
    } else {
      dispatch(addProduct(formData));
    }

    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h2>{product ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm mới'}</h2>
      
      <div className="form-group">
        <label>Tên sản phẩm:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={errors.title ? 'error' : ''}
        />
        {errors.title && <span className="error-text">{errors.title}</span>}
      </div>

      <div className="form-group">
        <label>Giá:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className={errors.price ? 'error' : ''}
        />
        {errors.price && <span className="error-text">{errors.price}</span>}
      </div>

      <div className="form-group">
        <label>Mô tả:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className={errors.description ? 'error' : ''}
        />
        {errors.description && <span className="error-text">{errors.description}</span>}
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-primary">
          {product ? 'Cập nhật' : 'Thêm'}
        </button>
        <button type="button" onClick={onCancel} className="btn-secondary">
          Hủy
        </button>
      </div>
    </form>
  );
};

export default ProductForm;