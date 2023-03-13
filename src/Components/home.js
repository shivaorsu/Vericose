import React, { Fragment } from "react";
import Work from "./working";
import "./home.css";
import Header from "./header";
import { BsLungsFill } from "react-icons/bs";
import Testimonail from "./testimonial";
import Footer from "./footer";
import Banner from "./banner";
//import UpHeader from "./header1";
const HomeUser = () => {
  return (
    <Fragment>
      <div>
        
        <Header />

        {/* End Header */}
        {/* ======= Hero Section ======= */}
        {/* <section id="hero" className="d-flex align-items-center">
          <div className="container text-center position-relative">
            <h1>24/7 Care is available</h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
              deleniti.
            </h2>
            <a href="#about" className="main-btn">
              Get Started
            </a>
          </div>
        </section> */}
        <Banner/>

        {/* End Hero */}
        {/* ======= Services Section ======= */}
        <section id="services" className="services mt-5 mb-3 py-3">
          <div className="container">
            <div className="section-title">
              <h2 className="text-center">Services</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur quam optio esse earum voluptatibus repellat?
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="service shadow">
                  <div className="icon">
                    <BsLungsFill className="fas fa-heart" />
                  </div>
                  <h4>
                    <a href>Lorem Ipsum</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur quam optio esse earum voluptatibus repellat?
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="service c shadow">
                  <div className="icon">
                    <BsLungsFill className="fas fa-map-signs" />
                  </div>
                  <h4>
                    <a href>Lungs</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur quam optio esse earum voluptatibus repellat?
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="service shadow">
                  <div className="icon">
                    <BsLungsFill className="fas fa-heart" />
                  </div>
                  <h4>
                    <a href>Lorem Ipsum</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur quam optio esse earum voluptatibus repellat?
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="service c shadow">
                  <div className="icon">
                    <BsLungsFill className="fas fa-heart" />
                  </div>
                  <h4>
                    <a href>Lorem Ipsum</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur quam optio esse earum voluptatibus repellat?
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="service shadow">
                  <div className="icon">
                    <BsLungsFill className="fas fa-heart" />
                  </div>
                  <h4>
                    <a href>Lorem Ipsum</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur quam optio esse earum voluptatibus repellat?
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="service shadow">
                  <div className="icon">
                    <BsLungsFill className="fas fa-heart" />
                  </div>
                  <h4>
                    <a href>Lorem Ipsum</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur quam optio esse earum voluptatibus repellat?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Work />
        <section className="contact">
          <div className="container">
            <div className="section-title text-center mt-5">
              <h2>Make appointment </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                accusamus.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-12">
                    <div className="contact-box">
                      <i className="fas fa-map-signs" />
                      <h3>Address</h3>
                      <p>Lorem Brasilia Zip code: 45687 </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-box mt-4">
                      <i className="fas fa-envelope" />
                      <h3>Email Us</h3>
                      <p>
                        test@example.com
                        <br />
                        contact@example.com
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-box mt-4">
                      <i className="fas fa-phone" />
                      <h3>Call Us</h3>
                      <p>
                        +55 61 1234 789 <br />
                        +55 61 123 4567
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <form>
                  <div className="form-row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={5}
                      defaultValue={""}
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit">Make appointment</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Testimonail />
        <section className="section-teamhm">
          <div className="container">
            {/* Start Header Section */}
            <div className="row justify-content-center text-center">
              <div className="col-md-8 col-lg-6">
                <div className="header-sectionhm">
                  <h3 className="small-titlehm">Our Blog</h3>
                  {/* <h2 className="title">Let's meet with our team members</h2> */}
                </div>
              </div>
            </div>
            {/* / End Header Section */}
            <div className="row">
              {/* Start Single Person */}
              <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="single-personhm">
                  <div className="person-imagehm">
                    <img src="https://i.ibb.co/G2CBWvb/person1.jpg" alt />
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
                <div className="single-personhm">
                  <div className="person-imagehm">
                    <img src="https://i.ibb.co/25zdRMr/person3.jpg" alt />
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
                <div className="single-personhm">
                  <div className="person-imagehm">
                    <img src="https://i.ibb.co/w0ynr2Q/person4.jpg" alt />
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
      <Footer />
    </Fragment>
  );
};
export default HomeUser;
