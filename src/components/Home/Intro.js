import React from "react";
import { Link } from "gatsby";
import Bg from "../../videos/bg-vid.mp4";

export default function Intro() {
  return (
    <div className="container intro-home intro text-white">
      <div className="content">
        <h1>Elitist Solution International</h1>
        <p>
          ESI, Nigeria is a brand with a global perspective, which focuses on
          information technology services and products.
        </p>
        <button className="btn btn-outline-primary">Company Profile</button>
        <Link to="#services">
          <button className="btn btn-primary ms-1">Services</button>
        </Link>
      </div>
      <div className="bg">
        <video src={Bg} muted loop controls={false} autoPlay />
      </div>
    </div>
  );
}
