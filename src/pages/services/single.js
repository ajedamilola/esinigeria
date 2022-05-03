import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Container from "../../components/Container";
import BreadCrumb from "../../components/BreadCrumb";
import Navbar from "../../components/navbar";
import Helmet from "react-helmet";
import Footer from "../../components/footer";
import { Link } from "gatsby";
import "../../css/style.css";

export default function single() {
  return (
    <div className="bg-light">
      <Navbar filled />

      <Container className="pb-7">
        <BreadCrumb
          className="pt-3"
          pages={[
            { to: "/", title: "Home" },
            { to: "/services", title: "Services" },
            { to: "/single", title: "Current Service", active: true },
          ]}
        />
        <div className="py-4 text-center service-info">
          <StaticImage src="../../images/website.png" />
          <h1 className="py-5 display-4 text-primary"><b>Service Name</b></h1>
          <p className="rounded-border-sm">
            Voluptate esse velit cupidatat duis do ipsum sunt sit. Quis tempor
            duis non duis amet do ad adipisicing esse occaecat ipsum voluptate.
            Anim ullamco fugiat aliquip culpa sunt id do consequat esse velit
            sint excepteur. Ullamco Lorem pariatur culpa sint labore occaecat
            adipisicing commodo elit sunt. Pariatur aliquip consequat sint nisi.
            Eiusmod magna elit ut excepteur elit deserunt amet quis officia enim
            officia mollit minim commodo. Anim amet laborum cupidatat velit
            occaecat eu occaecat consequat in reprehenderit est proident.
            Consectetur nisi excepteur officia reprehenderit occaecat
            adipisicing occaecat voluptate cillum occaecat aute ea nisi. Commodo
            commodo nostrud adipisicing eiusmod dolor qui esse nostrud eiusmod
            ex reprehenderit. Magna laborum excepteur eiusmod nisi.
            Reprehenderit irure ullamco quis laboris magna aliquip pariatur
            deserunt. Nulla elit qui do aliqua ea eu nisi nulla amet.
          </p>
          <div className="py-4">
              <button className="m-1 btn btn-outline-primary">Enquire</button>
              <Link to="/services"><button className="m-1 btn btn-primary">Other Services</button></Link>
              <hr className="mt-6"/>
          </div>
        </div>
      </Container>
      <Footer />
      <Helmet>
          <title>
              ESI Nigeria Services
          </title>
          <script src="../../bootstrap.min.js"></script>
      </Helmet>
    </div>
  );
}
