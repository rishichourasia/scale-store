import React from "react";
import { Sidebar } from "./Sidebar";
import "./productlist.css";

export const ProductList = () => {
	return (
		<div className="main">
			<Sidebar />
			<div className="productlist">
				<div className="product-card">
					<div className="card-header">
						<img
							className="card-img"
							src="/assests/pictures/sapiens.png"
							alt="product-img"
						/>
						<span className="card-highlight">Top Rated</span>
						<span className="card-icon card-hover">
							<i className="far fa-heart fa-lg" />
						</span>
					</div>
					<div className="card-body">
						<div className="card-title">
							<h2>Sapiens</h2>
							<p>Self-help</p>
						</div>
						<p className="card-text">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						</p>
						<div className="card-cta">
							<h2>$50</h2>
							<button className="btn btn-primary">
								<i className="far fa-shopping-cart fa-lg" /> Buy Now
							</button>
						</div>
					</div>
				</div>
				<div className="product-card">
					<div className="card-header">
						<img
							className="card-img"
							src="/assests/pictures/behave.jpg"
							alt="product-img"
						/>
						<span className="card-highlight">Top Rated</span>
						<span className="card-icon card-hover">
							<i className="far fa-heart fa-lg" />
						</span>
					</div>
					<div className="card-body">
						<div className="card-title">
							<h2>Behave</h2>
							<p>Human Psychology</p>
						</div>
						<p className="card-text">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						</p>
						<div className="card-cta">
							<h2>$50</h2>
							<button className="btn btn-primary">
								<i className="far fa-shopping-cart fa-lg" /> Buy Now
							</button>
						</div>
					</div>
				</div>
				<div className="product-card">
					<div className="card-header">
						<img
							className="card-img"
							src="/assests/pictures/habits.jpg"
							alt="product-img"
						/>
						<span className="card-highlight">Top Rated</span>
						<span className="card-icon card-hover">
							<i className="far fa-heart fa-lg" />
						</span>
					</div>
					<div className="card-body">
						<div className="card-title">
							<h2>Atomic Habits</h2>
							<p>Self-help</p>
						</div>
						<p className="card-text">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						</p>
						<div className="card-cta">
							<h2>$50</h2>
							<button className="btn btn-primary">
								<i className="far fa-shopping-cart fa-lg" /> Buy Now
							</button>
						</div>
					</div>
				</div>
				<div className="product-card">
					<div className="card-header">
						<img
							className="card-img"
							src="/assests/pictures/naval.png"
							alt="product-img"
						/>
						<span className="card-highlight">Top Rated</span>
						<span className="card-icon card-hover">
							<i className="far fa-heart fa-lg" />
						</span>
					</div>
					<div className="card-body">
						<div className="card-title">
							<h2>Almanac of Naval Ravikant</h2>
							<p>Self-help</p>
						</div>
						<p className="card-text">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						</p>
						<div className="card-cta">
							<h2>$50</h2>
							<button className="btn btn-primary">
								<i className="far fa-shopping-cart fa-lg" /> Buy Now
							</button>
						</div>
					</div>
				</div>
				<div className="product-card">
					<div className="card-header">
						<img
							className="card-img"
							src="/assests/pictures/thinking.jpg"
							alt="product-img"
						/>
						<span className="card-highlight">Top Rated</span>
						<span className="card-icon card-hover">
							<i className="far fa-heart fa-lg" />
						</span>
					</div>
					<div className="card-body">
						<div className="card-title">
							<h2>Thinking Fast and slow</h2>
							<p>Self-help</p>
						</div>
						<p className="card-text">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						</p>
						<div className="card-cta">
							<h2>$50</h2>
							<button className="btn btn-primary">
								<i className="far fa-shopping-cart fa-lg" /> Buy Now
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
