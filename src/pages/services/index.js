import React from "react";
import Helmet from "react-helmet";
import Topbar from "../../components/Services/Topbar";
import Navbar from "../../components/navbar";
import Container from "../../components/Container";
import BreadCrumb from "../../components/BreadCrumb";
import Intro from "../../components/Services/Intro";
import CardLg from "../../components/Services/CardLg";
import Card from "../../components/Services/Card";
import { StaticImage } from "gatsby-plugin-image";
import Footer from "../../components/footer";
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
                  <Card index={0} name="One Service Name" desc="Lorem Ipsum blah blah stuff" img={<StaticImage src="../../images/hardwares.png" class="img" />}/>
                </div>
                <div className="col-6 col-md-4">
                  <Card index={1} name="One Service Name" desc="Lorem Ipsum blah blah stuff" img={<StaticImage src="../../images/internet_backup.png" class="img" />}/>
                </div>
                <div className="col-6 col-md-4">
                  <Card index={2} name="One Service Name" desc="Lorem Ipsum blah blah stuff" img={<StaticImage src="../../images/hardwares.png" class="img" />}/>
                </div>
                <div className="col-6 col-md-4">
                  <Card index={3} name="One Service Name" desc="Lorem Ipsum blah blah stuff" img={<StaticImage src="../../images/website.png" class="img" />}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
      <Helmet>
        <script src="./bootstrap.min.js"></script>
        <title>Services | Esi Nigeria</title>
      </Helmet>
    </div>
  );
}
