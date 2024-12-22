import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
import HeroComponent from "../../icons";
import { useAuth } from "../../context/auth-context";
import { useProduct } from "../../context/product-context";

const HomePage = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-title">
          <p className="title-text">
            Unlock Your Potential - Curated{" "}
            <span className="highlight-text">self-help</span> Books for Every
            Journey.
          </p>
          <Link to="/productlist">
            <button
              className="btn btn-primary home-btn"
              style={{
                width: "120px",
                height: "40px",
                marginTop: "20px",
                fontWeight: 600,
              }}
            >
              Buy Now
            </button>
          </Link>
        </div>
        <div className="hero-image">
          <HeroComponent />
        </div>
      </div>
      <div className="desc-container">
        <div className="feature">
          <div className="feature-head">
            <img src="/assests/pictures/icons8-care-100.png" alt="vector-img" />
          </div>
          <div className="feature-body">
            <p className="feature-title">Handpicked Books</p>
            <p className="feature-desc">
              Curated selections tailored to your taste. Start exploring today.
            </p>
            <Link to="/productlist">
              <button className="btn btn-primary-outlined">View Books</button>
            </Link>
          </div>
        </div>
        <div className="feature">
          <div className="feature-head">
            <img
              src="/assests/pictures/icons8-books-100.png"
              alt="vector-img"
            />
          </div>
          <div className="feature-body">
            <p className="feature-title">Original Print</p>
            <p className="feature-desc">
              Your Trusted Source for Authentic Publisher Books
            </p>
            <Link to="/productlist">
              <button className="btn btn-primary-outlined">View Books</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export { HomePage };
