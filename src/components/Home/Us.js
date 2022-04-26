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
        <BreadCrumb
          pages={[{ title: "Home", to: "/", active: true }]}
          className="bg-light"
        />

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
                Laboris excepteur sint adipisicing cillum. Amet incididunt
                commodo incididunt dolore ad aute aliquip. Sint reprehenderit
                ullamco velit aliqua.
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
                Laboris excepteur sint adipisicing cillum. Amet incididunt
                commodo incididunt dolore ad aute aliquip. Sint reprehenderit
                ullamco velit aliqua.
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
                Laboris excepteur sint adipisicing cillum. Amet incididunt
                commodo incididunt dolore ad aute aliquip. Sint reprehenderit
                ullamco velit aliqua.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
