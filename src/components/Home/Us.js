import React from "react";
import { FaList } from "@react-icons/all-files/fa/FaList";
import { FaPaperPlane } from "@react-icons/all-files/fa/FaPaperPlane";
import { FaGlasses } from "@react-icons/all-files/fa/FaGlasses";
import IconContainer from "../IconContainer";
import Container from "../Container";
import BreadCrumb from "../BreadCrumb";

export default function Us() {
  return (
    <div className="wwa bg-light">
      <Container>
        <h2>
          <span className="text-primary">O</span>UR{" "}
          <span className="text-primary">F</span>OCUS
        </h2>
        <div className="row g-5 justify-content-center py-3 py-md-5">
          {/* Mission */}
          <div className="col-12 col-md-6 col-lg-4 ">
            <div className="bg-white shadow-lg p-3 rounded-border">
              <IconContainer>
                <FaPaperPlane className="text-primary" size={30} />
              </IconContainer>
              <h3>
                <span className="grad">Mission </span>
              </h3>
              <p className="text-muted text-center text-md-start">
                Constantly seeking ways to meet the needs of our clients
                impacting Africa and the World with the latest innovations in
                the I.T. world
              </p>
            </div>
          </div>
          {/* Core Values */}
          <div className="col-12 col-md-6 col-lg-4 text-center ">
            <div className="bg-white shadow-lg p-3 rounded-border">
              <div className="text-center">
                <IconContainer center>
                  <FaList className="text-primary" size={30} />
                </IconContainer>
                <h3>
                  <span className="grad">Core Values</span>
                </h3>
              </div>

              <p className="text-muted">
                Our core values which we consider critical to our business
                success include:
                <ul className="list-group">
                  <li className="list-group-item">Honesty</li>
                  <li className="list-group-item bg-l-dark text-light">Excellence</li>
                  <li className="list-group-item">Efficiency</li>
                  <li className="list-group-item bg-l-dark text-light">Professionalism</li>
                </ul>
              </p>
            </div>
          </div>
          {/* Vision */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="bg-white shadow-lg p-3 rounded-border">
              <IconContainer right>
                <FaGlasses className="text-primary" size={30} />
              </IconContainer>
              <h3 className="text-end">
                <span className="grad">Vision</span>
              </h3>
              <p className="text-muted  text-center text-md-end">
              To build a global brand which continuously provides world class Information Technology (I.T.) products and services relevant in today’s business world.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
