import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Intro() {
  return (
    <div className="container text-white intro intro-about">
      <div className="content-about pb-6">
        <div className="row align-items-center">
          <div className="col">
            <h2>About Elitist Solution International</h2>
          </div>
          <div className="col-2 d-none d-md-block">
            <StaticImage src="../../images/icon.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
