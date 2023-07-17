import React, { useReducer } from "react";
import Container from "../../Components/Container";
import Navbar from "../../Components/navbar";
import "../../css/style.css";
import Helmet from "react-helmet";
import Footer from "../../Components/footer";
import { MetaTags } from "react-meta-tags";

export default function Enquire() {
  let url = [];
  var serviceName = "";
  if (typeof window != "undefined") {
    url = new URLSearchParams(window.location.search);
    serviceName =  url.get("name");
  }

  const inputReducer = (state, actions) => {
    switch (actions.type) {
      case "name":
        return { ...state, name: actions.value };
      case "email":
        return { ...state, email: actions.value };
      case "info":
        return { ...state, info: actions.value };
      case "service":
        return { ...state, service: actions.value };
      case "phone":
        return { ...state, phone: actions.value };
      case "submit":
        return { ...state, submitting: actions.value };
      case "response":
        return { ...state, response: actions.value };
      case "clear":
        return {
          phone: "",
          service: "",
          info: "",
          email: "",
          name: "",
          response: state.response,
        };
      default:
        return state;
    }
  };

  const [state, setState] = useReducer(inputReducer, {});

  const handleSubmit = (e) => {
    if (typeof window == "undefined") return;
    setState({ type: "submit", value: true });
    fetch("https://esinigeria.com.ng/api/submit_service_request.php", {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "access-control-request-method": "POST",
      },
      body: `name=${state.name}&email=${state.email}&service=${state.service}&phone=${state.phone}&info=${state.info}`,
    })
      .then((res) => res.json())
      .then((data) => {
        setState({ type: "response", value: data });
        setState({ type: "clear" });
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
      <MetaTags>
        <title>{serviceName} | Service Enquiry</title>
        <meta name="keywords" content="ESI Nigeria, Services, IT Services" />
        <meta name="description" content={`Enquire for ${serviceName}}`} />
        <script src="/bootsrap.min.js"></script>
        <link rel="canonical" href="https://www.esinigeria.com.ng/services/enquire/" />
      </MetaTags>
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
            <h5
              className={`text-${
                state.response && state.response.ok ? "success" : "danger"
              } text-center`}
            >
              {state.response ? state.response.msg : null}
            </h5>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    value={state.name}
                    onChange={(e) => {
                      setState({ value: e.target.value, type: "name" });
                    }}
                    required
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
                    className="form-control "
                    value={state.email}
                    onChange={(e) => {
                      setState({ value: e.target.value, type: "email" });
                    }}
                    required
                  />
                  <label htmlFor="name" className="form-text">
                    Email Address
                  </label>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-floating">
                  <select
                    className="form-control form-custom"
                    onChange={(e) =>
                      setState({ type: "service", value: e.target.value })
                    }
                    required
                    id="service-list"
                  >
                    <option value="HARDWARE MAINTAINANCE AND REPAIRS" selected={serviceName==="HARDWARE MAINTAINANCE AND REPAIRS"}>
                      HARDWARE MAINTAINANCE AND REPAIRS
                    </option>
                    <option value="INTERNET SUPPORT/ BACK-UP" selected={serviceName==="INTERNET SUPPORT/ BACK-UP"}>
                      INTERNET SUPPORT/ BACK-UP
                    </option>
                    <option value="CONNECTIVITY AND NETWORK SECURITY" selected={serviceName==="CONNECTIVITY AND NETWORK SECURITY"}>
                      CONNECTIVITY AND NETWORK SECURITY
                    </option>
                    <option value="TRAINING AND CONSULTING SERVICES" selected={serviceName==="TRAINING AND CONSULTING SERVICES"}>
                      TRAINING AND CONSULTING SERVICES
                    </option>
                    <option value="WEBSITE IMPLEMENTATION AND DESIGN" selected={serviceName==="WEBSITE IMPLEMENTATION AND DESIGN"}>
                      WEBSITE IMPLEMENTATION AND DESIGN
                    </option>
                  </select>
                  <label htmlFor = "service-list" className="form-text">
                    <code>Click</code> to select service
                  </label>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-floating">
                  <input
                    className="form-control"
                    type="tel"
                    value={state.tel}
                    onChange={(e) =>
                      setState({ type: "phone", value: e.target.value })
                    }
                    id="phone"
                    required
                  />
                  <label className="form-text" htmlFor="phone">Phone Number</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    style={{ height: 100 }}
                    value={state.info}
                    onChange={(e) => {
                      setState({ value: e.target.value, type: "info" });
                    }}
                    id="additional"
                  ></textarea>
                  <label htmlFor="additional">Addtional information</label>
                </div>
              </div>
              <button
                className="btn btn-primary text-white"
                disabled={state.submitting}
              >
                {state.submitting ? (
                  <div className="d-flex justify-content-center align-items-center flex-row">
                    <div>
                      <span className="spinner-grow"></span>
                    </div>
                    <div>Submitting Request....</div>
                  </div>
                ) : (
                  "Enquire"
                )}
              </button>
            </div>
          </form>
        </fieldset>
      </Container>
      <Footer />
    </div>
  );
}
