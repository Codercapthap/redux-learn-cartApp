import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector((state) => {
    return state.cart.itemsList;
  });
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => {
          return (
            <li key={item.id}>
              {" "}
              <CartItem
                quantity={item.quantity}
                name={item.name}
                total={item.totalPrice}
                price={item.price}
                id={item.id}
              />{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CartItems;
