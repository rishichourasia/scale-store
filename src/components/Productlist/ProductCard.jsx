import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import {
	cartClickHandler,
	wishlistClickHandler,
} from "../../utils/wishlist-cart-clickHandler";

export const ProductCard = ({ item }) => {
	const { wishlistState, wishlistDispatch } = useWishlist();
	const { cartState, cartDispatch } = useCart();
	const { id, image, title, categoryName, rating, price } = item;

	return (
		<div key={id} className="product-card">
			<div className="card-header">
				<img className="card-img" src={image} alt="product-img" />
				<span className="card-highlight">Top Rated</span>
				<span
					onClick={() =>
						wishlistClickHandler(wishlistState, wishlistDispatch, item)
					}
					className="card-icon card-hover wish-hover"
				>
					{wishlistState.wishlist.some((product) => product.id === item.id) ? (
						<i className="fas fa-heart fa-lg click" />
					) : (
						<i className="fas fa-heart fa-lg wait" />
					)}
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
							onClick={() => cartClickHandler(cartState, cartDispatch, item)}
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
