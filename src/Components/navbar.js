import { Link,useStaticQuery,graphql } from "gatsby";
import React from "react";
import Container from "../Components/Container";
import { FaPhone } from "@react-icons/all-files/fa/FaPhone";
import { IoMdMail } from "@react-icons/all-files/io/IoMdMail";

export default function Navbar({ filled = false }) {
  const data = useStaticQuery(graphql`
  {
    site{
      siteMetadata{
        email
        phone
      }
    }
  }`)
  const {email,phone} = data.site.siteMetadata;
  return (
    <div
      className={`${filled ? "grad-bg text-primary" : "bg-fade navbar-dark"}`}
    >
      <div className="text-start pre-nav py-1 px-2 px-md-3 px-lg-4 px-xl-5">
        <Link to={"tel:"+phone}>
          <small className="mx-2 text-white">
            <FaPhone className="mx-2" />
            {phone}
          </small>
        </Link>

        <Link to={"mailto:"+email}>
          <small className="mx-2 text-white">
            <IoMdMail className="mx-2" />
            {email}
          </small>
        </Link>
      </div>
      <nav
        className={`navbar navbar-dark  navbar-expand-lg justify-self-start`}
      >
        <Container>
          <Link className="navbar-brand" to="/">ESI Nigeria</Link>
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
                <Link to="/contact">
                  <button
                    className={`btn ${
                      filled ? "btn-light" : "btn-outline-primary"
                    } rounded-pill`}
                  >
                    Contact us
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </div>
  );
}
