import React, { useEffect } from "react";
import { Sidebar } from "./Sidebar";
import "./productlist.css";
import { useProduct } from "../../context/product-context";
import { apiCall } from "../../utils/productlist-api-call";
import { priceRange, ratingProducts, sortProducts } from "../../utils/filters";

export const ProductList = () => {
	const { productState, productDispatch } = useProduct();
	const { productsList, rating, sortBy, price } = productState;

	useEffect(() => {
		apiCall(productDispatch);
	}, []);

	const rangedProducts = priceRange(productsList, price);
	const ratedProducts = ratingProducts(rangedProducts, rating);
	const sortedProducts = sortProducts(ratedProducts, sortBy);

	return (
		<div className="main">
			<Sidebar />
			<div className="productlist">
				{sortedProducts.map((item) => (
					<div key={item.id} className="product-card">
						<div className="card-header">
							<img className="card-img" src={item.image} alt="product-img" />
							<span className="card-highlight">Top Rated</span>
							<span className="card-icon card-hover">
								<i className="far fa-heart fa-lg" />
							</span>
						</div>
						<div className="card-body">
							<div className="card-title">
								<h2>{item.title}</h2>
								<p>{item.categoryName}</p>
								<p>Rating : {item.rating}</p>
							</div>
							<p className="card-text">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							</p>
							<div className="card-cta">
								<h2>₹{item.price}</h2>
								<button className="btn btn-primary">
									<i className="far fa-shopping-cart fa-lg" /> Buy Now
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
