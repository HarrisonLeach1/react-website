import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";

//components
import Footer from "./components/reusable/Footer";
import Header from "./components/reusable/Header";
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";

//includes
import "./Assets/css/default.min.css";

class App extends Component {
  render() {
    return (
        <HashRouter>
          <div className="App">
            <Header />
            <Route exact path="/" component={Homepage} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Projects" component={Projects} />
            <Route exact path="/Resume" component={Resume} />
            <Route exact path="/Contact" component={Contact} />
            <Footer />
          </div>
        </HashRouter>
    );
  }
}

export default App;
