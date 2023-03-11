import React, { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";

const Appointment = () => {
  return (
    <Fragment>
      <Header />
      <section className="contact-page-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="contact-page-formbp" method="post">
                <h2>
                  Dr. Rahul Agarwal - Vascular and Endovascular Specialist
                </h2>
                <p>Book your Appointment</p>
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
                          placeholder="Reason for appointment"
                          name="Reason for appointment"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="date"
                          placeholder="select data of an appointment"
                          name="select data of an appointment"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="single-input-field">
                        <input
                          type="text"
                          placeholder="select time of an appointment*"
                          name="select time of an appointment"
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
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};
export default Appointment;
