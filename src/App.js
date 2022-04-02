import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
	HomePage,
	ProductList,
	Cart,
	Wishlist,
	Login,
	Signup,
	Navbar,
} from "./components/components.jsx";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
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
