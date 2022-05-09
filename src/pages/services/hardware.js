import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Container from "../../components/Container";
import BreadCrumb from "../../components/BreadCrumb";
import Navbar from "../../components/navbar";
import Helmet from "react-helmet";
import Footer from "../../components/footer";
import { Link } from "gatsby";
import "../../css/style.css";

export default function hardware() {
  return (
    <div className="bg-light">
      <Navbar filled />

      <Container className="pb-7">
        <BreadCrumb
          className="pt-3"
          pages={[
            { to: "/", title: "Home" },
            { to: "/services", title: "Services" },
            { to: "/hardware", title: "HARDWARE REPAIRS AND MAINTENANCE", active: true },
          ]}
        />
        <div className="py-4 text-center service-info">
          <StaticImage src="../../images/hardaware.png" />
          <h1 className="py-5 display-6 text-primary mx-auto" style={{width:"80%",fontWeight:"700"}}><b>HARDWARE REPAIRS AND MAINTENANCE</b></h1>
          <p className="rounded-border-sm">
          We understand that our clients need their systems at all times so, as professionals in the Information Technology industry, we understand the frustrations that arise when clients’ computer systems (Laptops, Desktops, Servers, Printers, Scanners etc.)Malfunction. We are able to service/repair all types of Computer equipment, and eliminate or minimize downtime in your operations.
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
