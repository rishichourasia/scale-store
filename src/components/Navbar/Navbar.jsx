import React from "react";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      {/* navbar  */}
      <header className="nav fixed">
        <div className="menu-logo">
          <div className="menu-btn">
            <Link to="/">
              <img
                className="logo-svg"
                src="/assests/logo/logo simple dark.svg"
                alt="logo-svg"
              />
            </Link>
          </div>
        </div>
        <div className="nav-cta">
          <Link to="/wishlist">
            <div className="hover">
              <i className="far fa-heart fa-lg" />
            </div>
          </Link>
          <Link to="/cart">
            <div className="hover">
              <i className="far fa-shopping-cart fa-lg" />
            </div>
          </Link>
          <div className="hover">
            <i className="fas is-dark fa-sign-out-alt fa-lg" />
          </div>
          <Link to="/login">
            <button className="btn  btn-primary-outlined">Login</button>
          </Link>
        </div>
      </header>
      {/* navbar */}
    </>
  );
};
