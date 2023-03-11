import React, { Fragment } from "react";
import "./blog.css";
import Header from "./header";
import Footer from "./footer";
import { BsLungsFill } from "react-icons/bs";

const Blog = () => {
  return (
    <Fragment>
      <Header />
      <div className=" row  pt-4">
        <div className="col-sm-8 col-md-8 col-lg-8 ">
          <div className="blog-content">
            <summary>
              <h1 className="my">My First Blog Post</h1>
              <div className="blog-date">23 Dec 2016</div>
            </summary>
            <p>
              loremm ipsum dolor sit amet, consectetur adipiscing elit. Ut
              rhoncus at enim sit amet maximus. Nunc sagittis auctor diam, sed
              efficitur ante viverra quis. Mauris eu enim quis odio rutrum
              porttitor nec sed quam. Nunc vel varius urna. Sed et imperdiet
              lorem. Curabitur in quam vel quam bibendum feugiat. Pellentesque
              eget nunc sapien. Maecenas condimentum orci id arcu tincidunt, ut
              mollis metus pharetra. Nullam semper tempus emauris, eget laoreet
              nibh bibendum vel. Etiam condimentum, metus quis scelerisque
              congue, neque arcu scelerisque ligula, at consectetur felis urna
              vitae justo.
            </p>
          </div>
          <div className="blog-img">
            <div className="blog-img-caption">
              <b>Pictured</b> Some Cool Skyline
            </div>
          </div>
          <div className="blog-content">
            <p>
              Sed accumsan suscipit lorem, eget rhoncus ante elementum a.
              Vestibulum feugiat tellus quis finibus suscipit. Quisque
              ultricies, nibh ac molestie mattis, ipsum nisi interdum leo, eu
              condimentum erat mi non tellus. Sed sodales, nulla vitae dapibus
              fringilla, turpis ligula laoreet purus, sed euismod quam massa
              vitae lorem. Nunc sit amet facilisis ante, eu fringilla massa.
              Aenean tristique erat et ipsum ultrices, at iaculis urna gravida.
              Praesent sit amet augue vitae dui maximus vulputate sed quis quam.
              Integer mattis, metus nec efficitur rhoncus, felis nisl bibendum
              nibh, sed feugiat eros ex ut quam. Quisque posuere semper
              malesuada. Maecenas at mauris in ex molestie luctus. Integer
              maximus, enim ut ultrices sagittis, nisl turpis placerat ipsum,
              eget pellentesque nisl felis eu nunc.
            </p>
            <p>
              Pellentesque sed leo non elit lobortis elementum eget vitae risus.
              Etiam ac elit neque. Ut ultricies vulputate eros, ut fringilla
              velit hendrerit sed. Mauris ullamcorper quam et massa mollis
              sodales. Proin ut dui maximus nulla consequat lacinia a nec
              lectus. Sed lobortis pellentesque felis at volutpat. Praesent id
              nunc eu arcu vulputate sollicitudin non a quam. Duis laoreet et
              turpis et porttitor. Proin magna dolor, pellentesque ac vestibulum
              eu, bibendum eu libero. Phasellus faucibus ex tortor, vitae
              sagittis dui pulvinar in. Nullam ut dui lectus. Cras at posuere
              risus, id maximus purus.{" "}
            </p>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-4  ">
          <div className="panel panel-default">
            <div className="panel-body">
              {/* <h4 className="text-center">Search for Posts!</h4> */}
              <form role="Form" method="GET" action acceptCharset="UTF-8">
                <div className="form-group">
                  <div className="input-group">
                    {/* <input
                      className="form-control"
                      type="text"
                      name="search"
                      placeholder="Search..."
                      required
                    /> */}
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="submit">
                        <span
                          className="glyphicon glyphicon-search"
                          aria-hidden="true"
                        />
                      </button>
                    </span>
                  </div>
                </div>
              </form>

              <h5 className="ym">Victor Santiago</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <h4 className="text-center">Popular Posts!</h4>
              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <img
                    src="https://images.pexels.com/photos/301930/pexels-photo-301930.jpeg?h=350&auto=compress&cs=tinysrgb"
                    alt
                    className="img-thumbnail img-responsive"
                  />
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <h5>Images by pexels.com</h5>
                  <p className="text-muted">
                    <span
                      className="glyphicon glyphicon-calendar"
                      aria-hidden="true"
                    />{" "}
                    Jan/21/2018
                  </p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <img
                    src="https://images.pexels.com/photos/34601/pexels-photo.jpg?h=350&auto=compress&cs=tinysrgb"
                    alt
                    className="img-thumbnail img-responsive"
                  />
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <h5>Images by pexels.com</h5>
                  <p className="text-muted">
                    <span
                      className="glyphicon glyphicon-calendar"
                      aria-hidden="true"
                    />{" "}
                    Jan/21/2018
                  </p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <img
                    src="https://images.pexels.com/photos/459688/pexels-photo-459688.jpeg?h=350&auto=compress&cs=tinysrgb"
                    alt
                    className="img-thumbnail img-responsive"
                  />
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <h5>Images by pexels.com</h5>
                  <p className="text-muted">
                    <span
                      className="glyphicon glyphicon-calendar"
                      aria-hidden="true"
                    />{" "}
                    Jan/21/2018
                  </p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <img
                    src="https://images.pexels.com/photos/273222/pexels-photo-273222.jpeg?h=350&auto=compress&cs=tinysrgb"
                    alt
                    className="img-thumbnail img-responsive"
                  />
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <h5>Images by pexels.com</h5>
                  <p className="text-muted">
                    <span
                      className="glyphicon glyphicon-calendar"
                      aria-hidden="true"
                    />{" "}
                    Jan/21/2018
                  </p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <img
                    src="https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?h=350&auto=compress&cs=tinysrgb"
                    alt
                    className="img-thumbnail img-responsive"
                  />
                </div>
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                  <h5>Images by pexels.com</h5>
                  <p className="text-muted">
                    <span
                      className="glyphicon glyphicon-calendar"
                      aria-hidden="true"
                    />{" "}
                    Jan/21/2018
                  </p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};
export default Blog;
