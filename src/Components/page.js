import React, { Fragment } from "react";
import "./about.css";

const Page = () => {
  return (
    <Fragment>
      {/*Start Blog Area*/}
      <section className="blog_area">
        <div className="container">
          <div className="row">
            <div className="col-sm-2 col-sm-offset-5">
              <div className="blog_title text-center">
                <h2>Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="blog">
              <div className="col-md-4 col-xs-12">
                <div className="ind_blog">
                  <article>
                    <header>
                      <h2>Lorem ipsum dolor sit amet.</h2>
                      <ul className="list-inline">
                        <li>
                          <a href>
                            Author | <span>Momin</span>
                          </a>
                        </li>
                        <li>
                          <a href>
                            Published | <span>20-16-2017</span>
                          </a>
                        </li>
                      </ul>
                    </header>
                    <section>
                      <div className="blog_news">
                        <div className="blog_image">
                          <figure>
                            <img
                              className="img-responsive"
                              src="https://i.imgur.com/hxiPgcK.jpg"
                              alt="mongo"
                            />
                            <figcaption className="text-center">
                              <small>Lorem ipsum dolor sit.</small>
                            </figcaption>
                          </figure>
                        </div>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aspernatur, beatae cum distinctio dolore ducimus
                          eaque repellendus suscipit. Dignissimos doloremque,
                          impedit provident sit voluptatem voluptates. Ad autem
                          id non numquam quod.
                        </p>
                      </div>
                    </section>
                    <section>
                      <footer className="blog_news_footer">
                        <div className="row">
                          <div className="col-xs-6">
                            <div className="blog_news_cat pull-left">
                              <small>
                                Category <span>Javascript</span>
                              </small>
                            </div>
                          </div>
                          <div className="col-xs-6">
                            <div className="blog_news_readmore pull-right">
                              <a className="btn btn-sm btn-warning" href>
                                Readmore
                              </a>
                            </div>
                          </div>
                        </div>
                      </footer>
                    </section>
                  </article>
                </div>
              </div>
              <div className="col-md-4 col-xs-12">
                <div className="ind_blog">
                  <article>
                    <header>
                      <h2>Lorem ipsum dolor sit amet.</h2>
                      <ul className="list-inline">
                        <li>
                          <a href>
                            Author | <span>Momin</span>
                          </a>
                        </li>
                        <li>
                          <a href>
                            Published | <span>20-16-2017</span>
                          </a>
                        </li>
                      </ul>
                    </header>
                    <section>
                      <div className="blog_news">
                        <div className="blog_image">
                          <figure>
                            <img
                              className="img-responsive"
                              src="https://i.imgur.com/zQIlCOu.jpg"
                              alt="mongo"
                            />
                            <figcaption className="text-center">
                              <small>Lorem ipsum dolor sit.</small>
                            </figcaption>
                          </figure>
                        </div>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aspernatur, beatae cum distinctio dolore ducimus
                          eaque repellendus suscipit. Dignissimos doloremque,
                          impedit provident sit voluptatem voluptates. Ad autem
                          id non numquam quod.
                        </p>
                      </div>
                    </section>
                    <section>
                      <footer className="blog_news_footer">
                        <div className="row">
                          <div className="col-xs-6">
                            <div className="blog_news_cat pull-left">
                              <small>
                                Category <span>Javascript</span>
                              </small>
                            </div>
                          </div>
                          <div className="col-xs-6">
                            <div className="blog_news_readmore pull-right">
                              <a className="btn btn-sm btn-warning" href>
                                Readmore
                              </a>
                            </div>
                          </div>
                        </div>
                      </footer>
                    </section>
                  </article>
                </div>
              </div>
              <div className="col-md-4 col-xs-12">
                <div className="ind_blog">
                  <article>
                    <header>
                      <h2>Lorem ipsum dolor sit amet.</h2>
                      <ul className="list-inline">
                        <li>
                          <a href>
                            Author | <span>Momin</span>
                          </a>
                        </li>
                        <li>
                          <a href>
                            Published | <span>20-16-2017</span>
                          </a>
                        </li>
                      </ul>
                    </header>
                    <section>
                      <div className="blog_news">
                        <div className="blog_image">
                          <figure>
                            <img
                              className="img-responsive"
                              src="https://i.imgur.com/iTSjCKD.jpg"
                              alt="mongo"
                            />
                            <figcaption className="text-center">
                              <small>Lorem ipsum dolor sit.</small>
                            </figcaption>
                          </figure>
                        </div>
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aspernatur, beatae cum distinctio dolore ducimus
                          eaque repellendus suscipit. Dignissimos doloremque,
                          impedit provident sit voluptatem voluptates. Ad autem
                          id non numquam quod.
                        </p>
                      </div>
                    </section>
                    <section>
                      <footer className="blog_news_footer">
                        <div className="row">
                          <div className="col-xs-6">
                            <div className="blog_news_cat pull-left">
                              <small>
                                Category <span>Javascript</span>
                              </small>
                            </div>
                          </div>
                          <div className="col-xs-6">
                            <div className="blog_news_readmore pull-right">
                              <a className="btn btn-sm btn-warning" href>
                                Readmore
                              </a>
                            </div>
                          </div>
                        </div>
                      </footer>
                    </section>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <p className="blog_see_all text-center">
            <a className="btn btn-lg btn_outline" href>
              <span className="blog_icon">
                <i className="fa fa-file" /> Read out the Blog
              </span>
            </a>
          </p>
        </div>
      </section>
      {/*End Blog Area*/}
    </Fragment>
  );
};
export default Page;
