import React from "react";
import { useWishlist } from "../../context/wishlist-context";
import "./wishlist.css";

export const Wishlist = () => {
	const { wishlistState, wishlistDispatch } = useWishlist();
	console.log(wishlistState);

	return (
		<div class="wishlist">
			<div class="title">
				<h1>Wishlist</h1>
			</div>
			<div class="wishlist-item">
				{wishlistState.wishlist.map((item) => (
					<div class="product-card">
						<div class="card-header">
							<img class="card-img" src={item.image} alt="product-img" />
							<span class="card-highlight">Top Rated</span>
						</div>
						<div class="card-body">
							<div class="card-title">
								<h2>{item.title}</h2>
								<p>{item.categories}</p>
							</div>
							<p class="card-text">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							</p>

							<div class="card-cta">
								<h2>₹{item.price}</h2>
								<button class="btn btn-primary">
									<i class="far fa-shopping-cart fa-lg"></i> Add to cart
								</button>
								<button
									onClick={() =>
										wishlistDispatch({
											type: "REMOVE_FROM_WISHLIST",
											payload: item.id,
										})
									}
									class="btn btn-primary-outlined"
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
