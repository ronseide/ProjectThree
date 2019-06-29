import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";


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
      <Link className="btn" to="/dashboard" hidden={!props.user} user={props.user}>
          Dashboard
      </Link>&nbsp;
      <Link className="btn" to="" data-toggle="modal" data-target="#modalRegisterForm">
          Sign Up
      </Link>&nbsp;
      <Link className="btn" to="" data-toggle="modal" data-target="#modalLoginForm" id="loginButton">
          Login
      </Link>&nbsp;


      </div>

      <Login setUser={props.setUser}  user={props.user} history={props.history}>

      </Login>
      
      <SignUp>

      </SignUp>

</div>
  )}

export default Nav;