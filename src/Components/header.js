import React, { Fragment } from "react";
import { Link } from "react-router-dom";
//import Dropdown from "react-bootstrap/Dropdown";
import "./home.css";
import logo from "../Components/Logo.png";

const Header = () => {
  return (
    <Fragment>
      {/* <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="stylesheet" href="style.css" />
      
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
        
          <a className="navbar-brand" href="home">
            <a className="navbar-brand" href="home">
              <img
                src="https://www.drrahulagarwal.in/wp-content/uploads/2022/06/top_logo11.jpg"
                className="logo"
                alt="logo"
              />
            </a>
          </a>
          <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              color="white"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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
                          
                        >
                          Glue Treatmeant
                        </Link>
                      </li>
                      <li>
                        <a href="home">Liser Treatmeant</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              
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

             
              <div className="contact_button  ">
                    <Link to="/book-an-appointment" >
                      Book an Appointment
                    </Link>
                  </div>
            </ul>
          </div>
        </div>
      </nav> */}
      <div className="bg-white">
        <link rel="stylesheet" href="style.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="index.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <nav className="navbar navbar-expand-lg navbar-light bg-blue fixed-top">
          <div className="container text-align-left">
            <a className="navbar-brand" href="home">
              <a className="navbar-brand" href="home">
                <img src={logo} className="food-munch-logo"  />
              </a>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              color="white"
            >
              <span className="navbar-toggler-icon " />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="navbar-nav ml-auto">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="header-menuhs">
                    <Link to="/" id="nav-link" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="header-menu">
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
                            >
                              Glue Treatmeant
                            </Link>
                          </li>
                          <li>
                            <a href="home">Liser Treatmeant</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

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

                  
                </ul>
                <div className="contact_button  ">
                    <Link to="/book-an-appointment">Book an Appointment</Link>
                  </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};
export default Header;
