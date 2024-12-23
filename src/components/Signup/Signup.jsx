import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import authHandler from "../../actions/auth";
import { useAuth } from "../../context/auth-context";
import { Toaster } from "react-hot-toast";

export const Signup = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [acceptTerms, setAcceptTerms] = useState(false);

  const signupHandler = async () => {
    if (input.password !== input.confirmPassword) {
      return;
    }
    console.log("accepted");

    await authHandler(navigate, setAuth, input, "signup");
  };
  return (
    <div className="login-container">
      <Toaster position="top-center " />
      <p className="title">Signup</p>
      <div className="input-div">
        <label>First Name</label>
        <input
          className="input"
          type="text"
          autoComplete="nope"
          onChange={(e) => setInput({ ...input, firstName: e.target.value })}
        />
      </div>
      <div className="input-div">
        <label>Last Name</label>
        <input
          className="input"
          type="text"
          autoComplete="nope"
          onChange={(e) => setInput({ ...input, lastName: e.target.value })}
        />
      </div>
      <div className="input-div">
        <label>Email</label>
        <input
          className="input"
          type="text"
          autoComplete="nope"
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
      </div>
      <div className="input-div">
        <label>Password</label>
        <input
          className="input"
          type="password"
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
      </div>
      <div className="input-div">
        <label>Confirm Password</label>
        <input
          className="input"
          type="password"
          onChange={(e) =>
            setInput({ ...input, confirmPassword: e.target.value })
          }
        />
      </div>
      <label className="label">
        <input
          type="checkbox"
          name="label"
          id=""
          checked={acceptTerms}
          onChange={() => setAcceptTerms((prev) => !prev)}
        />{" "}
        Accept all terms and coundition
      </label>
      <button
        className="btn btn-primary disabled"
        onClick={signupHandler}
        disabled={!acceptTerms}
      >
        Create new account
      </button>
      <div className="signup-cta">
        <p>
          Already have an account?
          <Link to="/login">
            <span>Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};
