import React, { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import "./productlist.css";
import axios from "axios";

export const ProductList = () => {
	const [productList, setProductList] = useState([]);

	useEffect(() => {
		axios.get("/api/products").then((res) => {
			const data = res.data.products;
			console.log(data);
			setProductList(data);
		});
	}, []);

	return (
		<div className="main">
			<Sidebar />
			<div className="productlist">
				{productList.map((item) => (
					<div className="product-card">
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
							</div>
							<p className="card-text">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							</p>
							<div className="card-cta">
								<h2>{item.price}</h2>
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
