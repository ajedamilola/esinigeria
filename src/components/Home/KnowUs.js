import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Helmet from "react-helmet";

export default function About() {
  return (
    <div className="about-home d-flex align-items-center">
      <div className="container">
        <h2 className="grad">About Us</h2>
        <div className="row align-items-center">
          <div className="col">
            <p>
              Incididunt duis esse tempor eiusmod adipisicing do labore enim
              proident amet est sint. Tempor officia minim duis ad magna Lorem
              sint fugiat non in. Dolore voluptate duis est anim. Tempor laboris
              quis aute dolor laboris quis ut labore. Incididunt deserunt
              excepteur eu eiusmod sit id culpa nisi. Nostrud nostrud non
              commodo ea id adipisicing est et non aute exercitation ex fugiat
              ullamco. Cillum culpa magna exercitation voluptate adipisicing
              commodo consequat ad quis sint ut do.
            </p>
          </div>
          <div className="col-3 d-none d-md-block">
            <StaticImage src="../../images/icon.png" />
          </div>
        </div>
        <div className="row align-items-start" style={{ width: "fit-content" }}>
          <div className="col">
            <button
              className="btn btn-outline-primary mx-auto dropdown-toggle"
              data-bs-target="#sub-about-menu"
              data-bs-toggle="collapse"
              id="btn"
            >
              See All
            </button>
          </div>
          <div className="col">
            <menu className="collapse" id="sub-about-menu">
                <Link className="dropdown-item" to="/">Company Profile</Link>
                <Link className="dropdown-item" to="/">Company History</Link>
                <Link className="dropdown-item" to="/">Popular Clients</Link>
            </menu>
          </div>
        </div>
      </div>
    </div>
  );
}
