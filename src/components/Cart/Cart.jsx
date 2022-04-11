import React from "react";
import { useCart } from "../../context/cart-context";
import { BillingBox } from "./BillingBox";
import "./cart.css";
import { CartCard } from "./CartCard";

export const Cart = () => {
	const { cartState } = useCart();

	console.log(cartState.cart);

	return (
		<div className="cart-container">
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
