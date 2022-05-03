import React from "react";

import { MdArrowForward } from "@react-icons/all-files/md/MdArrowForward";
import { StaticImage } from "gatsby-plugin-image";
import Container from "../Container";
import { Link } from "gatsby";

const hardware = "../../images/hardwares.png";
const website = "../../images/website.png";
const backup = "../../images/internet_backup.png";

export default function Services() {
  return (
    <div
      className="bg-dark services-home text-light  position-relative"
      id="services"
    >
      <Container>
        <h2 className="text-center">We Offer Wide Range of Services</h2>
        <div className="pt-5">
          {/* Oner Service */}
          <div className="row align-items-center">
            <div className="col-12 col-md-5 col-lg-6 text-center">
              <StaticImage src={hardware} />
            </div>
            <div className="col-12 col-md-7 col-lg-6 text-center text-md-start ">
              <h3 className="grad-light">HARDWARE REPAIRS AND MAINTENANCE</h3>
              <p>
              We understand that our clients need their systems at all times so, as professionals in the Information Technology industry, we understand the frustrations that arise when clients’ computer systems (Laptops, Desktops, Servers, Printers, Scanners etc.)Malfunction. We are able to service/repair all types of Computer equipment, and eliminate or minimize downtime in your operations.
              </p>
              <button className="btn btn-outline-primary">Details</button>
            </div>
          </div>
          {/* Anoither Service */}
          <div className="row align-items-center">
            <div className="col-12 col-md-7 col-lg-6 text-center text-md-start order-1 order-md-0">
              <h3 className="grad-light">DESIGN, IMPLEMENTATION AND SUPPORT OF A DYNAMIC WEBSITE</h3>
              <p>
              At ESI we not only design and build websites, we market and optimize your website to increase its profitability. Our objective is to see to it that we track the usage of the website as a part of your Company’s strategic growth plans.
              </p>
              <button className="btn btn-outline-primary">Details</button>
            </div>
            <div className="col-12 col-md-5 col-lg-6 order-0 order-md-1">
              <StaticImage src={website} />
            </div>
          </div>
          {/* Anoither Service */}
          <div className="row align-items-center">
            <div className="col-12 col-md-5 col-lg-6 text-center text-md-start order-0">
              <StaticImage src={backup} />
            </div>
            <div className="col-12 col-md-7 col-lg-6 order-1 text-center text-md-start ">
              <h3 className="grad-light">INTERNET SUPPORT/ BACK-UP</h3>
              <p>
              at ESI we will help you deploy the best cost effective internet facility (VSAT, Modems etc.) for your company with fully customized features to serve you better. Our professionalism is first class and intend to keep it that way.
              </p>
              <button className="btn btn-outline-primary">Details</button>
            </div>
          </div>
        </div>

        {/** More Services Button */}
        <div
          className="position-absolute bottom-0 py-2 text-center w-100"
          style={{ left: 0 }}
        >
          <Link to="/services">
            <button className="btn btn-primary mx-auto">
              Explore More <MdArrowForward />
            </button>
          </Link>
        </div>
       
      </Container>
    </div>
  );
}
