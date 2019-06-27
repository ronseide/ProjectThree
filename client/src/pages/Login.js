import React from "react";
import "./style.css";
import axios from "axios";

class Login extends React.Component{
    state = {
        email: "",
        password: "",
    }

    handleClick = () => {
        console.log(this.state.email);
        console.log(this.state.password);
        axios
        .post("http://localhost:3001/users/login", 
        {     email: this.state.email,
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
    
            <div className="container">
    
    
                <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header text-center">
                                <h4 class="modal-title w-100 font-weight-bold">Login</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body mx-3">
                                <div class="md-form mb-5">
                                    
                                    <input onChange={(e) => this.updateInput("email", e)} type="email" id="defaultForm-email" class="form-control validate" placeholder="Email" />
                                 
                                </div>
    
                                <div class="md-form mb-4">
                                
                                    <input onChange={(e) => this.updateInput("password", e)} type="password" id="defaultForm-pass" class="form-control validate" placeholder="Password"/>
                                    
                                </div>
    
                            </div>
                            <div class="modal-footer d-flex justify-content-center">
                                <button onClick={() => this.handleClick()} class="btn btn-default">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="text-center">
                    <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginForm">Login</a>
                </div>
            </div>
        
    
    
                
            
        );
      }
}


export default Login;