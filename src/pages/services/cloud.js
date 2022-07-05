import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Container from "../../components/Container";
import BreadCrumb from "../../components/BreadCrumb";
import Navbar from "../../components/navbar";
import Helmet from "react-helmet";
import Footer from "../../components/footer";
import { Link } from "gatsby";
import "../../css/style.css";
import MetaTags from "react-meta-tags";

export default function cloud() {
  return (
    <div className="bg-light">
      <Navbar filled />

      <Container className="pb-7">
        <BreadCrumb
          className="pt-3"
          pages={[
            { to: "/", title: "Home" },
            { to: "/services", title: "Services" },
            { to: "/cloud", title: "CLOUD SERVICES", active: true },
          ]}
        />
        <div className="py-4 text-center service-info">
          <StaticImage src="../../images/hardwares.png" />
          <h1
            className="py-5 display-6 text-primary mx-auto"
            style={{ width: "80%", fontWeight: "700" }}
          >
            <b>CLOUD SERVICES</b>
          </h1>
          <p className="rounded-border-sm">
            Our hosting services offer innovative cloud solutions that provide a
            wide range of products covering business enterprises, government and
            non-governmental institutions. We put special premium on
            affordability, flexibility, scalability and security on all
            deployments.With ESI cloud services, businesses and agencies can run
            their operations from anywhere, anytime and on any device. Our
            professional services offering provide consultation for
            organizations, helping them in tailor bespoke cloud model that meet
            their business needs, goals and objectives.Feel free to check with
            us
          </p>
          <div className="py-4">
            <a href="/services/enquire?name=CLOUD SERVICES">
              <button className="m-1 btn btn-outline-primary">Enquire</button>
            </a>
            <Link to="/services">
              <button className="m-1 btn btn-primary">Other Services</button>
            </Link>
            <hr className="mt-6" />
          </div>
        </div>
      </Container>
      <Footer />
      <MetaTags>
        <title>CLOUD SERVICES|ESI Nigeria</title>
        <script src="/bootstrap.min.js"></script>
        <meta name="keywords" content="CLOUD SERVICES" />
        <meta
          name="description"
          content="Our hosting services offer innovative cloud solutions that provide a wide range of products covering business enterprises, government and non-governmental institutions. We put special premium on affordability, flexibility, scalability and security on all deployments.With ESI cloud services, businesses and agencies can run their operations from anywhere, anytime and on any device. Our professional services offering provide consultation for organizations, helping them in tailor bespoke cloud model that meet their business needs, goals and objectives.Feel free to check with us "
        />
        <link rel="canonical" href="https://www.esinigeria.com.ng/services/cloud/" />
      </MetaTags>
    </div>
  );
}
