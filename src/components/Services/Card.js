import React from "react";

export default function Card({ index = 0, img, name = "", desc = "" }) {
  return (
    <div className={`card text-light card-service s-${index + 2} h-100`}>
      <div className="card-body d-flex flex-column align-items-stretch justify-content-between text-center text-md-start">
        {img}
        <h2>{name}</h2>
        <div>
          <p>{desc}</p>
          <button className="btn btn-primary btn-sm text-white">
            Enquire
          </button>
          <button className="ms-1 btn btn-outline-primary btn-sm my-1 my-md-0">
            See More
          </button>
        </div>
      </div>
    </div>
  );
}
