import React from "react";
import { Helmet } from "react-helmet";
import Intro from "../components/Home/Intro";
import Navbar from "../components/navbar";
import Topbar from "../components/Home/topbar";
import "../css/style.css";
import Us from "../components/Home/Us";
import { FaCertificate } from "@react-icons/all-files/fa/FaCertificate";
import Services from "../components/Home/Services";
import Features from "../components/Home/Features";
import NewsLetter from "../components/Home/NewsLetter";
import About from "../components/Home/KnowUs";
import Footer from "../components/footer";
import Container from "../components/Container";

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
      <Features />
      <NewsLetter />
      <About />
      <Footer />
      <Helmet>
        <script src="./bootstrap.min.js"></script>"
      </Helmet>
    </div>
  );
}

const TrustNote = () => (
  <div
    className="w-100 bg-primary position-absolute bottom-0 mt-5 mt-md-3"
    style={{ height: 50 }}
  >
    <Container>
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
    </Container>
  </div>
);
