import React, { Fragment } from "react";
import Work from "./working";
import "./home.css";
import Header from "./header";
import {BsLungsFill} from 'react-icons/bs';
import Testimonail from "./testimonial";
import Footer from "./footer";

const Home = () => {
  return (
    <Fragment>
      <div>
        <Header/>
        
        {/* End Header */}
        {/* ======= Hero Section ======= */}
        <section id="hero" className="d-flex align-items-center">
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
        </section>
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
        {/* End Services Section */}
        {/* ======= About Section ======= */}
        
        {/*end of about section*/}
        {/* ======= Camps Section ======= */}
        {/* <section className="camp"> */}
          {/* <div className="container text-center">
      <h2 className="py-3">Medical Camps</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sint ad
        iusto cumque numquam in!
      </p>
    </div> */}
          {/* <div className="camp-grid">
      <div className="row">
        <div className="col-lg-3 col-sm-6 col-xs-12">
          <div className="card card-block">
            <img src="images/camp1.jpg" alt />
            <div className="camp-text">
              <div>
                <h3 className="card-title">Lorem Ipsum Dolor</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-xs-12">
          <div className="card card-block">
            <img src="images/camp2.jpg" alt />
            <div className="camp-text">
              <div>
                <h3 className="card-title">Lorem Ipsum Dolor</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-xs-12">
          <div className="card card-block">
            <img src="images/camp3.jpg" alt />
            <div className="camp-text">
              <div>
                <h3 className="card-title">Lorem Ipsum Dolor</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-xs-12">
          <div className="card card-block">
            <img src="images/camp4.jpg" alt />
            <div className="camp-text">
              <div>
                <h3 className="card-title">Lorem Ipsum Dolor</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-sm-6 col-xs-12">
          <div className="card card-block">
            <img src="images/camp7.jpg" alt />
            <div className="camp-text">
              <div>
                <h3 className="card-title">Lorem Ipsum Dolor</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-xs-12">
          <div className="card card-block">
            <img src="images/camp5.jpg" alt />
            <div className="camp-text">
              <div>
                <h3 className="card-title">Lorem Ipsum Dolor</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-xs-12">
          <div className="card card-block">
            <img src="images/camp6.jpg" alt />
            <div className="camp-text">
              <div>
                <h3 className="card-title">Lorem Ipsum Dolor</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-xs-12">
          <div className="card card-block">
            <img src="images/camp8.jpg" alt />
            <div className="camp-text">
              <div>
                <h3 className="card-title">Lorem Ipsum Dolor</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
        {/* </section> */}
        {/* End Portfolio Section */}
        {/* ======= Team Section ======= */}
        {/* <section id="team" className="team mt-5">
          <div className="container">
            <div className="row"> */}
              {/* <div className="col-lg-4">
          <div className="section-title">
            <h2>Team</h2>
            <p>
              Our Amazing hardworking and enthusiastic team. Our Amazing
              hardworking and enthusiastic team
            </p>
          </div>
        </div> */}
              {/* <div className="col-lg-8">
                <div className="row"> */}
                  {/* <div className="col-lg-6">
              <div className="member">
                <div className="image">
                  <img src="images/doc-3.jpg" className="img-fluid" alt />
                </div>
                <div className="member-info">
                  <h4>Jessica Chang</h4>
                  <span> Executive Officer</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <div className="social">
                    <a href>
                      <i className="fab fa-twitter" />
                    </a>
                    <a href>
                      <i className="fab fa-facebook" />
                    </a>
                    <a href>
                      <i className="fab fa-instagram" />
                    </a>
                    <a href>
                      {" "}
                      <i className="fab fa-linkedin" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
                  {/* <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="member">
                <div className="image">
                  <img src="images/doc-3.jpg" className="img-fluid" alt />
                </div>
                <div className="member-info">
                  <h4>Jacqueline Chang</h4>
                  <span>Medicine Department</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="social">
                    <a href>
                      <i className="fab fa-twitter" />
                    </a>
                    <a href>
                      <i className="fab fa-facebook" />
                    </a>
                    <a href>
                      <i className="fab fa-instagram" />
                    </a>
                    <a href>
                      {" "}
                      <i className="fab fa-linkedin" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
                  {/* <div className="col-lg-6 mt-4">
              <div className="member">
                <div className="image">
                  <img src="images/doc-2.jpg" className="img-fluid" alt />
                </div>
                <div className="member-info">
                  <h4>John Doe</h4>
                  <span>MS</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="social">
                    <a href>
                      <i className="fab fa-twitter" />
                    </a>
                    <a href>
                      <i className="fab fa-facebook" />
                    </a>
                    <a href>
                      <i className="fab fa-instagram" />
                    </a>
                    <a href>
                      {" "}
                      <i className="fab fa-linkedin" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
                  {/* <div className="col-lg-6 mt-4">
              <div className="member">
                <div className="image">
                  <img src="images/doc-2.jpg" className="img-fluid" alt />
                </div>
                <div className="member-info">
                  <h4>Jade Joe</h4>
                  <span>Accountant</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <div className="social">
                    <a href>
                      <i className="fab fa-twitter" />
                    </a>
                    <a href>
                      <i className="fab fa-facebook" />
                    </a>
                    <a href>
                      <i className="fab fa-instagram" />
                    </a>
                    <a href>
                      {" "}
                      <i className="fab fa-linkedin" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
                {/* </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* End Team Section */}
        {/* ======= Contact Section ======= */}
        <Work/>
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

        <Testimonail/>
        {/* End Contact Section */}
        {/* Footer*/}
        
        
      </div>
     <Footer/>
    </Fragment>
  );
};
export default Home;
