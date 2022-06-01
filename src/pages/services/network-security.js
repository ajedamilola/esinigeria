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
              title: "Connectivity & Network Security",
              active: true,
            },
          ]}
        />
        <div className="text-center service-info py-5">
          <StaticImage
            src="../../images/internet_security.svg"
            style={{ transform: "scale(0.5)", margin: "-15% 0em" }}
          />
          <h1
            className="pb-5 display-6 text-primary mx-auto"
            style={{ width: "80%", fontWeight: "700" }}
          >
            <b>CONNECTIVITY AND NETWORK SECURITY</b>
          </h1>
          <p className="rounded-border-sm">
            As experienced professionals in the area of networking, we are able
            to design, implement, and Support your network Whether LAN, WAN and
            WLAN. We achieve this using the best technology available e.g. cat 7
            cables, 1000Mbps Network cards, Cisco switches, routers and
            firewalls for securing your network infrastructure. In today’s world
            of cyber war and attacks, it is imperative that your company’s
            assets are carefully guarded from intruders and disgruntled people.
            It becomes all the more imperative to take network and computer
            security very seriously to avoid colossal loss through cyber fraud
            and other harmful lurking vices. ESI is strategically positioned to
            help you secure your precious data/information. Our service also
            covers procurement and installation of protective software, IP
            cameras for proactive monitoring. We also provide support for these
            services.
          </p>
          <div className="py-4">
            <a href="/services/enquire?name=CONNECTIVITY AND NETWORK SECURITY">
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
        <title>CONNECTIVITY AND NETWORK SECURITY | Esi Nigeria</title>
        <script src="../../bootstrap.min.js"></script>
        <meta type="keywords" content="CONNECTIVITY AND NETWORK SECURITY" />
        <meta
          type="description"
          content="As experienced professionals in the area of networking, we are able
            to design, implement, and Support your network Whether LAN, WAN and
            WLAN. We achieve this using the best technology available e.g. cat 7
            cables, 1000Mbps Network cards, Cisco switches, routers and
            firewalls for securing your network infrastructure. In today’s world
            of cyber war and attacks, it is imperative that your company’s
            assets are carefully guarded from intruders and disgruntled people.
            It becomes all the more imperative to take network and computer
            security very seriously to avoid colossal loss through cyber fraud
            and other harmful lurking vices. ESI is strategically positioned to
            help you secure your precious data/information. Our service also
            covers procurement and installation of protective software, IP
            cameras for proactive monitoring. We also provide support for these
            services."
        />
        <link rel="canonical" href="https://www.esinigeria.com.ng/services/network-security/" />
      </Helmet>
    </div>
  );
}
