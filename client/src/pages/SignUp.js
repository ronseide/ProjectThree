import React from "react";
import "./style.css";
import axios from "axios";

class SignUp extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",  
  };

  handleClick = () => {
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.email);
    console.log(this.state.password);
    axios
      .post("http://localhost:3001/users/register", 
    {first_name: this.state.firstName,
       last_name: this.state.lastName,
        email: this.state.email,
         password: this.state.password,
        })
 }

  updateInput = (input, event) => {
    event.persist();
    console.log(event);
    console.log(input);
    this.setState({[input]:event.target.value});

  }

  render() {
    return(
    
      <div className="SignUp">
              <div class="modal fade" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
              aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header text-center">
                    <h4 class="modal-title w-100 font-weight-bold">Sign up</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body mx-3">
                    <div class="md-form mb-5">
                    
                      <input onChange={(e) => this.updateInput("firstName", e)} type="text" id="orangeForm-name" class="form-control validate" placeholder="First Name"/>
                      
                    </div>
      
                    <div class="md-form mb-5">
                    
                      <input  onChange={(e) => this.updateInput("lastName", e)} type="text" id="orangeForm-name" class="form-control validate" placeholder="Last Name"/>
                     
                    </div>
                    <div class="md-form mb-5">
                      
                      <input onChange={(e) => this.updateInput("email", e)} type="email" id="orangeForm-email" class="form-control validate" placeholder="Your email address"/>
                     
                    </div>
            
                    <div class="md-form mb-4">
                     
                      <input onChange={(e) => this.updateInput("password", e)} type="password" id="orangeForm-pass" class="form-control validate" placeholder="Password"/>
                     
                    </div>
            
                  </div>
                  <div class="modal-footer d-flex justify-content-center">
                    <button onClick={() => this.handleClick()} class="btn btn-default">Sign up</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="text-center">
              <a href=""  class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalRegisterForm">Sign Up</a>
            </div>
            </div>
                  
              
          );
  }
}




export default SignUp;