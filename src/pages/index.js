import React from "react";
import Intro from "../components/Home/Intro";
import Navbar from "../components/navbar";
import Topbar from "../components/Home/topbar";
import "../css/style.css";
import Us from "../components/Home/Us";
import { FaCertificate } from "@react-icons/all-files/fa/FaCertificate";
import "bootstrap/dist/js/bootstrap.bundle";

export default function IndexPage() {
  return (
    <div>
      <Topbar>
        <Navbar />
        <Intro />
        <TrustNote />
      </Topbar>
      <Us />
    </div>
  );
}

const TrustNote = () => (
  <div className="w-100 bg-primary position-absolute bottom-0 mt-5 mt-md-3" style={{height:50}}>
    <p className="container text-white text--uppercase py-3 trust-note ">
      Trusted By many Clients All around the world
      <div className="position-relative">
        <FaCertificate size={80} color="red" className="position-absolute" style={{right:0,transform:"translateY(-55px)"}} />
      </div>
    </p>
  </div>
);
