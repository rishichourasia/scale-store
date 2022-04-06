import React from "react";
import { useProduct } from "../../context/product-context";

export const Sidebar = () => {
	const { productState, productDispatch } = useProduct();
	const { categories } = productState;
	const { selfHelp, philosophy, humanpsychology, spirituality } = categories;

	const { price } = productState;

	return (
		<div className="sidebar">
			<div className="filter-title">
				<p className="aside-title">Filter</p>
				<p className="clear" onClick={() => productDispatch({ type: "CLEAR" })}>
					Clear
				</p>
			</div>
			<div className="quantity-slider">
				<p className="aside-title">Price Range : ₹{price}</p>
				<div className="slider-range">
					<span>200</span>
					<span>500</span>
					<span>1000</span>
				</div>
				<input
					type="range"
					min={200}
					max={1000}
					step={100}
					value={price}
					className="slider"
					onChange={(e) =>
						productDispatch({ type: "PRICE_SLIDER", payload: e.target.value })
					}
				/>
			</div>
			<div className="list-container">
				<p className="aside-title">Category</p>
				<ol className="list">
					<li>
						<label>
							<input
								type="checkbox"
								checked={selfHelp}
								onChange={() => productDispatch({ type: "SELF_HELP" })}
							/>
							Self-Help
						</label>
					</li>
					<li>
						<label>
							<input
								type="checkbox"
								checked={philosophy}
								onChange={() => productDispatch({ type: "PHILOSOPHY" })}
							/>
							Philosophy
						</label>
					</li>
					<li>
						<label>
							<input
								type="checkbox"
								checked={humanpsychology}
								onChange={() => productDispatch({ type: "HUMAN_PSYCHOLOGY" })}
							/>
							Human Psychology
						</label>
					</li>
					<li>
						<label>
							<input
								type="checkbox"
								checked={spirituality}
								onChange={() => productDispatch({ type: "SPIRITUALITY" })}
							/>
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
								onChange={() =>
									productDispatch({ type: "4_AND_ABOVE", payload: 4 })
								}
							/>
							4 Star and above
						</label>
					</li>
					<li>
						<label>
							<input
								type="radio"
								name="rating"
								onChange={() =>
									productDispatch({ type: "3_AND_ABOVE", payload: 3 })
								}
							/>
							3 Star and above
						</label>
					</li>
					<li>
						<label>
							<input
								type="radio"
								name="rating"
								onChange={() =>
									productDispatch({ type: "2_AND_ABOVE", payload: 2 })
								}
							/>
							2 Star and above
						</label>
					</li>
					<li>
						<label>
							<input
								type="radio"
								name="rating"
								onChange={() =>
									productDispatch({ type: "1_AND_ABOVE", payload: 1 })
								}
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
