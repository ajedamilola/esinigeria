import React from "react";
import { MdMail as Mail } from "@react-icons/all-files/md/MdMail";

export default function NewsLetter() {
  return (
    <div className="news-letter bg-dark text-light py-6">
      <div className="container text-center">
        <small>Want Help or More Info? Simply</small>
        <h3>Sign up for our news letter</h3>
        <div className="input-group my-4">
          <input className="form-control form-control text-light bg-l-dark " type="mail"/>
          <label className="input-group-text bg-dark">
            <button className="btn btn-dark">
              <Mail size={30} />
            </button>
          </label>
        </div>
        <div className="row">
          <div className="col">
            <hr />
          </div>
          <div className="col-1">
            <strong>Or</strong>
          </div>
          <div className="col">
            <hr />
          </div>
        </div>
        <button className="btn btn-outline-primary mt-4">Just Mail Us Directly</button>
      </div>
    </div>
  );
}
