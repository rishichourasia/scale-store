import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
import HeroComponent from "../../icons";

const HomePage = () => {
  return (
    <>
      {/* <div className="img-container">
				<img
					className="homepage-img"
					src="/assests/pictures/homepage-img-cropped.jpg"
					alt="home-img"
				/>
				<div className="image-text-overlay">
					<div className="img-text">
						<h3>Enrich your spiritual wellbeing with self-help books.</h3>
					</div>
					<Link to="/productlist">
						<button className="btn btn-primary">View Books</button>
					</Link>
				</div>
			</div> */}
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
