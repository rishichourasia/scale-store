import React, { useState } from "react";
import { useCart } from "../../context/cart-context";
import { BillingBox } from "./BillingBox";
import "./cart.css";
import { CartCard } from "./CartCard";
import { Toaster } from "react-hot-toast";
import HeroComponent from "../../icons";
import SuccessComponent from "./Success";

export const Cart = () => {
  const { cartState } = useCart();
  const [showSuccessComponent, setShowSuccessComponent] = useState(false);

  return (
    <div className="cart-container">
      <Toaster position="top-center " />
      <div className="cart-title">{!showSuccessComponent && <h1>Cart</h1>}</div>
      {showSuccessComponent ? (
        <SuccessComponent />
      ) : (
        <div
          className="cart"
          style={
            cartState.cart.length === 0 ? { justifyContent: "center" } : {}
          }
        >
          <div className="products">
            {cartState.cart.length !== 0 ? (
              cartState.cart.map((item) => (
                <CartCard item={item} key={item.id} />
              ))
            ) : (
              <div className="wishlist-hero-image">
                <HeroComponent />
                Cart is empty
              </div>
            )}
          </div>
          {cartState.cart.length !== 0 && (
            <BillingBox onCheckout={() => setShowSuccessComponent(true)} />
          )}
        </div>
      )}
    </div>
  );
};
