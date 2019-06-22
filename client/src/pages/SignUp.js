import React from "react";
import "./style.css";


function SignUp() {
    return(
    
 <div>

        <form class="text-center border border-light p-5 signUpForm">

            <p class="h4 mb-4">Sign up</p>

            <div class="form-row mb-4">
                <div class="col">

                    <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name" />
                </div>
                <div class="col">

                    <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name" />
                </div>
            </div>


            <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail" />

            <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" />
            
            <button class="btn btn-info my-4 btn-block" type="submit">Sign in</button>  
            
        </form>
   </div>
    


            
        
    );
}

export default SignUp;