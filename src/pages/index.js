import React from "react";
import {Helmet} from "react-helmet";
import Intro from "../components/Home/Intro";
import Navbar from "../components/navbar";
import Topbar from "../components/Home/topbar";
import "../css/style.css";
import Us from "../components/Home/Us";
import { FaCertificate } from "@react-icons/all-files/fa/FaCertificate";
import Services from "../components/Home/Services";

export default function IndexPage() {
  return (
    <div>
      <Topbar>
        <Navbar />
        <Intro />
        <TrustNote />
      </Topbar>
      <Us />
      <Services />
	  <Helmet>
		<script src="/bootstrap.min.js"></script>"
	  </Helmet>
    </div>
  );
}

const TrustNote = () => (
  <div
    className="w-100 bg-primary position-absolute bottom-0 mt-5 mt-md-3"
    style={{ height: 50 }}
  >
    <div className="container">
      <div className="text-white text--uppercase my-3 trust-note ">
        Trusted By many Clients All around the world
      </div>
      <div className="position-relative">
        <FaCertificate
          size={80}
          color="red"
          className="position-absolute"
          style={{ right: 0, transform: "translateY(-55px)" }}
        />
      </div>
    </div>
  </div>
);
