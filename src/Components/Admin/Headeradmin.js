import React from "react";
import { Link } from "react-router-dom";
//import transitions from "bootstrap";
import { Fragment } from "react";
//import "./Admin.css";
import "./admin.css";
//import "./style.css";

const HeaderAdmin = ({ active, setActive, user, handleLogout }) => {
  const userId = user?.uid;
  return (
    <Fragment>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid bg-faded padding-media">
          <div className="container padding-media">
            <nav className="navbar navbar-toggleable-md navbar-light">
              <button
                className="navbar-toggler mt-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                data-bs-parent="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="true"
                aria-label="Toggle Navigation"
              >
                <span className="fa fa-bars"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <Link to="/homeadmin" style={{ textDecoration: "none" }}>
                    <li
                      className={`nav-item  ${
                        active === "home" ? "active" : ""
                      }`}
                      onClick={() => setActive("home")}
                    >
                      Home
                    </li>
                  </Link>
                  <Link to="/blogs" style={{ textDecoration: "none" }}>
                    <li
                      className={`nav-item nav-link ${
                        active === "blogs" ? "active" : ""
                      }`}
                      onClick={() => setActive("blogs")}
                    >
                      Blogs
                    </li>
                  </Link>

                  <Link to="/create" style={{ textDecoration: "none" }}>
                    <li
                      className={`nav-item nav-link ${
                        active === "create" ? "active" : ""
                      }`}
                      onClick={() => setActive("create")}
                    >
                      Create
                    </li>
                  </Link>

                  <Link to="/about" style={{ textDecoration: "none" }}>
                    <li
                      className={`nav-item nav-link ${
                        active === "about" ? "active" : ""
                      }`}
                      onClick={() => setActive("about")}
                    >
                      About
                    </li>
                  </Link>
                </ul>
                <div className="row g-3">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {userId ? (
                      <>
                        <div className="profile-logo">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                            alt="logo"
                            style={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "50%",
                              marginTop: "12px",
                            }}
                          />
                        </div>
                        <p style={{ marginTop: "12px", marginLeft: "5px" }}>
                          {user?.displayName}
                        </p>
                        <li
                          className="nav-item nav-link"
                          onClick={handleLogout}
                        >
                          Logout
                        </li>
                      </>
                    ) : (
                      <Link to="/auth" style={{ textDecoration: "none" }}>
                        <li
                          className={`nav-item nav-link ${
                            active === "login" ? "active" : ""
                          }`}
                          onClick={() => setActive("login")}
                        >
                          Login
                        </li>
                      </Link>
                    )}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </nav> */}
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
             
              <Link to="/" style={{ textDecoration: "none" }}>
              <span className="icon" >
                  <i className="fas fa-home" />
                  
                </span>
                  <li
                    className={` nav-link ${
                      active === "home" ? "active" : ""
                    }`}
                    onClick={() => setActive("home")}
                  >
                    Home
                  </li>
                </Link>
            </li>
            <Link to="/create" style={{ textDecoration: "none" }}>
                    <li
                      className={`nav-item nav-link ${
                        active === "create" ? "active" : ""
                      }`}
                      onClick={() => setActive("create")}
                    >
                      Create
                    </li>
                  </Link>
              
              
             

              {/* <Link to="/Treatmeant" id="nav-link" className="nav-link">
                  Treatment
                  
                </Link> */}
              {/* <li className="nav-item">
                <div to="./treatment" id="nav-link" className="nav-link">
                  Treatment
                  
                </div>
                
              </li> */}
              

              
              {/* <div className="text-center">
                <Link
                  to="/make "
                  id="nav-link"
                  className="contact_button"
                >
                  Make appointment
                </Link>
              </div> */}
              
            </ul>
          </div>
        </div>
      </nav>

    </Fragment>
  );
};

export default HeaderAdmin;
