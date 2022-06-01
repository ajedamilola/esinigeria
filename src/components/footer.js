import { graphql, Link, useStaticQuery } from "gatsby";
import { IoLocation as Point } from "@react-icons/all-files/io5/IoLocation";
import { FaPhone as Phone } from "@react-icons/all-files/fa/FaPhone";
import { IoMail as Mail } from "@react-icons/all-files/io5/IoMail";
import { IoLogoWhatsapp as W } from "@react-icons/all-files/io5/IoLogoWhatsapp";
import { IoLogoFacebook as F } from "@react-icons/all-files/io5/IoLogoFacebook";
import { IoLogoInstagram as I } from "@react-icons/all-files/io5/IoLogoInstagram";
import Container from "./Container";
import React from "react";

export default function Footer() {
  const data = useStaticQuery(graphql`
    {
      site(siteMetadata: {}) {
        siteMetadata {
          title
          description
          siteUrl
          phone
          email
          address
        }
      }
    }
  `)
  const {address,title,email,phone} = data.site.siteMetadata;
  return (
    <footer className="bg-dark text-light pt-5">
      <Container>
        <div className="row align-items-center gy-4">
          <div className="col-12 col-md-6">
            <Link className="navbar-brand">ESI Nigeria</Link>
            <p>
                {title}
            </p>
            <address className="py-2">
              <Point /> {address}
              <br />
              <Phone /> {phone}, <Mail />
              {email}
            </address>
          </div>
          <div className="col-12 col-md-6 text-center text-lg-end">
                <Link className="text-white px-1">
                  <W size={25} />
                </Link>
                <Link className="text-white px-1">
                  <F size={25} />
                </Link>
                <Link className="text-white px-1">
                  <I size={25} />
                </Link>
                <Link className="text-white px-1" to={`mailto:${email}`}>
                  <Mail size={25} />
                </Link>
          </div>
        </div>
      </Container>
      <div className="bg-darker py-5">
        <Container>
          <h3>
            <b>Quick Links</b>
          </h3>
          <div className="row my-3 gy-3 justify-content-center justify-content-md-start">
            <div className="col-6 col-md-3">
              <ul className="nav flex-column">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/about#history">Company History</Link></li>
                <li className="nav-item"><Link to="/about#profile">Company Profile</Link></li>
                <li className="nav-item"><Link to="/services">Services</Link></li>
              </ul>
            </div>
            <div className="col-6 col-md-3">
              <ul className="nav flex-column">
                <li className="nav-item"><Link to="/services/hardware">Hardware Repairs</Link> </li>
                <li className="nav-item"><Link to="/services/website">Website Design and Implementation</Link></li>
                <li className="nav-item"><Link to="/services/training-and-consulting">Consulting Services</Link></li>
                <li className="nav-item"><Link to="/services/internet-backup">Internet Backup and Support</Link></li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-darker py-2">
        <Container>
          <hr />
          &copy;{new Date().getFullYear()} esinigeria
          <span className="float-end">
            Made With ❤ by &nbsp;
            <Link to="mailto:ajedamilola2005@gmail.com" className="text-white">
            Aje Damilola
            </Link>
          </span>
        </Container>
      </div>
    </footer>
  );
}
