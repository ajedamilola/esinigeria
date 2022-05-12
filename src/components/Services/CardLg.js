import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FaArrowCircleRight as Right } from "@react-icons/all-files/fa/FaArrowCircleRight";
import { FaArrowCircleDown as Down } from "@react-icons/all-files/fa/FaArrowCircleDown";
import { Link } from "gatsby";

export default function CardLg() {
  return (
    <div className="card text-light card-service s-1">
      <div className="card-body d-flex align-items-center">
        <div>
          <StaticImage src="../../images/logo.png" class="img" />

          <h1>
            Our services{"  "}
             <Right size={35} className="d-none d-md-inline ms-auto" />
          </h1>
          <p>
            At Elitist Solution International We offer range of quality services to our clients. These Services Includes :
          </p>
          <Link to="#service" className="text-white">
            <Down size={35} className="d-block d-md-none mx-auto" />
          </Link>
        </div>
      </div>
    </div>
  );
}
