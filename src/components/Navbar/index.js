import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light transparent">
        <Link className="navbar-brand" to="/" id="navbar-brand">
          Melanie Bostwick
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to="/About"
                className={
                  window.location.pathname === "/About"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
              </Link>
            </li>
            <li className="nav-item" id="nav-item">
              <Link
                to="/Portfolio"
                className={
                  window.location.pathname === "/Portfolio"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item" id="nav-item">
              <Link
                to="/Contact"
                className={
                  window.location.pathname === "/Contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </Link>
            </li>

            <li className="nav-item" id="nav-item">
              <a
                className="nav-link"
                href="../files/ResumeMaxwellScheller-4.pdf"
                download="ResumeMaxwellScheller-4.pdf"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;