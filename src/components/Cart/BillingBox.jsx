import React from "react";
import { useCart } from "../../context/cart-context";

export const BillingBox = () => {
	const { cartState } = useCart();

	const subTotal = cartState.cart.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);
	const discount = cartState.cart.length > 0 ? 50 : 0;
	const delievery = cartState.cart.length > 0 ? 30 : 0;
	const grandTotal = subTotal + delievery - discount;

	return (
		<div className="billing">
			<div className="bill-title">
				<h2>Your Order</h2>
			</div>
			<div className="bill-details">
				<p>Items in your cart</p>
				<p>{cartState.cart.length}</p>
			</div>
			<div className="bill-details">
				<p>Sub-Total</p>
				<p>₹{subTotal}</p>
			</div>
			<div className="bill-details">
				<p>Delievery Charges</p>
				<p>₹{delievery}</p>
			</div>
			<div className="bill-details">
				<p>Discount</p>
				<p>
					<span className="discount">-₹{discount}</span>
				</p>
			</div>
			<div className="total-bill">
				<p>Grand Total</p>
				<p>₹{grandTotal}</p>
			</div>
			<p className="strong">You will save ₹20 on this order</p>
			<button className="btn btn-primary">Checkout</button>
		</div>
	);
};
