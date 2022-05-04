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
import BreadCrumb from "../components/BreadCrumb";
import Clients from "../components/Clients";
import Wave from "../components/Wave";

export default function IndexPage() {
  return (
    <div>
      <Topbar>
        <Navbar />
        <Intro />
        <TrustNote />
      </Topbar>
      <BreadCrumb
        pages={[{ title: "Home", to: "/", active: true }]}
        className="py-2 bg-light px-4 px-md-7"
      />
      <div className="bg-light">
        <Us />
        <Wave fill="var(--bs-primary)" t={3} />
        <Services />
        <Wave fill="var(--bs-primary)" t={2} />
        <Features />
        <Wave fill="var(--bs-primary)" rotation="90" />
        <NewsLetter />
        <Wave fill="var(--bs-primary)" t={5} />
        <About />
        <Container className="pb-7">
          <Clients />
        </Container>
        <Footer />
        <Helmet>
          <script src="./bootstrap.min.js"></script>
          <title>Esi Nigeria | Elitist Solution International</title>
        </Helmet>
      </div>
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
          size={65}
          color="var(--bs-info)"
          className="position-absolute"
          style={{ right: 0, transform: "translateY(-45px)" }}
        />
      </div>
    </Container>
  </div>
);
