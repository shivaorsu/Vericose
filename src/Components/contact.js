import React, { Fragment } from "react";
import Header from "./header";
import "./services.css";
import Footer from "./footer";
import {FaRegAddressBook} from 'react-icons/fa';

const Contact = () => {
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
      <section className="contact-page-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-map-marked" />
                  </div>
                  <div className="contact-info-text">
                    <h2>address</h2>
                    <span>1215 Lorem Ipsum, Ch 176080 </span>
                    <span>Chandigarh , INDIA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="contact-info-text">
                    <h2>E-mail</h2>
                    <span>info@LoremIpsum.com</span>
                    <span>yourmail@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-clock" />
                  </div>
                  <div className="contact-info-text">
                    <h2>Contact us</h2>
                    <span>9160903004</span>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="contact-page-form" method="post">
                <h2>Get in Touch</h2>
                <form action="contact-mail.php" method="post">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="text"
                          placeholder="Your Name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="email"
                          placeholder="E-mail"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          name="phone"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="text"
                          placeholder="City*"
                          name="City*"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 message-input">
                      <div className="single-input-field">
                        <textarea
                          placeholder="Write Your Message"
                          name="message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="single-input-fieldsbtn">
                      <input type="submit" defaultValue="Send Now" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-page-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109741.02912911311!2d76.69348873658222!3d30.73506264436677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1553497921355"
                  width="100%"
                  height={450}
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};
export default Contact;
