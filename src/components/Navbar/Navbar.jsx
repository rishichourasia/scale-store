import React from "react";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<>
			{/* navbar  */}
			<header className="nav fixed">
				<div className="menu-logo">
					<div className="menu-btn">
						<a href="/">
							<img
								className="logo-svg"
								src="/assests/logo/logo simple dark.svg"
								alt="logo-svg"
							/>
						</a>
					</div>
				</div>
				<div className="nav-links">
					<a href="/components/wishlist.html">
						<div className="hover">
							<i className="far fa-heart fa-lg" />
						</div>
					</a>
					<a href="/components/cart.html">
						<div className="hover">
							<i className="far fa-shopping-cart fa-lg" />
						</div>
					</a>
					<a href="/">
						<div className="hover">
							<i className="fas is-dark fa-sign-out-alt fa-lg" />
						</div>
					</a>
				</div>
				<div className="nav-btn">
					<a href="/components/login.html">
						<button className="btn btn-primary">Login</button>
					</a>
					<a href="/components/signup.html">
						<button className="btn btn-primary-outlined">Signup</button>
					</a>
				</div>
			</header>
			{/* navbar */}
		</>
	);
};
