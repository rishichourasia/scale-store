import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/Homepage/HomePage";
import { ProductList } from "./components/Productlist/ProductList";
import { Cart } from "./components/Cart/Cart";
import { Wishlist } from "./components/Wishlist/Wishlist";
import { Login } from "./components/Login/Login";
import { Signup } from "./components/Signup/Signup";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<h1>Hello Ecommerce</h1>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/productlist" element={<ProductList />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/wishlist" element={<Wishlist />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
