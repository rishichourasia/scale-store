import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductProvider } from "./context/product-context";
import { WishlistProvider } from "./context/wishlist-context";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<WishlistProvider>
			<ProductProvider>
				<App />
			</ProductProvider>
		</WishlistProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
