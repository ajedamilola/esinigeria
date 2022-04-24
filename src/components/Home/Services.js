import React from "react";

export default function Services() {
  return (
    <div className="bg-dark services-home text-light  position-relative">
      <div className="container">
        <h2 className="text-center">We Offer Wide Range of Services</h2>
        <div className="row py-3 g-3">
            <p>Servies Grid Goes Here</p>
        </div>
        <div className="position-absolute bottom-0 py-2 text-center w-100" style={{left:0}}>
            <button className="btn btn-primary mx-auto">See All</button>
        </div>
      </div>
    </div>
  );
}
