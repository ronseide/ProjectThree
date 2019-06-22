import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./pages/Nav/Nav";
import Home from "./pages/Home/Home"
import Resources from "./pages/Resources/Resources";
import About from "./pages/About/About";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignUp from "./pages/SignUp/SignUp";
import Footer from "./pages/Footer/Footer";








// import Home from "./pages/Home";
// import Saved from "./pages/Saved";
// import NotFound from "./pages/NotFound";


class App extends Component {

  render() {
    return (
<Router>
    <div>
    <Nav />
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
