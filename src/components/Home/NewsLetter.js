import React, { useState } from "react";
import { MdMail as Mail } from "@react-icons/all-files/md/MdMail";

export default function NewsLetter() {
  const [email, setMail] = useState("");
  const handleChange = (e) => {
    setMail(e.target.value);
  };
  const sendRequest = ()=>{
    fetch("http://localhost:8888/addEmail.php",{
      headers:{
        "content-type":"application/x-www-form-urlencoded; charset=UTF-8",
        "access-control-request-method":"POST"
      },
      method:"POST",
      body:`email=${email}`
    }).then(res=>res.json())
    .then(data=>console.log(data))
  }
  return (
    <div className="news-letter bg-primary text-light py-6">
      <div className="container text-center">
        <small>Want Help or More Info? Simply</small>
        <h3>Sign up for our news letter</h3>
        <div className="input-group my-4">
          <input
            className="form-control form-control text-primary text-center "
            type="mail"
            value={email}
            onChange={handleChange}
          />
          <label className="input-group-text bg-dark">
            <button className="btn text-white bg-l-primary" onClick={()=>sendRequest()}>
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
        <button className="btn btn-light mt-4" >Just Mail Us Directly</button>
      </div>
    </div>
  );
}
