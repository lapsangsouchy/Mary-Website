import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Gallery from "./components/pages/Gallery";
import Contact from "./components/pages/Contact";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Fragment>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
