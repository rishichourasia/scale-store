import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import login from "../../actions/auth";
import authHandler from "../../actions/auth";
import toast, { Toaster } from "react-hot-toast";

export const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [input, setInput] = useState({ email: "", password: "" });
  console.log("ENV--", process.env.REACT_APP_JWT_SECRET);
  return (
    <div className="login-container">
      <Toaster position="top-center " />
      <p className="title">Login</p>
      <div className="input-div">
        <label>Email</label>
        <input
          className="input"
          type="text"
          value={input.email}
          placeholder="Enter Email"
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
      </div>
      <div className="input-div">
        <label>Password</label>
        <input
          className="input"
          type="password"
          placeholder="Enter Password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          authHandler(navigate, setAuth, input, "login", toast);
        }}
      >
        Login
      </button>
      <button
        className="btn btn-primary-outlined"
        onClick={() => {
          setInput({
            email: "testuser@gmail.com",
            password: "test",
          });
          authHandler(
            navigate,
            setAuth,
            {
              email: "testuser@gmail.com",
              password: "test",
            },
            "login",
            toast
          );
        }}
      >
        Login as guest user
      </button>

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
