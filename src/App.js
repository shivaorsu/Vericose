import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/home";
import About from "./Components/about";
import Service from "./Components/service";
import Contact from "./Components/contact";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services">
          <Service />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
