import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";


function Nav(props) {
  return (
    <div>
    <div id="nav">
      
      <Link className="btn" to="/">
          Home
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