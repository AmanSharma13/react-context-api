import { useContext } from "react";
import { Cart } from "../Context";

const SingleProduct = ({ product }) => {
  const { cart, setCart } = useContext(Cart);
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{product.name}</span>
        <span>${product.price}</span>
      </div>

      {cart.includes(product) ? (
        <button
          className="add"
          onClick={() => {
            setCart(cart.filter((c) => c.id !== product.id));
          }}
        >
          Remove from cart
        </button>
      ) : (
        <button
          className="add"
          onClick={() => {
            setCart([...cart, product]);
          }}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
