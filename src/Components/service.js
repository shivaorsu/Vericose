import React, { Fragment } from "react";
import Header from "./header";
import { BsLungsFill } from "react-icons/bs";
import Footer from "./footer";
import "./services.css";
const Service = () => {
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
      <section id="services" className="services mt-5 mb-3 py-3">
        <div className="container">
          <div className="section-title">
            <h2 className="text-center">Services</h2>
            {/* <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur quam optio esse earum voluptatibus repellat?
            </p> */}
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

      <div>
        {/* Header ends here */}
        {/* slider */}

        {/* slider ends */}
        {/* contents */}
        <section id="content">
          <div className="contaner">
            <div className="row">
              <div className="col-sm-12">
                <div className="head_title text-center">
                  <h1>what do we do ?</h1>
                </div>
                {/* Title */}
                <div className="service_area">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-6 col-xs-8">
                        <div className="single_service">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAvcID1kr8LKId3YAI3ic05_vQcrW87w6Xxw&usqp=CAU"
                            alt="service"
                          />
                        </div>
                      </div>
                      <div className="col-sm-5 col-sm-push-1">
                        <div className="single_service_content">
                          <h2 className="title">
                            <small>creative</small>
                            <br />
                            <strong>Vericose</strong>
                          </h2>
                          <div className="separator" />
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Est ratione cum vero reprehenderit dolorum,
                            perspiciatis error dolores asperiores, nam quo eos
                            quos quaerat atque laborum fuga commodi obcaecati?
                            Nihil, totam?
                          </p>
                          {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. In veritatis velit earum officia minima
                            expedita illo, nulla molestias rem, rerum iure
                            sequi, reprehenderit eaque eveniet, iste tempore
                            necessitatibus molestiae! Quisquam.
                          </p> */}
                          {/* <div className="work-button">
                            <a className="btn" href="#">
                              learn more
                            </a>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-5 col-sm-push-1">
                          <div className="single_service_content_right">
                            <div className="content">
                              <div className="row">
                                {" "}
                                <h2 className="title_right">
                                  <strong>installation</strong>
                                </h2>
                                <div className="separator" />
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Est ratione cum vero
                                  reprehenderit dolorum, perspiciatis error
                                  dolores asperiores, nam quo eos quos quaerat
                                  atque laborum fuga commodi obcaecati? Nihil,
                                  totam?
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. In veritatis velit earum
                                  officia minima expedita illo, nulla molestias
                                  rem, rerum iure sequi, reprehenderit eaque
                                  eveniet, iste tempore necessitatibus
                                  molestiae! Quisquam.
                                </p>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                        <div className="container">
                          <div className="row">
                            <div className="col-sm-6 col-xs-12">
                              <div className="single_service_right">
                                {" "}
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxh6G1gNMDRvNMI_xQ_Nb33y3mahKdD9Uw8t3Rsu_bvE9iz39_0E-jaVla0BhIQv-1b0s&usqp=CAU"
                                  alt="service"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="container">
                            <div className="row">
                              <div className="col-sm-6 col-xs-8">
                                {/* <div className="single_service">
                                  <img
                                    src="http://bootstrapthemes.co/demo/html/clemo-free-html5-multipurpose-portfolio-page-template/assets/images/service3.jpg"
                                    alt="service"
                                  />
                                </div> */}
                              </div>
                              <div className="col-sm-5 col-sm-push-1">
                                {/* <div className="single_service_content">
                                  <h2 className="title">
                                    <small>Print</small>
                                    <br />
                                    <strong>design</strong>
                                  </h2>
                                  <div className="separator" />
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Est ratione cum vero
                                    reprehenderit dolorum, perspiciatis error
                                    dolores asperiores, nam quo eos quos quaerat
                                    atque laborum fuga commodi obcaecati? Nihil,
                                    totam?
                                  </p>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. In veritatis velit earum
                                    officia minima expedita illo, nulla
                                    molestias rem, rerum iure sequi,
                                    reprehenderit eaque eveniet, iste tempore
                                    necessitatibus molestiae! Quisquam.
                                  </p>
                                  <div className="work-button">
                                    <a className="btn" href="#">
                                      learn more
                                    </a>
                                  </div>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* service ends here */}
      </div>

      <Footer />
    </Fragment>
  );
};
export default Service;
