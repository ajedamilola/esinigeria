import { Link } from "gatsby";
import React from "react";
import Container from "../components/Container";

const loadAnim = (
  <div className="fixed-top">
    <div
      className="progress-bar progress-bar-striped progress progress-bar-animated"
      style={{ height: 10 }}
    ></div>
  </div>
);
export default function Navbar() {
  return (
      <nav className="navbar navbar-dark bg-fade navbar-expand-lg justify-self-start">
        <Container>
          <Link className="navbar-brand">ESI Nigeria</Link>
          <button
            className="navbar-toggler"
            data-bs-target="#top-navigation"
            data-bs-toggle="collapse"
          >
            <i className="navbar-toggler-icon"></i>
          </button>
          <div className="collapse navbar-collapse" id="top-navigation">
            <ul className="nav navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-primary rounded-pill">
                  Contact us
                </button>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
  );
}
