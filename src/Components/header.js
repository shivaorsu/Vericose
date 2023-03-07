import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  return (
    <Fragment>
      <title>Title</title>
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
          <a className="navbar-brand" href="#">
           <img src="https://www.drrahulagarwal.in/wp-content/uploads/2022/06/top_logo11.jpg"/>
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
                <div class="dropdown-content">
                  <a href="#">Glue Treatment for Varicose veins</a>
                  <a href="#">Liser Treatment for Varicos</a>
                  
                </div>
              </li>
              <li className="nav-item">
                <Link to="/diseases" id="nav-link" className="nav-link">
                  Diseases
                </Link>
              </li>

              {/* <Link to="/Treatmeant" id="nav-link" className="nav-link">
                  Treatment
                  
                </Link> */}
              <li className="nav-item">
                <div to="./treatment" id="nav-link" className="nav-link">
                  Treatment
                  <i class="fa fa-caret-down"></i>
                </div>
                <div class="dropdown-content">
                  <a href="#">Aortic Aneurysm</a>
                  <a href="#">Aortic Dissection</a>
                  <a href="#">Vascular Access</a>
                </div>
              </li>
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

              {/* <li className="nav-item">
                  <a className="nav-link" href="#signup">
                    Contact
                  </a>
                </li> */}
              <div className="text-center">
                <button type="submit" className="contact_button">
                  Make appointment
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
export default Header;
