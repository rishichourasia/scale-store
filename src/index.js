import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./context/cart-context";
import { ProductProvider } from "./context/product-context";
import { WishlistProvider } from "./context/wishlist-context";
import { makeServer } from "./server";
import { AuthProvider } from "./context/auth-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
