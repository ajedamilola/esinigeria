import React from "react";
import Navbar from "../components/navbar";
import Topbar from "../components/About/topbar";
import Container from "../components/Container";
import Footer from "../components/footer";
import Breadcrumb from "../components/BreadCrumb";

export default function contactus() {
  return (
    <div>
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
          <h2 className="display-6"><b>Contact Us Directly</b></h2>
          <div className="btn-group">
            <button className="btn btn-danger">Mail</button>
            <button className="btn btn-outline-danger">Phone</button>
          </div>
        </div>
        <hr />
        <div>
          <h2 className="display-6"><b>Stay Updated</b></h2>
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
