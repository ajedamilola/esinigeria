import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Container from "../../components/Container";
import BreadCrumb from "../../components/BreadCrumb";
import Navbar from "../../components/navbar";
import Helmet from "react-helmet";
import Footer from "../../components/footer";
import { Link } from "gatsby";
import "../../css/style.css";

export default function service() {
  return (
    <div className="bg-light">
      <Navbar filled />

      <Container className="pb-7">
        <BreadCrumb
          className="pt-3"
          pages={[
            { to: "/", title: "Home" },
            { to: "/services", title: "Services" },
            {
              to: "/hardware",
              title: "TRAINING AND CONSULTING SERVICES",
              active: true,
            },
          ]}
        />
        <div className="text-center service-info py-5">
          <StaticImage
            src="../../images/consulting.svg"
            style={{ transform: "scale(0.5)", margin: "-15% 0em" }}
          />
          <h1
            className="py-5 display-6 text-primary mx-auto"
            style={{ width: "80%", fontWeight: "700" }}
          >
            <b>TRAINING AND CONSULTING SERVICES</b>
          </h1>
          <p className="rounded-border-sm">As Technology evolves in Nigeria in Particular, we provide training
            and consultancy support that enables our clients quickly understand
            the benefits of technology, and uses that knowledge to enhance their
            profits/growth positions in their sector. This training covers many
            areas e.g. Project Management, Efficiency in Microsoft office suit
            (Word, Excel, Access etc.), Accounting Packages etc.Our goal is to
            guide our clients towards profitability by providing excellent
            services using information Technology Tools to solve their business
            challenges/problems. It should be noted that the services render by
            ESI goes beyond what have been enumerated so far. We are able to do
            much more.</p>
          <div className="py-4">
            <a href="/services/enquire?name=TRAINING AND CONSULTING SERVICES">
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
      <Helmet>
        <title>TRAINING AND CONSULTING| Esi Nigeria</title>
        <script src="../../bootstrap.min.js"></script>
        <meta type="keywords" content="TRAINING AND CONSULTING SERVICES" />
        <meta
          type="description"
          content=" As Technology evolves in Nigeria in Particular, we provide training
            and consultancy support that enables our clients quickly understand
            the benefits of technology, and uses that knowledge to enhance their
            profits/growth positions in their sector. This training covers many
            areas e.g. Project Management, Efficiency in Microsoft office suit
            (Word, Excel, Access etc.), Accounting Packages etc.Our goal is to
            guide our clients towards profitability by providing excellent
            services using information Technology Tools to solve their business
            challenges/problems. It should be noted that the services render by
            ESI goes beyond what have been enumerated so far. We are able to do
            much more."
        />
        <link rel="canonical" href="https://www.esinigeria.com.ng/services/training-and-consulting/" />
      </Helmet>
    </div>
  );
}
