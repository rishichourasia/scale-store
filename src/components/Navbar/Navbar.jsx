import React from "react";
import "../../styles/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { getUser } from "../../utils/helpers";

export const Navbar = () => {
  const { isAuth, setAuth } = useAuth();
  const navigate = useNavigate();
  const user = getUser();
  const handleLogout = () => {
    localStorage.removeItem("store-token");
    localStorage.removeItem("store-user");
    setAuth(false);
    navigate("/");
  };

  return (
    <>
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

          {!isAuth ? (
            <Link to="/login">
              <button className="btn  btn-primary-outlined">Sign in</button>
            </Link>
          ) : (
            <React.Fragment>
              <div className="hover">
                <i className="far fa-user fa-thin fa-lg" />
              </div>
              <p>{user?.firstName}</p>

              <button
                className="btn  btn-primary-outlined"
                onClick={handleLogout}
              >
                Logout
              </button>
            </React.Fragment>
          )}
        </div>
      </header>
    </>
  );
};
