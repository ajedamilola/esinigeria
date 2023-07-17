import React from "react";

export default function GridImages({ images = ["", "", ""] }) {
  return (
    <>
    <style>
      {`
        .img{
          max-height:300px !important
        }
      `}
    </style>
      <div className="row align-items-stretch g-0 w-100 justify-content-center">
        <div className="col text-center">{images[0]}</div>
        <div className="col-6 d-flex flex-column">
          <div className="pb-1 ps-1">{images[1]}</div>
          <div className="ps-1">{images[2]}</div>
        </div>
        {images[0] ? "" : "Please Provide at least one image"}
      </div>
    </>
  );
}
