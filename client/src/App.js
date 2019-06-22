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








// import Home from "./pages/Home";
// import Saved from "./pages/Saved";
// import NotFound from "./pages/NotFound";


class App extends Component {
  state = {
    modal: false
  }

  handleLoginModal = () => {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
<Router>
    <div>
    <Nav 
      handleLoginModal={this.handleLoginModal}
    />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Resources" component={Resources}/>
    <Route exact path="/About" component={About}/>
    <Route exact path="/Dashboard" component={Dashboard}/>
    <Route exact path="/SignUp" component={SignUp}/>
  
    </Switch>

    <Footer />
    {this.state.modal ? <Login/> : null }
  </div>
  </Router>
    )
}
}
// Hello World

export default App;




// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
