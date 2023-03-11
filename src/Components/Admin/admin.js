import React, { Fragment } from "react";
import "./admin.css";
import AdminFooter from "./adminfooter";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <Fragment>
      <div>
        {/*Design by foolishdeveloper.com*/}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style dangerouslySetInnerHTML={{ __html: "\n\n    " }} />
        <div className="wrapper">
          <div className="section">
            <div className="top_navbar">
              <div className="hamburger">
                <a href="#">
                  <i className="fas fa-bars" />
                </a>
              </div>
            </div>
            <div className="container">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div className="sidebar">
            <div className="profile">
              <img
                src="https://www.drrahulagarwal.in/wp-content/uploads/2022/06/dr_profile.jpg"
                alt="profile_picture"
              />
              <h3>Dr Rahul Agarwal</h3>
              <p>Vascular and Endovascular Specialist</p>
            </div>
            <ul>
              <li>
                <Link to="/admin" href="#"  >
                  <span className="icon" >
                    <i className="fas fa-home" />
                    
                  </span>
                  <span to="/admin" className="item">Home</span>
                 
                </Link>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <i className="fas fa-desktop" />
                  </span>
                  <span className="item">My Dashboard</span>
                </a>
              </li>
              <li>
                <Link to="/post" href="#">
                  <span className="icon">
                    <i className="fas fa-user-friends" />
                  </span>
                  <span className="item">Post</span>
                </Link>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <i className="fas fa-tachometer-alt" />
                  </span>
                  <span className="item">List</span>
                </a>
              </li>
              <li>
                <Link to="/edit" href="#">
                  <span className="icon">
                    <i className="fas fa-database" />
                  </span>
                  <span className="item">Edit post</span>
                </Link>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <i className="fas fa-chart-line" />
                  </span>
                  <span className="item">Reports</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <i className="fas fa-user-shield" />
                  </span>
                  <span className="item">Admin</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <i className="fas fa-cog" />
                  </span>
                  <span className="item">Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <AdminFooter/>
    </Fragment>
  );
};
export default Admin;
