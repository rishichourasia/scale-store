import React from "react";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { wishlistMoveClickHandler } from "../../utils/wishlist-cart-clickHandler";
// import { wishlistClickHandler } from "../../utils/wishlist-cart-clickHandler";

export const CartCard = ({ item }) => {
	const { id, image, title, categoryName, price, quantity } = item;
	const { cartDispatch } = useCart();
	const { wishlistState, wishlistDispatch } = useWishlist();

	return (
		<div key={id} className="cart-card">
			<div className="cart-header">
				<img className="cart-img" src={image} alt="product-img" />
				<span className="card-highlight">Top Rated</span>
			</div>
			<div className="cart-body">
				<div className="card-title">
					<h2>{title}</h2>
					<p>{categoryName}</p>
				</div>
				<div className="quantity-div">
					<button
						onClick={() =>
							cartDispatch({ type: "DECREASE_QTY", payload: item })
						}
						className="qty-btn btn btn-primary"
					>
						-
					</button>
					<button className="quantity">{quantity}</button>
					<button
						onClick={() =>
							cartDispatch({ type: "INCREASE_QTY", payload: item })
						}
						className="qty-btn  btn btn-primary"
					>
						+
					</button>
				</div>
				<div className="card-cta">
					<h2>₹{price}</h2>
					<button
						onClick={() =>
							wishlistMoveClickHandler(
								wishlistState,
								wishlistDispatch,
								cartDispatch,
								item
							)
						}
						className="btn btn-primary"
					>
						<i className="far fa-heart fa-lg" /> Move to Wishlist
					</button>
					<button
						className="btn btn-primary-outlined"
						onClick={() =>
							cartDispatch({ type: "REMOVE_FROM_CART", payload: id })
						}
					>
						Remove from Cart
					</button>
				</div>
			</div>
		</div>
	);
};
