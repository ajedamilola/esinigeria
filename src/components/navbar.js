import { Link } from "gatsby";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-fade navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand">ESI Nigeria</a>
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
              <Link to="/" className="nav-link">
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
      </div>
    </nav>
  );
}
