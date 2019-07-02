import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import SignUp from "../SignUp/SignUp";


function Home() {
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>CryptoTracker</h1>
          <p>
            Cryptocurrency is amongst the most exciting financial developments to occur over the past decades. No longer tied to governments and precious metals, cryptocurrencies allow companies and entities to create whole new means of measuring value, conducting trade and building wealth. Millions of people around the world are today holding cryptocurrencies as a means of exchange and as an investment. <strong>Cryptocurrency investments can result in the resources needed for the finer things in life like yachts, mansions and luxury automobiles. </strong>
  
            Like any investment, cryptocurrencies promise both reward but also risk. These risks can be mitigated by building knowledge and paying close attention to the markets. At CryptoTracker, we help people do just that: we provide a range of information on cryptocurrencies plus an easy way to monitor your investments all from a single, integrated dashboard.
  
            <strong>Sign up to CryptoTracker today to step into the exciting world of cryptocurrency!</strong>
          </p>
          <Link className="btn" to="" data-toggle="modal" data-target="#modalRegisterForm">
            Sign Up
      </Link>&nbsp;
          <SignUp className="btn">
            Sign Up
      </SignUp>
          <br></br>
          <div class="divider">
            <hr class="left" /><img src="./images/lineGraph1.png" width="25px" height="25px" alt="Line Graph" id="lineGraph"></img>
            <hr class="right" />
            <br></br>
            <br></br>

          </div>

        </div>
        <div class="col"><br></br><br></br>



          <div id="carousel-example-1z" class="carousel slide carousel-fade" data-ride="carousel">

            <ol class="carousel-indicators">
              <li data-target="#carousel-example-1z" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-example-1z" data-slide-to="1"></li>
              <li data-target="#carousel-example-1z" data-slide-to="2"></li>
            </ol>

            <div class="carousel-inner" role="listbox">

              <div class="carousel-item active">
                <img class="d-block w-100 h-200" src="./images/yacht2.png" alt="First slide" />
              </div>
              {/* <div class="carousel-item active">
                <img class="d-block w-100 h-200" src="https://mdbootstrap.com/img/Photos/Slides/img%20(141).jpg" alt="First slide" />
              </div> */}


              <div class="carousel-item">
                <img class="d-block w-100 h-200"
                  src="./images/mansion.png" alt="Second slide" />
              </div>


              {/* <div class="carousel-item">
                <img class="d-block w-100 h-200" src="https://mdbootstrap.com/img/Photos/Slides/img%20(136).jpg" alt="Second slide" />
              </div> */}

              <div class="carousel-item">
                <img class="d-block w-100 h-200" src="./images/rollsRoyce.png" alt="Third slide" />
              </div>

              {/* <div class="carousel-item">
                <img class="d-block w-100 h-200" src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg" alt="Third slide" />
              </div> */}

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
          <br></br>
          <br></br>
          <br></br>
        </div>

      </div>
    </div>



  )
}

export default Home;