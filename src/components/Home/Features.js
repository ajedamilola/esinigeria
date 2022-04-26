import React from "react";
import FeatureCard from "./FeatureCard";
import { MdPhone } from "@react-icons/all-files/md/MdPhone";
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
          className="carousel slide"
          data-bs-ride="carousel"
          id="features-slider"
        >
          <div className="carousel-inner" >
            <div className="carousel-item active" data-bs-interval="2500">
              <div className="row g-3 my-5 justify-content-center">
                <div className="col-12 col-md-6">
                  <FeatureCard
                    title="24/7 Support"
                    content="Pariatur ea mollit amet cillum pariatur anim culpa ea nulla excepteur. Sint nisi quis aliquip sunt ad ullamco consequat excepteur"
                    image={<MdPhone size={50} color="var(--bs-primary)" />}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <FeatureCard
                    title="Fast Services"
                    content="Pariatur ea mollit amet cillum pariatur anim culpa ea nulla excepteur. Sint nisi quis aliquip sunt ad ullamco consequat excepteur"
                    image={<MdPhone size={50} color="var(--bs-primary)" />}
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2500">
              <div className="row g-3 my-5">
                <div className="col-12 col-md-6">
                  <FeatureCard
                    title="24/7 Support"
                    content="Pariatur ea mollit amet cillum pariatur anim culpa ea nulla excepteur. Sint nisi quis aliquip sunt ad ullamco consequat excepteur"
                    image={<MdPhone size={50} color="var(--bs-primary)" />}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <FeatureCard
                    title="24/7 Support"
                    content="Pariatur ea mollit amet cillum pariatur anim culpa ea nulla excepteur. Sint nisi quis aliquip sunt ad ullamco consequat excepteur"
                    image={<MdPhone size={50} color="var(--bs-primary)" />}
                  />
                </div>
               
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#features-slider">
            <Prev color="var(--bs-primary)" size={30}/>
          </button>
          <button className="carousel-control-next" data-bs-slide="next" data-bs-target="#features-slider">
            <Next color="var(--bs-primary)" size={30}/>
          </button>
        </div>
      </Container>
    </div>
  );
}
