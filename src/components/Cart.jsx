import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../store/cartSlice';
import { validateCartItem } from '../utils/validation';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, total, quantity } = useSelector(state => state.cart);

  const handleQuantityChange = (id, newQuantity) => {
    const validation = validateCartItem({ quantity: newQuantity });
    
    if (validation.isValid) {
      dispatch(updateQuantity({ id, quantity: parseInt(newQuantity) }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  if (items.length === 0) {
    return <div className="empty-cart">Giỏ hàng trống</div>;
  }

  return (
    <div className="cart">
      <h2>Giỏ hàng ({quantity} sản phẩm)</h2>
      <div className="cart-items">
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <h4>{item.title}</h4>
              <p className="price">${item.price}</p>
            </div>
            <div className="quantity-controls">
              <button 
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                min="1"
              />
              <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                +
              </button>
            </div>
            <div className="item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
            <button 
              onClick={() => handleRemove(item.id)}
              className="btn-danger"
            >
              Xóa
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Tổng cộng: ${total.toFixed(2)}</h3>
        <button className="btn-primary">Thanh toán</button>
      </div>
    </div>
  );
};

export default Cart;