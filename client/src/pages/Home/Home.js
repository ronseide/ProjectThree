import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import SignUp from "../SignUp/SignUp";


function Home () {
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Crypto Collecter</h1>
          <p>
          ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
          </p>
          <Link className="btn" to="" data-toggle="modal" data-target="#modalRegisterForm">
          Sign Up
      </Link>&nbsp;
          <SignUp  className="btn">
          Sign Up
      </SignUp>
        </div>
        <div class="col">



          <div id="carousel-example-1z" class="carousel slide carousel-fade" data-ride="carousel">

            <ol class="carousel-indicators">
              <li data-target="#carousel-example-1z" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-example-1z" data-slide-to="1"></li>
              <li data-target="#carousel-example-1z" data-slide-to="2"></li>
            </ol>

            <div class="carousel-inner" role="listbox">

              <div class="carousel-item active">
                <img class="d-block w-100 h-200" src="https://mdbootstrap.com/img/Photos/Slides/img%20(141).jpg" alt="First slide" />
              </div>

              <div class="carousel-item">
                <img class="d-block w-100 h-200" src="https://mdbootstrap.com/img/Photos/Slides/img%20(136).jpg" alt="Second slide" />
              </div>

              <div class="carousel-item">
                <img class="d-block w-100 h-200" src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg" alt="Third slide" />
              </div>

            </div>

            <a class="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>

          </div>
        </div>

      </div>
    </div>
   


   )
}

export default Home;