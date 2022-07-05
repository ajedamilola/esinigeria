import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Container from "../../components/Container";
import BreadCrumb from "../../components/BreadCrumb";
import Navbar from "../../components/navbar";
import Helmet from "react-helmet";
import Footer from "../../components/footer";
import { Link } from "gatsby";
import "../../css/style.css";
import { MetaTags } from "react-meta-tags";

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
              title: "INTERNET SUPPORT AND BACKUP",
              active: true,
            },
          ]}
        />
        <div className="py-4 text-center service-info">
          <StaticImage src="../../images/internet_backup.png" />
          <h1
            className="py-5 display-6 text-primary mx-auto"
            style={{ width: "80%", fontWeight: "700" }}
          >
            <b>INTERNET SUPPORT/ BACK-UP</b>
          </h1>
          <p className="rounded-border-sm">
            The importance of the internet in controlling the way business is
            done is of great gain. Executives bear an enormous burden as they
            attempt to understand the challenges it brings, keep abreast of
            events, and make intelligent decisions and plans. So, at ESI we will
            help you deploy the best cost effective internet facility (VSAT,
            Modems etc.) for your company with fully customized features to
            serve you better. Our professionalism is first class and intend to
            keep it that way
          </p>
          <div className="py-4">
            <a href="/services/enquire?name=INTERNET SUPPORT/ BACK-UP">
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
        <title>INTERNET SUPPORT AND BACKUP|Esi Nigeria</title>
        <script src="/bootstrap.min.js"></script>
        <meta type='keywords' content='INTERNET SUPPORT AND BACKUP' />
        <meta type='description' content='The importance of the internet in controlling the way business is
            done is of great gain. Executives bear an enormous burden as they
            attempt to understand the challenges it brings, keep abreast of
            events, and make intelligent decisions and plans. So, at ESI we will
            help you deploy the best cost effective internet facility (VSAT,
            Modems etc.) for your company with fully customized features to
            serve you better. Our professionalism is first class and intend to
            keep it that way' />
            <link rel="canonical" href="https://www.esinigeria.com.ng/services/internet-backup/" />
      </MetaTags>

    </div>
  );
}
