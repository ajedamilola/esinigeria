import React, { useReducer, useRef } from "react";
import Container from "../../components/Container";
import Navbar from "../../components/navbar";
import "../../css/style.css";
import Helmet from "react-helmet";
import Footer from "../../components/footer";

export default function Enquire() {
  let url = [];
  if (typeof window != "undefined") {
    url = new URLSearchParams(window.location.search);
  }

  const servicesRef = useRef(null);

  const inputReducer = (state, actions) => {
    switch (actions.type) {
      case "name":
        return { ...state, name: actions.value };
      case "email":
        return { ...state, email: actions.value };
      case "info":
        return { ...state, info: actions.value };
      case "services":
        return { ...state, services: actions.value };
      case "phone":
        return { ...state, phone: actions.value };
      case "submit":
        return { ...state, submitting: actions.value };
      case "response":
        return { ...state, response: actions.value };
      default:
        return state;
    }
  };

  const [state, setState] = useReducer(inputReducer, {});

  const handleSubmit = (e) => {
    setState({ type: "services", value: servicesRef.current.value });
    setState({ type: "submit", value: true });
    fetch("http://localhost:8888/submit_service_request.php", {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "access-control-request-method": "POST",
      },
      body: `name=${state.name}&email=${state.email}&service=${state.services}&phone=${state.phone}&info=${state.info}`,
    })
      .then((res) => res.json())
      .then((data) => {
        setState({ type: "response", value: data });
      })
      .catch((e) => {
        setState({
          type: "response",
          value: { ok: false, msg: "Unable to connect with servers" },
        });
      })
      .finally(() => {
        setState({ type: "submit", value: false });
      });
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div>
      <Helmet>
        <title>{url.get("name")} | Service Enquiry</title>
      </Helmet>
      <Navbar filled />
      <Container className="py-5">
        <fieldset
          style={{ border: "1px solid var(--bs-primary)", borderRadius: 10 }}
        >
          <legend style={{ float: "none", width: "auto", marginLeft: 10 }}>
            <h3 className="text-uppercase text-primary">
              Service Enquiry Form
            </h3>
          </legend>

          <form
            method="POST"
            name="form"
            className="p-4 pb-6"
            onSubmit={handleSubmit}
          >
              <h5 className={`text-${state.response.ok?'success':'danger'} text-center`}>
                  {
                      state.response?state.response.msg:null
                  }
              </h5>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    placeholder="organisation/individual name"
                    className="form-control"
                    value={state.name}
                    onChange={(e) => {
                      setState({ value: e.target.value, type: "name" });
                    }}
                  />
                  <label htmlFor="name" className="form-text">
                    organisation/individual name
                  </label>
                </div>
              </div>
              {/* Email */}
              <div className="col-12 col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-control "
                    value={state.email}
                    onChange={(e) => {
                      setState({ value: e.target.value, type: "email" });
                    }}
                  />
                  <label htmlFor="name" className="form-text">
                    Email Address
                  </label>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div>
                  <select
                    className="form-control"
                    placeholder="Select Sevice"
                    multiple
                    ref={servicesRef}
                  >
                    <option vlaue="hard">
                      Hardaware Maintenace And repairs
                    </option>
                    <option vlaue="hard">
                      Hardaware Maintenace And repairs
                    </option>
                    <option vlaue="hard">
                      Hardaware Maintenace And repairs
                    </option>
                    <option vlaue="hard">
                      Hardaware Maintenace And repairs
                    </option>
                  </select>
                  <label className="form-text">
                    hold <code>CTRL</code> + click to select muiltiple
                  </label>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <input
                  className="form-control"
                  type="tel"
                  placeholder="phone number"
                  value={state.tel}
                  onChange={(e) =>
                    setState({ type: "phone", value: e.target.value })
                  }
                />
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    placeholder="additional information"
                    className="form-control"
                    style={{ height: 100 }}
                    value={state.info}
                    onChange={(e) => {
                      setState({ value: e.target.value, type: "info" });
                    }}
                  ></textarea>
                  <label>Addtional information</label>
                </div>
              </div>
              <button
                className="btn btn-primary text-white"
                disabled={state.submitting}
              >
                {state.submitting ? "Submitting Request" : "Enquire"}
              </button>
            </div>
          </form>
        </fieldset>
      </Container>

      <Footer />
    </div>
  );
}
