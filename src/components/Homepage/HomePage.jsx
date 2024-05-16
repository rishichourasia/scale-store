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
          <p>
            Transform your personal wellbeing with{" "}
            <span className="highlight-text">self-help</span> books
          </p>
          <Link to="/productlist">
            <button
              className="btn btn-primary home-btn"
              style={{ width: "120px", height: "35px", marginTop: "20px" }}
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, alias, officia dicta nihil fugiat eum tempora.
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, alias, officia dicta nihil fugiat eum tempora.
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
