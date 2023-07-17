import React from "react";
import { Helmet } from "react-helmet";
import Intro from "../Components/Home/Intro";
import Navbar from "../Components/navbar";
import Topbar from "../Components/Home/topbar";
import "../css/style.css";
import Us from "../Components/Home/Us";
import { FaCertificate } from "@react-icons/all-files/fa/FaCertificate";
import Services from "../Components/Home/Services";
import Features from "../Components/Home/Features";
import NewsLetter from "../Components/Home/NewsLetter";
import About from "../Components/Home/KnowUs";
import Footer from "../Components/footer";
import Container from "../Components/Container";
import BreadCrumb from "../Components/BreadCrumb";
import Clients from "../Components/Clients";
import Wave from "../Components/Wave";
import { graphql as ql } from "gatsby";

export const query = 
   (ql`
     {
       site(siteMetadata: {}){
         siteMetadata{
           description
         }
       }
     }
   `)
export default function IndexPage({data}) {
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
        <Services />
        <Features />
        <NewsLetter />
        <About />
        <Container className="pb-7">
          <Clients />
        </Container>
        <Footer />
        <Helmet>
          <script src="/bootstrap.min.js"></script>
          <title>Esi Nigeria | Elitist Solution International</title>
          <meta name="keywords" content="elitist solution international, esi nigeria, it company, it company in lagos, it company in Nigeria, it company in africa" />
          <meta name="description" content={data.site.siteMetadata.description} />
          <link rel="canonical" href="https://www.esinigeria.com.ng/" />

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
          color="var(--bs-info)"
          className="position-absolute certificate"
          style={{ right: 0, transform: "translateY(-50%)" }}
        />
      </div>
    </Container>
  </div>
);
