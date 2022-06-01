import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Container from "../../components/Container";
import BreadCrumb from "../../components/BreadCrumb";
import Navbar from "../../components/navbar";
import Helmet from "react-helmet";
import Footer from "../../components/footer";
import { Link } from "gatsby";
import "../../css/style.css";

export default function website() {
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
              title: "Website Design and Implementation",
              active: true,
            },
          ]}
        />
        <div className="py-4 text-center service-info">
          <StaticImage src="../../images/website.png" />
          <h1
            className="py-5 display-6 text-primary mx-auto"
            style={{ width: "80%", fontWeight: "700" }}
          >
            <b>DESIGN, IMPLEMENTATION AND SUPPORT OF A DYNAMIC WEBSITE</b>
          </h1>
          <p className="rounded-border-sm">
            The benefits of a dynamic website are enormous. At ESI we not only
            design and build websites, we market and optimize your website to
            increase its profitability. Our objective is to see to it that we
            track the usage of the website as a part of your Company’s strategic
            growth plans. Our website package is built to strategically position
            your company to serve a global customer base of about three (3)
            billion people. We are able to Design, Build, Host, Manage, and
            support a dynamic website for your entire company.
          </p>
          <div className="py-4">
            <a href="/services/enquire/?name=WEBSITE IMPLEMENTATION AND DESIGN">
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
        <title>Website Implemetation and Design| Esi Nigeria</title>
        <meta type="keywords" content="Website Design,Esi Nigeria,ELitist Solution International " />
        <meta
          type="description"
          content="The benefits of a dynamic website are enormous. At ESI we not only
            design and build websites, we market and optimize your website to
            increase its profitability. Our objective is to see to it that we
            track the usage of the website as a part of your Company’s strategic
            growth plans. Our website package is built to strategically position
            your company to serve a global customer base of about three (3)
            billion people. We are able to Design, Build, Host, Manage, and
            support a dynamic website for your entire company."
        />
        <script src="../../bootstrap.min.js"></script>
        <link rel="canonical" href="https://www.esinigeria.com.ng/services/website/" />

      </Helmet>
    </div>
  );
}
