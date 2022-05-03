import { Link } from "gatsby";
import React from "react";
import Container from "../components/Container";

export default function Navbar({filled=false}) {
  return (
      <nav className={`navbar navbar-dark ${filled?"bg-dark":"bg-fade"} navbar-expand-lg justify-self-start`}>
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
                <Link to="/about" className="nav-link">
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
