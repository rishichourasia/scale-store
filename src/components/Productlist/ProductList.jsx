import React, { useEffect } from "react";
import { Sidebar } from "./Sidebar";
import "./productlist.css";
import { useProduct } from "../../context/product-context";
import { apiCall } from "../../utils/productlist-api-call";
import {
	priceRange,
	ratingProducts,
	sortCategory,
	sortProducts,
} from "../../utils/filters";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
	const { productState, productDispatch } = useProduct();
	const { productsList, rating, sortBy, price, categories } = productState;

	useEffect(() => {
		apiCall(productDispatch);
	}, []);

	const categoryProducts = sortCategory(productsList, categories);
	const rangedProducts = priceRange(categoryProducts, price);
	const ratedProducts = ratingProducts(rangedProducts, rating);
	const sortedProducts = sortProducts(ratedProducts, sortBy);

	return (
		<div className="main">
			<Sidebar />
			<div className="productlist">
				{sortedProducts.map((item) => (
					<ProductCard item={item} key={item.id} />
				))}
			</div>
		</div>
	);
};
