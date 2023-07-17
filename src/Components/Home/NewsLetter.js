import React, { useState } from "react";
import { MdMail as Mail } from "@react-icons/all-files/md/MdMail";

export default function NewsLetter() {
  const [email, setMail] = useState("");
  const [response, setResponse] = useState({ loading: false });
  const handleChange = (e) => {
    setMail(e.target.value);
  };
  const sendRequest = (e) => {
    setResponse({ loading: true });
    fetch("https://esinigeria.com.ng/api/addEmail.php", {
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "access-control-request-method": "POST",
      },
      method: "POST",
      body: `email=${email}`,
    })
      .then((res) => res.json())
      .then((data) => setResponse({ ...data, loading: false }))
      .catch((err) =>
        setResponse({
          msg: "Network Error: Unable to reach servers",
          loading: false,
        })
      );
      e.stopPropagation();
      e.preventDefault();
  };
  return (
    <div className="news-letter bg-primary text-light py-6">
      <div className="container text-center">
        <small>Want Help or More Info? Simply</small>
        <h3>Sign up for our news letter</h3>
        <p className="text-light">{response.msg}</p>
        <form className="input-group my-4" onSubmit={sendRequest}>
          <input
            className="form-control form-control text-primary text-center "
            type="email"
            value={email}
            onChange={handleChange}
            required
          />
          <label className="input-group-text bg-dark">
            <button
              className="btn text-white bg-l-primary"
              disabled={response.loading}
            >
              {response.loading ? (
                <span className="spinner-border"></span>
              ) : (
                <Mail size={30} />
              )}
            </button>
          </label>
        </form>
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
        <a href="mailto:esinigeria.com.ng">
          <button className="btn btn-light mt-4">Just Mail Us Directly</button>
        </a>
      </div>
    </div>
  );
}
