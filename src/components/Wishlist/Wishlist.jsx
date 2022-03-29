import React from "react";
import "./wishlist.css";

export const Wishlist = () => {
	return (
		<div class="wishlist">
			<div class="title">
				<h1>Wishlist</h1>
			</div>
			<div class="wishlist">
				<div class="product-card">
					<div class="card-header">
						<img
							class="card-img"
							src="/assests/pictures/jordan.png"
							alt="product-img"
						/>
						<span class="card-highlight">Top Rated</span>
					</div>
					<div class="card-body">
						<div class="card-title">
							<h2>12 Rules for life</h2>
							<p>Self-help</p>
						</div>
						<p class="card-text">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						</p>

						<div class="card-cta">
							<h2>$50</h2>
							<button class="btn btn-primary">
								<i class="far fa-shopping-cart fa-lg"></i> Add to cart
							</button>
							<button class="btn btn-primary-outlined">
								Remove from Wishlist
							</button>
						</div>
					</div>
				</div>
				<div class="product-card">
					<div class="card-header">
						<img
							class="card-img"
							src="/assests/pictures/habits.jpg"
							alt="product-img"
						/>
						<span class="card-highlight">Top Rated</span>
					</div>
					<div class="card-body">
						<div class="card-title">
							<h2>Atomic Habits</h2>
							<p>Self-help</p>
						</div>
						<p class="card-text">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						</p>

						<div class="card-cta">
							<h2>$50</h2>
							<button class="btn btn-primary">
								<i class="far fa-shopping-cart fa-lg"></i> Add to cart
							</button>
							<button class="btn btn-primary-outlined">
								Remove from Wishlist
							</button>
						</div>
					</div>
				</div>
				<div class="product-card">
					<div class="card-header">
						<img
							class="card-img"
							src="/assests/pictures/behave.jpg"
							alt="product-img"
						/>
						<span class="card-highlight">Top Rated</span>
					</div>
					<div class="card-body">
						<div class="card-title">
							<h2>Behave</h2>
							<p>Self-help</p>
						</div>
						<p class="card-text">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						</p>

						<div class="card-cta">
							<h2>$50</h2>
							<button class="btn btn-primary">
								<i class="far fa-shopping-cart fa-lg"></i> Add to cart
							</button>
							<button class="btn btn-primary-outlined">
								Remove from Wishlist
							</button>
						</div>
					</div>
				</div>
				<div class="product-card">
					<div class="card-header">
						<img
							class="card-img"
							src="/assests/pictures/naval.png"
							alt="product-img"
						/>
						<span class="card-highlight">Top Rated</span>
					</div>
					<div class="card-body">
						<div class="card-title">
							<h2>Naval Ravikant</h2>
							<p>Self-help</p>
						</div>
						<p class="card-text">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						</p>

						<div class="card-cta">
							<h2>$50</h2>
							<button class="btn btn-primary">
								<i class="far fa-shopping-cart fa-lg"></i> Add to cart
							</button>
							<button class="btn btn-primary-outlined">
								Remove from Wishlist
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
