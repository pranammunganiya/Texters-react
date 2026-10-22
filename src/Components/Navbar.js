import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid"> 
        <Link className="navbar-brand" to="/"> 
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  <li className="nav-item">
    {/* <Link className="nav-link active" aria-current="page" to="/"> */}
    <Link className="nav-link active" aria-current="page" to="/"> 
      Home
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/about">
      {props.about}
    </Link>
  </li>
</ul>

          {/* Dark switch */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onChange={props.togglemode}
              checked={props.mode === "dark"}
              type="checkbox"
              role="switch"
              id="switchMode"
            />
            <label className="form-check-label" htmlFor="switchMode">
              Enable Dark Mode
            </label>
          </div>

          {/* Green switch */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onChange={props.togglemode1}
              checked={props.mode === "success"}
              type="checkbox"
              role="switch"
              id="switchGreen"
            />
            <label className="form-check-label" htmlFor="switchGreen">
              Enable Dark green Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "set title",
  about: "set about",
};