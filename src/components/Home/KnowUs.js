import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Helmet from "react-helmet";
import Container from "../Container";

export default function About() {
  return (
    <div className="about-home d-flex align-items-center">
      <Container>
        <h2 className="grad">About Us</h2>
        <div className="row align-items-center">
          <div className="col">
            <p>
            ESI, Nigeria is a brand with a global perspective, which focuses on information technology services and products. ESI was borne out of the desire to create an indigenous brand that will meet the I.T needs of organizations and individuals both locally and globally by providing first class services, products and innovations while....
            </p>
          </div>
          <div className="col-4 d-none d-md-block">
            <StaticImage src="../../images/logo.png" />
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
                <Link className="dropdown-item" to="/about#profile">Company Profile</Link>
                <Link className="dropdown-item" to="/about#history">Company History</Link>
            </menu>
          </div>
        </div>
      </Container>
    </div>
  );
}
