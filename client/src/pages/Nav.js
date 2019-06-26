import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";


function Nav(props) {
  return (
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
      {/* <Link to="/signup" className="btn">
          Sign Up
      </Link>&nbsp; */}
      <Login>

      </Login>
      <SignUp>

      </SignUp>
      <div> 

      </div>
     
      
 

{/* <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#!">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Dropdown</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar> */}

</div>
  )}

export default Nav;