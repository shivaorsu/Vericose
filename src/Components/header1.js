import React, { Fragment } from "react";
import "./about.css";
import { Link } from "react-router-dom";

const UpHeader = () => {
  return (
    <Fragment>
      <header>
        <section className="title-header-container">
          <h1>
            <span className="title-pattrn">PATTRN</span>
            <span className="title-party">PARTY</span>
          </h1>
        </section>
        <hr className="hr-header" />
        <section className="name-header-container">
          <h2 className="student-name">Francy Lang</h2>
        </section>
      </header>
    </Fragment>
  );
};
export default UpHeader;
