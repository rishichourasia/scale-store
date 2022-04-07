import React from "react";
import { useWishlist } from "../../context/wishlist-context";

export const ProductCard = ({ item }) => {
	const { wishlistState, wishlistDispatch } = useWishlist();
	console.log(wishlistState);

	const { id, image, title, categoryName, rating, price } = item;
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
					<button className="btn btn-primary">
						<i className="far fa-shopping-cart fa-lg" /> Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};
