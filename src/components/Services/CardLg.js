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
          <StaticImage src="../../images/icon.png" class="img" />

          <h1>
            Our services{"  "}
             <Right size={35} className="d-none d-md-inline ms-auto" />
          </h1>
          <p>
            Exercitation ut aliqua nostrud adipisicing enim officia velit.
            Voluptate amet aute consequat adipisicing sunt fugiat.
          </p>
          <Link to="#service" className="text-white">
            <Down size={35} className="d-block d-md-none mx-auto" />
          </Link>
        </div>
      </div>
    </div>
  );
}
