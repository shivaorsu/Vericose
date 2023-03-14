import React, { Fragment } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  "https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8RIPfXYFy4-2OS9D3yV2txoDaByq_m9G1SA&usqp=CAU",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];
const Banner = () => {
  return (
    <Fragment>
      <div className="banner-section-bg-container d-flex justify-content-center flex-column" b>
        <Fade>
        <div className="banner-section-bg-container d-flex justify-content-center flex-column">
            <img src={fadeImages[0]} alt="web" />
          </div>
          <div className="banner-section-bg-container d-flex justify-content-center flex-column">
            <img src={fadeImages[1]} alt="web" />
          </div>
          <div className="banner-section-bg-container d-flex justify-content-center flex-column">
            <img src={fadeImages[2]} alt="webs" />
          </div>
        </Fade>
      </div>
    </Fragment>
  );
};
export default Banner;