import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { Cart } from "../Context";
import { useContext } from "react";

const Header = () => {
  const { cart } = useContext(Cart);
  return (
    <div className="navbar">
      <div>
        <ul className="nav">
          <li className="prod">
            <span className="logo" style={{ border: "2px dotted red" }}>
              Context API
            </span>
          </li>
          <li className="prod">
            <Link to="/">Home</Link>
          </li>
          <li className="prod">
            <Link to="/cart">Cart {cart.length}</Link>
          </li>
        </ul>
      </div>

      {/* <div className="search">
        <form>
          <input type="text" placeholder="Search here" />
          <button type="submit">Search</button>
        </form>
      </div> */}
    </div>
  );
};

export default Header;
