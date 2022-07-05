import React from "react";
import Navbar from "../components/navbar";
import Topbar from "../components/About/topbar";
import Container from "../components/Container";
import Footer from "../components/footer";
import Breadcrumb from "../components/BreadCrumb";
import Helmet from "react-helmet";
import "../css/style.css";

import { graphql as ql } from "gatsby";
export const query = ql`{
  site{
    siteMetadata{
      description,
      email,
      phone
    }
  }
}`;

export default function contactus({ data }) {
  const { email, description, phone } = data.site.siteMetadata;
  return (
    <div>
      <Helmet>
        <script src="/bootstrap.min.js"></script>
        <title>Contact Us| Esi Nigeria</title>
        <meta
          name="keywords"
          content="elitist solution international, esi nigeria, it company, it company in lagos, it company in Nigeria, it company in africa"
        />
        <meta name="description" content={description} />
        <link rel="canonical" href="https://www.esinigeria.com.ng/contact/" />
      </Helmet>
      <Topbar>
        <Navbar />
        <Container>
          <h1 class="text-white my-5">Contact Us</h1>
        </Container>
      </Topbar>
      <Breadcrumb
        pages={[
          { to: "/", title: "Home" },
          { to: "/contact", title: "Contact", active: true },
        ]}
        className="px-5"
      />
      <Container className="pt-4 pb-7">
        <div className="pb-4">
          <h2 style={{ fontFamily: "poppins" }}>
            <b>Contact Us Directly</b>
          </h2>
          <div className="btn-group">
            <button
              className="btn btn-danger"
              role="link"
              onClick={() => {
                if (window !== undefined) {
                  const action = window.confirm(
                    "Click Ok to open the mailing service"
                  );
                  if (action) {
                    window.location.href = "mailto:" + email;
                  }
                }
              }}
            >
              Mail
            </button>
            <button
              className="btn btn-outline-danger"
              role="link"
              onClick={(e) => {
                if (window !== undefined) {
                  window.location.href = "tel:" + phone;
                }
              }}
            >
              Phone
            </button>
          </div>
        </div>
        <hr />
        <div>
          <h2 style={{ fontFamily: "poppins" }}>
            <b>Stay Updated</b>
          </h2>
          <div className="btn-group">
            <button className="btn btn-info">Facebook</button>
            <button className="btn btn-outline-info">Twitter</button>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
}
