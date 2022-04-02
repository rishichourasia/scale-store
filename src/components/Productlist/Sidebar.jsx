import React from "react";
import { useProduct } from "../../context/product-context";

export const Sidebar = () => {
	const { productState, productDispatch } = useProduct();

	return (
		<div className="sidebar">
			<div className="filter-title">
				<p className="aside-title">Filter</p>
				<a href="#">Clear</a>
			</div>
			<div className="quantity-slider">
				<p className="aside-title">Price Range</p>
				<div className="slider-range">
					<span>50</span>
					<span>150</span>
					<span>200</span>
				</div>
				<input type="range" min={1} max={200} className="slider" />
			</div>
			<div className="list-container">
				<p className="aside-title">Category</p>
				<ol className="list">
					<li>
						<label>
							<input type="checkbox" />
							Self-Help
						</label>
					</li>
					<li>
						<label>
							<input type="checkbox" />
							Psychology
						</label>
					</li>
					<li>
						<label>
							<input type="checkbox" />
							Human Behaviours
						</label>
					</li>
					<li>
						<label>
							<input type="checkbox" />
							Spirituality
						</label>
					</li>
				</ol>
			</div>
			<div className="list-container">
				<p className="aside-title">Rating</p>
				<ol className="list">
					<li>
						<label>
							<input
								type="radio"
								name="rating"
								onChange={() => productDispatch({ type: 4 })}
							/>
							4 Star and above
						</label>
					</li>
					<li>
						<label>
							<input
								type="radio"
								name="rating"
								onChange={() => productDispatch({ type: 3 })}
							/>
							3 Star and above
						</label>
					</li>
					<li>
						<label>
							<input
								type="radio"
								name="rating"
								onChange={() => productDispatch({ type: 2 })}
							/>
							2 Star and above
						</label>
					</li>
					<li>
						<label>
							<input
								type="radio"
								name="rating"
								onChange={() => productDispatch({ type: 1 })}
							/>
							1 Star and above
						</label>
					</li>
				</ol>
			</div>
			<div className="list-container">
				<p className="aside-title">Sort By</p>
				<ol className="list">
					<li>
						<label>
							<input
								type="radio"
								name="sort"
								onChange={() => productDispatch({ type: "HIGH_TO_LOW" })}
							/>
							Price High to low
						</label>
					</li>
					<li>
						<label>
							<input
								type="radio"
								name="sort"
								onChange={() => productDispatch({ type: "LOW_TO_HIGH" })}
							/>
							Price Low to high
						</label>
					</li>
				</ol>
			</div>
		</div>
	);
};
