import React, { useEffect, useState, useContext } from "react";
import SingleProduct from "./SingleProduct";
import { Cart } from "../Context";

const CartPage = () => {
  const [total, setTotal] = useState("");
  const { cart } = useContext(Cart);
  useEffect(() => {
    setTotal(cart.reduce((accu, curr) => accu + Number(curr.price), 0));
  }, [cart]);

  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: ${total}</span>
      <div className="product-container">
        {cart.map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
