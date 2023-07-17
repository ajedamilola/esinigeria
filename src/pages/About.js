import React from "react";
import Navbar from "../Components/navbar";
import Helmet from "react-helmet";
import Topbar from "../Components/About/topbar";
import Content from "../Components/About/Content";
import Footer from "../Components/footer";
// import GridImages from "../Components/About/GridImages";
import Container from "../Components/Container";
import Intro from "../Components/About/Intro";
import "../css/style.css";
import BreadCrumb from "../Components/BreadCrumb";
import Clients from "../Components/Clients";
import Us from "../Components/Home/Us";
import Wave from "../Components/Wave";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql as ql } from "gatsby";

export const query = ql`{
  site{
    siteMetadata{
      description
    }
  }
}
`;
export default function about({ data }) {
  return (
    <div className="bg-light">
      <Topbar>
        <Navbar />
        <Intro />
      </Topbar>

        <BreadCrumb
          pages={[
            { to: "/", title: "Home" },
            { to: "/About", title: "About", active: true },
          ]}
          className="pt-3 px-4 px-md-7"
        />
        <Content className="py-6 px-4">
          <em className="text-center text-muted">
            ESI was borne out of the desire to create an indigenous brand that
            will meet the I.T needs of organizations and individuals both
            locally and globally by providing first class services, products and
            innovations while creating an avenue for talented individuals to
            express themselves technologically
          </em>
        </Content>

      <Container>
        <div className="row gx-5 py-8 align-items-center" id="profile">
          <div className="col-12 col-md-4">
            <StaticImage src="../../images/logo.png" className="mt-2" />
          </div>
          <div className="col-12 col-md-8">
            <Content title="Company Profile" titlePos="left">
              <p>
                The company ELITIST SOLUTION INTERNATIONAL registered as a
                business name with the Corporate Affairs Commission (CAC) with a
                capital sum of $4000. The money was used by
                <Link to="https://facebook.com/josephneem">
                  Joseph Ojochenemi
                </Link>
                (the founder) to secure a partnering office in Yaba and
                consequently in Apapa, registration of the business and
                sustaining team members.
              </p>
              <br />
            </Content>
          </div>
        </div>
      </Container>

      <Wave fill="var(--bs-primary)" t={4} />
      <div className="bg-primary" id="history">
        <Container>
          <Content
            className="py-6 bg-primary"
            title="Company History"
            titlePos="center"
            light={false}
            nobg
          >
            <p className="text-center">
              Elitist Solution International also known as ESI, Nigeria started
              in January 2015 as an ICT support business with our first office
              in Marina before we moved to Apapa. Although, we still maintain an
              office presence in Yaba, Lagos. ESI, Nigeria is a brand with a
              global perspective, which focuses on information technology
              services and products. ESI was borne out of the desire to create
              an indigenous brand that will meet the I.T needs of organizations
              and individuals both locally and globally by providing first class
              services, products and innovations while creating an avenue for
              talented individuals to express themselves technologically
              (Elitist Hub). Even as we have a global view, we seek to add value
              to the present I.T services in the Nigerian environment through
              innovations and training so; we are determined to give the best
              service ever.
              <br />
            </p>
          </Content>
        </Container>
      </div>
      <Wave fill="var(--bs-primary)" t={5} />

      {/* 
        <GridImages
          images={[
            <StaticImage src="../../images/icon.png" className="h-100 w-100" />,
            <StaticImage src="../../images/icon.png" className="img" />,
            <StaticImage src="../../images/icon.png" className="img" />,
          ]}
        /> */}
      <Us />
      <Container>
        <Clients className="py-7" />
      </Container>
      <Footer />
      <Helmet>
        <script src="/bootstrap.min.js"></script>
        <title>About Us | Elitist Solution International</title>
        <meta
          name="keywords"
          content="elitist solution international, esi nigeria, it company, it company in lagos, it company in Nigeria, it company in africa"
        />
        <meta name="description" content={data.site.siteMetadata.description} />
        <link rel="canonical" href="https://www.esinigeria.com.ng/about/" />
      </Helmet>
    </div>
  );
}
