import React from "react";
import hardware from "../../images/hardwares.png";
import website from "../../images/website.png";
import backup from "../../images/internet_backup.png";
import {MdArrowForward} from "@react-icons/all-files/md/MdArrowForward"

export default function Services() {
  return (
    <div className="bg-dark services-home text-light  position-relative">
      <div className="container">
        <h2 className="text-center">We Offer Wide Range of Services</h2>
        <div className="row py-3 g-3 align-items-center">
          {/* Oner Service */}
          <div className="col-12 col-md-5 col-lg-6">
            <img src={hardware} className="img-fluid" />
          </div>
          <div className="col-12 col-md-7 col-lg-6">
            <h3 className="grad-light">Hardware Maintenace And Repairs</h3>
            <p>
              Et dolore labore officia ad ex ad amet et. Veniam labore amet
              eiusmod consectetur quis do cupidatat excepteur anim do minim est
              fugiat anim. Irure veniam nulla in minim nisi velit duis veniam
              irure. Elit ad cillum laborum sunt. Magna elit amet adipisicing
              voluptate.
            </p>
          </div>

          {/* Anoither Service */}
          <div className="col-12 col-md-7 col-lg-6">
            <h3 className="grad-light">Websites Developments</h3>
            <p>
              Et dolore labore officia ad ex ad amet et. Veniam labore amet
              eiusmod consectetur quis do cupidatat excepteur anim do minim est
              fugiat anim. Irure veniam nulla in minim nisi velit duis veniam
              irure. Elit ad cillum laborum sunt. Magna elit amet adipisicing
              voluptate.
            </p>
          </div>
          <div className="col-12 col-md-5 col-lg-6">
            <img src={website} className="img-fluid" />
          </div>
          {/* Anoither Service */}
          <div className="col-12 col-md-5 col-lg-6">
            <img src={backup} className="img-fluid" />
          </div>
          <div className="col-12 col-md-7 col-lg-6">
            <h3 className="grad-light">Internet Support and Backup</h3>
            <p>
              Et dolore labore officia ad ex ad amet et. Veniam labore amet
              eiusmod consectetur quis do cupidatat excepteur anim do minim est
              fugiat anim. Irure veniam nulla in minim nisi velit duis veniam
              irure. Elit ad cillum laborum sunt. Magna elit amet adipisicing
              voluptate.
            </p>
          </div>
          
        </div>
        {/** More Services Button */}
        <div
          className="position-absolute bottom-0 py-2 text-center w-100"
          style={{ left: 0 }}
        >
          <button className="btn btn-primary mx-auto">Explore More <MdArrowForward /></button>
        </div>
      </div>
    </div>
  );
}
