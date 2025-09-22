import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const products = [
  { id: 1, name: "Áo thun", price: 100 },
  { id: 2, name: "Quần jean", price: 200 },
  { id: 3, name: "Giày sneaker", price: 300 },
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Sản phẩm</h2>
      {products.map((p) => (
        <div key={p.id}>
          <span>{p.name} - {p.price}k</span>
          <button onClick={() => dispatch(addToCart(p))}>
            Thêm vào giỏ
          </button>
        </div>
      ))}
    </div>
  );
}
