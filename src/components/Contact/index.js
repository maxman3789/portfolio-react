import React from "react";
import "./style.css";

// https://herotofu.com/solutions/guides/react-contact-form

function Contact() {
  return (
    <>
      <form id="form">
      <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Name"
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Email"
                />
              </div>
              <br />
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              <br />
              <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary btn-lg">
                Submit
              </button>
            </div>
            </form>
    </>  
    );
}

export default Contact;