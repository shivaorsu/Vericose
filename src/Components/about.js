import React, { Fragment } from "react";
import Header from "./header";
import about from "../Components/about.jpg";
import Work from "./working";
import Footer from "./footer";
import "./about.css";
import Testimonail from "./testimonial";

const AboutUser = () => {
  return (
    <Fragment>
      <Header />
      <section id="hero" className="d-flex align-items-center">
        <div className="container text-center position-relative">
          <h1>24/7 Care is available</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            deleniti.
          </h2>
          {/* <a href="#about" className="main-btn">
              Get Started
            </a> */}
        </div>
      </section>
      <Work />

      <div className="half-half-image-textr">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Our Work</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="contentr">
                <p className="pr">
                  At Fluid Automotive, our purpose is to make automotive parts
                  easily accessible for everyone. Working with our partner
                  brands, we aim to retail the highest quality parts, whilst
                  maintaining a high level of customer satisfaction.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div
                className="img"
                style={{
                  background:
                    'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9dj42YeFaCrxHTQ-hRRxklE6hGkk-R0qUZA&usqp=CAU")no-repeat center',
                  backgroundSize: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Responsive Team Section Using HTML5 , CSS3 , Bootstrap 4</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/fontawesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:500,700&display=swap"
          rel="stylesheet"
        />
        <section className="section-team">
          <div className="container">
            {/* Start Header Section */}
            <div className="row justify-content-center text-center">
              <div className="col-md-8 col-lg-6">
                <div className="header-section">
                  <h3 className="small-title">Our Blog</h3>
                  {/* <h2 className="title">Let's meet with our team members</h2> */}
                </div>
              </div>
            </div>
            {/* / End Header Section */}
            <div className="row">
              {/* Start Single Person */}
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="single-person">
                  <div className="person-image">
                    <img src="https://i.ibb.co/G2CBWvb/person1.jpg" alt />
                    {/* <span className="icon">
                <i className="fab fa-html5" />
              </span> */}
                  </div>
                  <div className="person-info">
                    <h3 className="full-name">John Doe</h3>
                    <span className="speciality">Medical</span>
                  </div>
                </div>
              </div>
              {/* / End Single Person */}
              {/* Start Single Person */}
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="single-person">
                  <div className="person-image">
                    <img src="https://i.ibb.co/nbpNr4r/person2.jpg" alt />
                    {/* <span className="icon">
                <i className="fab fa-wordpress-simple" />
              </span> */}
                  </div>
                  <div className="person-info">
                    <h3 className="full-name">Robert Smith</h3>
                    <span className="speciality">Medical</span>
                  </div>
                </div>
              </div>
              {/* / End Single Person */}
              {/* Start Single Person */}
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="single-person">
                  <div className="person-image">
                    <img src="https://i.ibb.co/25zdRMr/person3.jpg" alt />
                    {/* <span className="icon">
                <i className="fab fa-angular" />
              </span> */}
                  </div>
                  <div className="person-info">
                    <h3 className="full-name">John Doe</h3>
                    <span className="speciality">Medical</span>
                  </div>
                </div>
              </div>
              {/* / End Single Person */}
              {/* Start Single Person */}
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="single-person">
                  <div className="person-image">
                    <img src="https://i.ibb.co/w0ynr2Q/person4.jpg" alt />
                    {/* <span className="icon">
                <i className="fab fa-js" />
              </span> */}
                  </div>
                  <div className="person-info">
                    <h3 className="full-name">John Smith</h3>
                    <span className="speciality">Medical</span>
                  </div>
                </div>
              </div>
              {/* / End Single Person */}
            </div>
          </div>
        </section>
      </div>
      <div>
        <div className="row justify-content-center text-center">
          <div className="col-md-8 col-lg-6">
            <div className="header-section">
              <h3 className="small-title">Our Journey</h3>
              {/* <h2 className="title">Let's meet with our team members</h2> */}
            </div>
          </div>
        </div>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic"
          rel="stylesheet"
          type="text/css"
        />
        {/* The Timeline */}
        <ul className="timeline">
          {/* Item 1 */}
          <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="flag">Freelancer</span>
                <span className="time-wrapper">
                  <span className="time">2013 - present</span>
                </span>
              </div>
              <div className="desc">
                My current employment. Way better than the position before!
              </div>
            </div>
          </li>
          {/* Item 2 */}
          <li>
            <div className="direction-l">
              <div className="flag-wrapper">
                <span className="flag">Apple Inc.</span>
                <span className="time-wrapper">
                  <span className="time">2011 - 2013</span>
                </span>
              </div>
              <div className="desc">
                My first employer. All the stuff I've learned and projects I've
                been working on.
              </div>
            </div>
          </li>
          {/* Item 3 */}
          <li>
            <div className="direction-r">
              <div className="flag-wrapper">
                <span className="flag">Harvard University</span>
                <span className="time-wrapper">
                  <span className="time">2008 - 2011</span>
                </span>
              </div>
              <div className="desc">
                A description of all the lectures and courses I have taken and
                my final degree?
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Testimonail />
      <Footer />
    </Fragment>
  );
};
export default AboutUser;
