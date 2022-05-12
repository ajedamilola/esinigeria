import React from "react";
import FeatureCard from "./FeatureCard";
import { MdPhone } from "@react-icons/all-files/md/MdPhone";
import {FaClock} from  "@react-icons/all-files/fa/FaClock"
import { MdArrowBack as Prev } from "@react-icons/all-files/md/MdArrowBack";
import { MdArrowForward as Next } from "@react-icons/all-files/md/MdArrowForward";
import Logo from "../../images/website.png";
import Container from "../Container";

export default function () {
  return (
    <div className="features bg-light d-flex">
      <Container>
        <h2 className="grad">WE PROVIDE</h2>
        <div
          className="carousel slide mt-5"
          data-bs-ride="carousel"
          id="features-slider"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2500">
              <FeatureCard
                title="Fast & Quality Services"
                content="We offer Quality yet Fast Services"
                image={<FaClock size={50} color="var(--bs-primary)" />}
              />
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <FeatureCard
                title="24/7 Customer Care"
                content="Our Customer Care Services are always active and ready to help"
                image={<MdPhone size={50} color="var(--bs-primary)" />}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            data-bs-slide="prev"
            data-bs-target="#features-slider"
          >
            <Prev color="var(--bs-primary)" size={30} />
          </button>
          <button
            className="carousel-control-next"
            data-bs-slide="next"
            data-bs-target="#features-slider"
          >
            <Next color="var(--bs-primary)" size={30} />
          </button>
        </div>
      </Container>
    </div>
  );
}
