import React from "react";
import ProductList from "./components/productList";
import Cart from "./components/Cart";

export default function App() {
  return (
    <div>
      <h1>🛒 Demo Giỏ Hàng Redux</h1>
      <ProductList />
      <Cart />
    </div>
  );
}
