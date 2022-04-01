import React from "react";

export const Sidebar = () => {
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
							<input type="radio" name="rating" />4 Star and above
						</label>
					</li>
					<li>
						<label>
							<input type="radio" name="rating" />3 Star and above
						</label>
					</li>
					<li>
						<label>
							<input type="radio" name="rating" />2 Star and above
						</label>
					</li>
					<li>
						<label>
							<input type="radio" name="rating" />1 Star and above
						</label>
					</li>
				</ol>
			</div>
			<div className="list-container">
				<p className="aside-title">Sort By</p>
				<ol className="list">
					<li>
						<label>
							<input type="radio" name="sort" />
							Price high to low
						</label>
					</li>
					<li>
						<label>
							<input type="radio" name="sort" />
							Price low to high
						</label>
					</li>
				</ol>
			</div>
		</div>
	);
};
