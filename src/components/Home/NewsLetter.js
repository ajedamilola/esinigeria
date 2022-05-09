import React, { useState } from "react";
import { MdMail as Mail } from "@react-icons/all-files/md/MdMail";

export default function NewsLetter() {
  const [mail, setMail] = useState("");
  const handleChange = (e) => {
    setMail(e.target.value);
  };
  return (
    <div className="news-letter bg-primary text-light py-6">
      <div className="container text-center">
        <small>Want Help or More Info? Simply</small>
        <h3>Sign up for our news letter</h3>
        <div className="input-group my-4">
          <input
            className="form-control form-control text-primary text-center "
            type="mail"
            value={mail}
            onChange={handleChange}
          />
          <label className="input-group-text bg-dark">
            <button className="btn text-white bg-l-primary">
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
        <button className="btn btn-light mt-4">Just Mail Us Directly</button>
      </div>
    </div>
  );
}
