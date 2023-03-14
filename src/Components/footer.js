import React, { Fragment } from "react";
//import { BsLungsFill } from "react-icons/bs";

const Footer = () => {
  return (
    <Fragment>
      ;
      <div>
        {/* <div className="dummy_page">Mobile responsive footer</div> */}
        {/* FOOTER START */}
        <div className="footer">
          <div className="contain">
            <div className="col">
              <h1>Company</h1>
              <ul>
                <li>About</li>
                <li>Mission</li>
                <li>Services</li>
                <li>Social</li>
                <li>Get in touch</li>
              </ul>
            </div>
            <div className="col">
              <h1>Products</h1>
              <ul>
                <li>About</li>
                <li>Mission</li>
                <li>Services</li>
                <li>Social</li>
                <li>Get in touch</li>
              </ul>
            </div>
            <div className="col">
              <h1>Accounts</h1>
              <ul>
                <li>About</li>
                <li>Mission</li>
                <li>Services</li>
                <li>Social</li>
                <li>Get in touch</li>
              </ul>
            </div>
            <div className="col">
              <h1>Resources</h1>
              <ul>
                <li>Webmail</li>
                <li>Redeem code</li>
                <li>WHOIS lookup</li>
                <li>Site map</li>
                <li>Web templates</li>
                <li>Email templates</li>
              </ul>
            </div>
            <div className="col">
              <h1>Support</h1>
              <ul>
                <li>Contact us</li>
                <li>Web chat</li>
                <li>Open ticket</li>
              </ul>
            </div>
            <div className="col social">
              <h1>Social</h1>
              <ul>
                <li>
                  {/* <a className="btn btn-back btn-social mx-2" href="#!">
                    <i className="fab fa-twitter" />
                  </a> */}
                </li>
                <li>
                  <a className="btn btn-back btn-social mx-2" href="#!">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a className="btn btn-back btn-social mx-2" href="#!">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="clearfix" />
            <div className="col-lg-4 text-center">
              Copyright © Your Website 2020
            </div>
          </div>
        </div>
        
        {/* END OF FOOTER */}
      </div>
    </Fragment>
  );
};
export default Footer;
