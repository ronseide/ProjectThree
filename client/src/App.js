import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./pages/Nav";
import Home from "./pages/Home"
import Resources from "./pages/Resources";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Footer from "./pages/Footer";
import Login from "./pages/Login";


class App extends Component {

  render() {
    return (
<Router>
    <div>
    <Nav 
      />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Resources" component={Resources}/>
    <Route exact path="/About" component={About}/>
    <Route exact path="/Dashboard" component={Dashboard}/>
    <Route exact path="/SignUp" component={SignUp}/>
  
    </Switch>

    <Footer />
  </div>
  </Router>
    )
}
}

export default App;
