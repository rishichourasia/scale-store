import React from "react";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { cartClickHandler } from "../../utils/wishlist-cart-clickHandler";
import "./wishlist.css";

export const Wishlist = () => {
	const { wishlistState, wishlistDispatch } = useWishlist();
	const { cartState, cartDispatch } = useCart();

	return (
		<div className="wishlist">
			<div className="title">
				<h1>Wishlist</h1>
			</div>
			<div className="wishlist-item">
				{wishlistState.wishlist.map((item) => (
					<div key={item.id} className="product-card">
						<div className="card-header">
							<img className="card-img" src={item.image} alt="product-img" />
							<span className="card-highlight">Top Rated</span>
						</div>
						<div className="card-body">
							<div className="card-title">
								<h2>{item.title}</h2>
								<p>{item.categoryName}</p>
							</div>
							<p className="card-text">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							</p>
							<div className="card-cta">
								<h2>₹{item.price}</h2>
								<button
									className="btn btn-primary"
									onClick={() =>
										cartClickHandler(cartState, cartDispatch, item)
									}
								>
									<i className="far fa-shopping-cart fa-lg"></i> Add to cart
								</button>
								<button
									onClick={() =>
										wishlistDispatch({
											type: "REMOVE_FROM_WISHLIST",
											payload: item.id,
										})
									}
									className="btn btn-primary-outlined"
								>
									Remove from Wishlist
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
