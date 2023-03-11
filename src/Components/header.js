import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "./home.css";

const Header = () => {
  return (
    <Fragment>
      {/* Required meta tags */}
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="stylesheet" href="style.css" />
      {/* Bootstrap CSS */}
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <nav className="navbar navbar-expand-lg nav-back fixed-top" id="mainNav">
        <div className="container">
          {/* <a className="navbar-brand" href="#">
            <img
              src="https://www.drrahulagarwal.in/wp-content/uploads/2022/06/top_logo11.jpg"
              className="logo"
            />
          </a> */}
          <a className="navbar-brand" href="home">
            <a className="navbar-brand" href="home">
              <img
                src="https://www.drrahulagarwal.in/wp-content/uploads/2022/06/top_logo11.jpg"
                className="logo"
              />
            </a>
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-syringe fa-2x" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" id="nav-link" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" id="nav-link" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" id="nav-link" className="nav-link">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/diseases" id="nav-link" className="nav-link">
                  Diseases
                </Link>
              </li>
              <div className="header-menu">
                <ul>
                  <li>
                    <a href="#">Treatmeant</a>
                    <ul className="text-left">
                      <li>
                        <Link
                          to="/glue-treatment"
                          id="nav-link"
                          className="nav-link"
                          href="#"
                        >
                          Glue Treatmeant
                        </Link>
                      </li>
                      <li>
                        <a href="#">Liser Treatmeant</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* <Link to="/Treatmeant" id="nav-link" className="nav-link">
                  Treatment
                  
                </Link> */}
              {/* <li className="nav-item">
                <div to="./treatment" id="nav-link" className="nav-link">
                  Treatment
                  
                </div>
                
              </li> */}
              <li className="nav-item">
                <Link to="/blog" id="nav-link" className="nav-link">
                  Blog
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" id="nav-link" className="nav-link">
                  Contact
                </Link>
              </li>

              {/* <div className="text-center">
                <Link
                  to="/make "
                  id="nav-link"
                  className="contact_button"
                >
                  Make appointment
                </Link>
              </div> */}
              <div className="text-center">
                    <Link to="/book-an-appointment" className="contact_button ">
                      Book an Appointment
                    </Link>
                  </div>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
export default Header;
