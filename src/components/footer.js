import { Link } from "gatsby";
import { IoLocation as Point } from "@react-icons/all-files/io5/IoLocation";
import { FaPhone as Phone } from "@react-icons/all-files/fa/FaPhone";
import { IoMail as Mail } from "@react-icons/all-files/io5/IoMail";
import { IoLogoWhatsapp as W } from "@react-icons/all-files/io5/IoLogoWhatsapp";
import { IoLogoFacebook as F } from "@react-icons/all-files/io5/IoLogoFacebook";
import { IoLogoInstagram as I } from "@react-icons/all-files/io5/IoLogoInstagram";
import Container from "./Container";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5">
      <Container>
        <div className="row align-items-center">
          <div className="col">
            <Link className="navbar-brand">ESI Nigeria</Link>
            <p>
                Lorem ipsum and all whats not
            </p>
            <address className="py-2">
              <Point /> 6, Cemetery Street, Apapa Lagos, Nigeria
              <br />
              <Phone /> 09124334546565, <Mail />
              info@esinigeria.com.ng
            </address>
          </div>
          <div className="col text-center text-lg-end">
                <Link className="text-white px-1">
                  <W size={25} />
                </Link>
                <Link className="text-white px-1">
                  <F size={25} />
                </Link>
                <Link className="text-white px-1">
                  <I size={25} />
                </Link>
                <Link className="text-white px-1">
                  <Phone size={25} />
                </Link>
                <Link className="text-white px-1">
                  <Mail size={25} />
                </Link>
          </div>
        </div>
      </Container>
      <div className="bg-darker py-5">
        <Container>
          <h3>
            <b>Links</b>
          </h3>
          <div className="row my-3 gy-3 justify-content-center justify-content-md-start">
            <div className="col-6 col-md-3">
              <ul className="nav flex-column">
                <li className="nav-item">Home</li>
                <li className="nav-item">Company History</li>
                <li className="nav-item">Company Profile</li>
                <li className="nav-item">Services</li>
              </ul>
            </div>
            <div className="col-6 col-md-3">
              <ul className="nav flex-column">
                <li className="nav-item">Hardware Repairs </li>
                <li className="nav-item">Website Design and Implementation</li>
                <li className="nav-item">Consulting Services</li>
                <li className="nav-item">Internet Backup and Support</li>
              </ul>
            </div>
            <div className="col-12 col-md-3">
              <ul className="nav flex-column">
                <li className="nav-item">Facebook </li>
                <li className="nav-item">Twitter</li>
                <li className="nav-item">Instagram</li>
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
