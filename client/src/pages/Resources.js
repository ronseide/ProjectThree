import React from "react";
import "./style.css";


function Resources() {
    return (
        <div class="container">
            <body>
                <div class="row">
                <div class="col-md-12">
                <h1>What is Cryptocurrency?</h1><br></br>
                {/* <img src="./images/resourcesPhoto1.jpg" alt="Resources" id="resourcesPhoto"></img> */}
                <br></br>
                The world of crypto-currencies is an exciting place. Less than a decade old, crypto-currencies are a revolution in both how societies think about money and how savvy investors can reap profits. But this world is not without its dangers and the un-initiated can suffer untold losses. 
                At Crypto-Currency Tracker, we don't just provide an easy means of tracking current and potential investments, we provide a range of links to informative articles that represent differing views on the market: a general overview, positive views and even more negative points of view.
                <br></br><br></br> 
                Click the links below to get started!
                <br></br><br></br>
                <div class="divider">
                        <hr class="left" /><img src="./images/lineGraph1.png" width="25px" height="25px"alt="Line Graph" id="lineGraph"></img>
                        <hr class="right" />
                        <br></br>
                        <br></br>

                    </div>
                </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                    <i class="far fa-smile face"></i>

                    {/* <img src="https://mdbootstrap.com/img/Photos/Avatars/img(31).jpg" class="img-fluid z-depth-1 rounded-circle"
                    lt="Responsive image" /> */}
                    <br></br><br></br>
                        Information on the pros of crypto-currency investing
                        <ul class="resourceLinks">
                            <li><a href="http://www.google.com">Link 1</a></li>
                            <li><a href="http://www.google.com">Link 2</a></li>
                            <li><a href="http://www.google.com">Link 3</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                    <i class="far fa-meh face"></i>
                    {/* <img src="https://mdbootstrap.com/img/Photos/Avatars/img(31).jpg" class="img-fluid z-depth-1 rounded-circle"
                    lt="Responsive image" /> */}
                    <br></br><br></br>
                        General information on crypto-currency investing<br></br><br></br>
                        <ul class="resourceLinks">
                            <li><a href="http://www.google.com">Link 1</a></li>
                            <li><a href="http://www.google.com">Link 2</a></li>
                            <li><a href="http://www.google.com">Link 3</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                    <i class="far fa-frown face"></i>

                    {/* <img src="https://mdbootstrap.com/img/Photos/Avatars/img(31).jpg" class="img-fluid z-depth-1 rounded-circle"
                    lt="Responsive image" /> */}
                                            <br></br><br></br>
                        Information on the cons of crypto-currency investing
                        <ul class="resourceLinks">
                            <li><a href="http://www.google.com">Link 1</a></li>
                            <li><a href="http://www.google.com">Link 2</a></li>
                            <li><a href="http://www.google.com">Link 3</a></li>
                        </ul>

                    </div>



                </div>
            </body>
        </div>
    );
}

export default Resources;