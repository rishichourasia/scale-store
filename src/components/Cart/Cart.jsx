import React from "react";
import { useCart } from "../../context/cart-context";
import { BillingBox } from "./BillingBox";
import "./cart.css";
import { CartCard } from "./CartCard";
import { Toaster } from "react-hot-toast";

export const Cart = () => {
  const { cartState } = useCart();

  return (
    <div className="cart-container">
      <Toaster position="top-center " />
      <div className="cart-title">
        <h1>Cart</h1>
      </div>
      <div className="cart">
        <div className="products">
          {cartState.cart.map((item) => (
            <CartCard item={item} key={item.id} />
          ))}
        </div>
        <BillingBox />
      </div>
    </div>
  );
};
