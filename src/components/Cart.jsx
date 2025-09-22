import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../features/cartSlice";

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Giỏ hàng</h2>
      {cart.length === 0 && <p>Chưa có sản phẩm nào</p>}
      {cart.map(item => (
        <div key={item.id}>
          {item.name} - {item.price}k
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Xóa
          </button>
        </div>
      ))}
      {cart.length > 0 && (
        <button onClick={() => dispatch(clearCart())}>
          Xóa hết
        </button>
      )}
    </div>
  );
}
