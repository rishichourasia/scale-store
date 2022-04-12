import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./context/cart-context";
import { ProductProvider } from "./context/product-context";
import { WishlistProvider } from "./context/wishlist-context";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<CartProvider>
			<WishlistProvider>
				<ProductProvider>
					<App />
				</ProductProvider>
			</WishlistProvider>
		</CartProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
