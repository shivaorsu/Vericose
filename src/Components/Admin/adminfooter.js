import React, { Fragment } from "react";
import "./admin.css";

const AdminFooter = () => {
  return (
    <Fragment>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright © 2017 All Rights Reserved by
                <a href="#">Scanfcode</a>.
              </p>
            </div>
            
          </div>
        </div>
      </footer>
    </Fragment>
  );
};
export default AdminFooter;
