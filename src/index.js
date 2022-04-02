import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductProvider } from "./context/product-context";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<ProductProvider>
			<App />
		</ProductProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
