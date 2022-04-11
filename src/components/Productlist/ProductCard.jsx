import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";

export const ProductCard = ({ item }) => {
	const { wishlistDispatch } = useWishlist();
	const { cartState, cartDispatch } = useCart();
	const { id, image, title, categoryName, rating, price } = item;

	const cartClickHandler = (itemId) => {
		if (cartState.cart.some((item) => item.id === itemId)) {
			cartDispatch({ type: "INCREASE_QTY", payload: item });
			console.log("Increase");
		} else {
			cartDispatch({ type: "ADD_TO_CART", payload: item });
			console.log("ADD");
		}
	};

	return (
		<div key={id} className="product-card">
			<div className="card-header">
				<img className="card-img" src={image} alt="product-img" />
				<span className="card-highlight">Top Rated</span>
				<span
					onClick={() =>
						wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: item })
					}
					className="card-icon card-hover"
				>
					<i className="far fa-heart fa-lg" />
				</span>
			</div>
			<div className="card-body">
				<div className="card-title">
					<h2>{title}</h2>
					<p>{categoryName}</p>
					<p>Rating : {rating}</p>
				</div>
				<p className="card-text">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				</p>
				<div className="card-cta">
					<h2>₹{price}</h2>
					{cartState.cart.some((item) => item.id === id) ? (
						<Link to="/cart">
							<button className="btn btn-primary goto">
								<i className="far fa-shopping-cart fa-lg" /> Go to Cart
							</button>
						</Link>
					) : (
						<button
							onClick={() => cartClickHandler(id)}
							className="btn btn-primary"
						>
							<i className="far fa-shopping-cart fa-lg" /> Add to Cart
						</button>
					)}
				</div>
			</div>
		</div>
	);
};
