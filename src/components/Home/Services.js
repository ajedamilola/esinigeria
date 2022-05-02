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
              <h3 className="grad-light">Hardware Maintenace And Repairs</h3>
              <p>
                Et dolore labore officia ad ex ad amet et. Veniam labore amet
                eiusmod consectetur quis do cupidatat excepteur anim do minim
                est fugiat anim. Irure veniam nulla in minim nisi velit duis
                veniam irure. Elit ad cillum laborum sunt. Magna elit amet
                adipisicing voluptate.
              </p>
              <button className="btn btn-outline-primary">Details</button>
            </div>
          </div>
          {/* Anoither Service */}
          <div className="row align-items-center">
            <div className="col-12 col-md-7 col-lg-6 text-center text-md-start order-1 order-md-0">
              <h3 className="grad-light">Websites Developments</h3>
              <p>
                Et dolore labore officia ad ex ad amet et. Veniam labore amet
                eiusmod consectetur quis do cupidatat excepteur anim do minim
                est fugiat anim. Irure veniam nulla in minim nisi velit duis
                veniam irure. Elit ad cillum laborum sunt. Magna elit amet
                adipisicing voluptate.
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
              <h3 className="grad-light">Internet Support and Backup</h3>
              <p>
                Et dolore labore officia ad ex ad amet et. Veniam labore amet
                eiusmod consectetur quis do cupidatat excepteur anim do minim
                est fugiat anim. Irure veniam nulla in minim nisi velit duis
                veniam irure. Elit ad cillum laborum sunt. Magna elit amet
                adipisicing voluptate.
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
