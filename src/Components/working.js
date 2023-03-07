import React, { Fragment } from "react";

const Work = () => {
  return (
    <Fragment>
      
      <div>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* Bootstrap CSS */}
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="style.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
        />
        <title>Blog Section Design </title>
        <section id="about-section" className="p-100 pb-2 bg-one-dark">
          <div className="container">
            <div className="row d-flex align-items-end">
              <div className="col-md-6 text-center">
                <img
                  src="https://www.drrahulagarwal.in/wp-content/uploads/2022/06/dr_profile.jpg"
                  alt="Signature"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
                <p className="color-base">ABOUT US!</p>
                <h2 className="text-black mb-4">
                  My Real Life is Up to You? I am a{" "}
                  <span className="color-base">Vascular and Endovascular Specialist</span>
                </h2>
                <p>
                  I’m  Developer and graphic designer living in
                  India. I spend my days with my hands in many different areas
                  of UI development from back end programming to front end
                  engineering.
                </p>
                <div className="row">
                  <div className="col-md-6 about-bullet">
                    <ul className="bullet-check">
                      <li>Different of web development</li>
                      <li>Gun Violence Prevention</li>
                      <li>Eiusmod tempor incidid labore</li>
                    </ul>
                  </div>
                  <div className="col-md-6 about-bullet">
                    <ul className="bullet-check">
                      <li>Graphic designer living</li>
                      <li>Jiusmod tempor incididunt</li>
                    </ul>
                  </div>
                </div>
                <div className="wrap-button mt-50">
                  {/* <a
                    href="#"
                    className="btn btn-medium btn-inline btn-fill mr-4"
                  >
                    Know more
                  </a> */}
                </div>
              </div>
            </div>
            {/* <div className="about-info-wrap p-100">
              <div className="about-info p-5">
                <div className="row">
                  <div className="col-md-4">
                    <h6 className="text-white text-uppercase mb-4">
                      Contact Now
                    </h6>
                    <p>
                      <i className="fas fa-envelope-open-text mr-2 color-base" />
                      freebootstrapui@gmail.com
                    </p>
                    <p>
                      <i className="fas fa-phone-alt mr-2 color-base" />
                      +012 345 678 910
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h6 className="text-white text-uppercase mb-4">Address</h6>
                    <p>
                      <i className="fas fa-map-marker-alt mr-2 color-base" />
                      145 heera nager, jaipur ,India
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h6 className="text-white text-uppercase mb-4">
                      Social Media
                    </h6>
                    <p>
                      <i className="far fa-comment-alt mr-2 color-base" />
                      Also find us social media below
                    </p>
                    <div className="inline-social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-pinterest-p" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        {/* Optional JavaScript */}
        {/* jQuery first, then Popper.js, then Bootstrap JS */}
      </div>
    </Fragment>
  );
};
export default Work;
