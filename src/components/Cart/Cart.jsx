import React from "react";
import "./cart.css";

export const Cart = () => {
	return (
		<div className="cart-container">
			<div className="cart-title">
				<h1>Cart</h1>
			</div>
			<div className="cart">
				<div className="products">
					<div className="cart-card">
						<div className="card-header">
							<img
								className="cart-img"
								src="/assests/pictures/sapiens.png"
								alt="product-img"
							/>
							<span className="card-highlight">Top Rated</span>
						</div>
						<div className="card-body">
							<div className="card-title">
								<h2>Sapiens</h2>
								<p>Yuval Noah Harari</p>
							</div>
							<div className="card-cta">
								<h2>$50</h2>
								<button className="btn btn-primary">
									<i className="far fa-heart fa-lg" /> Move to Wishlist
								</button>
								<button className="btn btn-primary-outlined">
									Remove from Cart
								</button>
							</div>
						</div>
					</div>
					<div className="cart-card">
						<div className="card-header">
							<img
								className="cart-img"
								src="/assests/pictures/habits.jpg"
								alt="product-img"
							/>
							<span className="card-highlight">Top Rated</span>
						</div>
						<div className="card-body">
							<div className="card-title">
								<h2>Atomic Habits</h2>
								<p>James Clear</p>
							</div>
							<div className="card-cta">
								<h2>$150</h2>
								<button className="btn btn-primary">
									<i className="far fa-heart fa-lg" /> Move to Wishlist
								</button>
								<button className="btn btn-primary-outlined">
									Remove from Cart
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="billing">
					<div className="bill-title">
						<h2>Your Order</h2>
					</div>
					<div className="bill-details">
						<p>Item 1</p>
						<p>$50</p>
					</div>
					<div className="bill-details">
						<p>Item 2</p>
						<p>$150</p>
					</div>
					<div className="bill-details">
						<p>Delievery Charges</p>
						<p>$30</p>
					</div>
					<div className="bill-details">
						<p>Discount</p>
						<p>-20$</p>
					</div>
					<div className="total-bill">
						<p>Grand Total</p>
						<p>$210</p>
					</div>
					<p className="strong">You will save $30 on this order</p>
					<button className="btn btn-primary">Checkout</button>
				</div>
			</div>
		</div>
	);
};
