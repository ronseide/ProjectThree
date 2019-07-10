import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";


function Nav(props) {
  return (
    <div>
    <div id="nav">
      
      <Link className="btn" to="/" id="brandButton">
      <img src="./images/lineGraph1.png" width="20px" height="20px"alt="Line Graph" id="lineGraph"></img>&nbsp;CryptoTracker
      </Link>&nbsp;
      <Link className="btn" to="/resources" id="resourcesButton">
          Resources
      </Link>&nbsp;
      <Link className="btn" to="/about" id="aboutButton">
          About
      </Link>&nbsp;
      <Link className="btn" to="/dashboard" id="dashButton" hidden={!props.user} user={props.user}>
          Dashboard
      </Link>&nbsp;
      <Link className="btn" to="" id="signUpButton" data-toggle="modal" data-target="#modalRegisterForm" hidden={props.user} user={props.user}>
          Sign Up
      </Link>&nbsp;
      <Link className="btn" to="" id="loginButton" data-toggle="modal" data-target="#modalLoginForm" id="loginButton" hidden={props.user} user={props.user}>
          Login
      </Link>&nbsp;


      </div>

      <Login setUser={props.setUser}  user={props.user} history={props.history}>

      </Login>
      
      <SignUp setUser={props.setUser}  user={props.user} history={props.history}>

      </SignUp>

</div>
  )}

export default Nav;