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
      <Link className="btn" to="/resources">
          Resources
      </Link>&nbsp;
      <Link className="btn" to="/about">
          About
      </Link>&nbsp;
      <Link className="btn" to="/dashboard">
          Dashboard
      </Link>&nbsp;
      <Link className="btn" to="" data-toggle="modal" data-target="#modalRegisterForm">
          Sign Up
      </Link>&nbsp;
      <Link className="btn" to="" data-toggle="modal" data-target="#modalLoginForm" id="loginButton">
          Login
      </Link>&nbsp;


      </div>

      <Login>

      </Login>
      
      <SignUp>

      </SignUp>

</div>
  )}

export default Nav;