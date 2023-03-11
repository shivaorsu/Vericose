import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/home";
import About from "./Components/about";
import Service from "./Components/service";
import Contact from "./Components/contact";
import Blog from "./Components/blog";
import Glue from "./Components/glue";
import Appointment from "./Components/appointment";
import Admin from "./Components/Admin/admin";
import Post from "./Components/Admin/post";


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
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/glue-treatment">
          <Glue />
        </Route>
        <Route path="/book-an-appointment">
          <Appointment />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
        
      </Switch>
    </Fragment>
  );
}

export default App;
