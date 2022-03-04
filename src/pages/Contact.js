import React from "react";
import Contact from "../components/Contact/index";

function ContactPage() {
  return (
    <section className="section">
      <div className="container has-text-centered">
        <article className="about-me-content">
          <h1>Contact Me and Let's Talk.</h1>
          <br />
          <Contact />
        </article>
      </div>
    </section>
  );
}

export default ContactPage;