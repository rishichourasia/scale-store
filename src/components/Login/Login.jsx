import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export const Login = () => {
	return (
		<div className="login-container">
			<p className="title">Login</p>
			<div className="input-div">
				<label>Email</label>
				<input
					className="input"
					type="text"
					autoComplete="nope"
					placeholder="Enter Email"
				/>
			</div>
			<div className="input-div">
				<label>Password</label>
				<input className="input" type="password" placeholder="Enter Password" />
			</div>
			<label className="label">
				<input type="checkbox" name="label" id="" /> Remember me
			</label>
			<button className="btn btn-primary">Login</button>
			<div className="signup-cta">
				<p>
					Don't have an account?
					<Link to="/signup">
						<span>Signup</span>
					</Link>
				</p>
			</div>
		</div>
	);
};
