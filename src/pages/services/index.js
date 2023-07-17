import React from "react";
import Helmet from "react-helmet";
import Topbar from "../../Components/Services/Topbar";
import Navbar from "../../Components/navbar";
import Container from "../../Components/Container";
import BreadCrumb from "../../Components/BreadCrumb";
import Intro from "../../Components/Services/Intro";
import CardLg from "../../Components/Services/CardLg";
import Card from "../../Components/Services/Card";
import { StaticImage } from "gatsby-plugin-image";
import Footer from "../../Components/footer";
import "../../css/style.css";


export default function Services() {
  return (
    <div>
      <Topbar>
        <Navbar />
        <Intro />
      </Topbar>
      <Container>
        <BreadCrumb
          pages={[
            { to: "/", title: "Home" },
            { to: "/services", title: "Services", active: true },
          ]}
          className="py-3"
        />
        <div className="pb-6">
          <div className="row align-items-stretch">
            <div className="col-12 col-md-4">
              <CardLg />
            </div>
            <div className="col-12 col-md-8 py-2 py-md-0" id="service">
              <div className="row g-2 align-items-stretch">
                <div className="col-6 col-md-4">
                  <Card index={0} name="HARDWARE REPAIRS AND MAINTENANCE" img={<StaticImage src="../../images/hardwares.png" class="img" />} to="hardware" />
                </div>
                <div className="col-6 col-md-4">
                  <Card index={1} name="WEBSITE IMPLEMENTATION AND DESIGN" img={<StaticImage src="../../images/website.png" class="img" />} to="website"/>
                </div>
                <div className="col-6 col-md-4">
                  <Card index={2} name="CONNECTIVITY AND NETWORK SECURITY" img={<StaticImage src="../../images/internet_security.svg" class="img" />} to="network-security" />
                </div>
                <div className="col-6 col-md-4">
                  <Card index={3} name="INTERNET SUPPORT/ BACK-UP" img={<StaticImage src="../../images/internet_backup.png" class="img" />} to="internet-backup" />
                </div>
                <div className="col-6 col-md-4">
                  <Card index={4} name="TRAINING AND CONSULTING SERVICES" img={<StaticImage src="../../images/consulting.svg" class="img" />} to="training-and-consulting" />
                </div>
                <div className="col-6 col-md-4">
                  <Card index={5} name="CLOUD SERVICES" img={<StaticImage src="../../images/consulting.svg" class="img" />} to="cloud" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
      <Helmet>
        <script src="/bootstrap.min.js"></script>
        <title>Services | Esi Nigeria</title>
        <meta type='keywords' content='Esi Nigeria, IT Services, Services, IT Services in Nigeria' />
        <meta type='description' content=' At Elitist Solution International We offer range of quality services to our clients. These Services Includes : CLOUD SERVICES, HARDWARE MAINTAINACE AND REPAIRS, e.t.c' />
        <link rel="canonical" href="https://www.esinigeria.com.ng/services/" />
      </Helmet>
    </div>
  );
}
