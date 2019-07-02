import React from "react";
import "./style.css";

window.onload = function() {
    function DashboardDropDown (theEvent) {
        console.log("DashboardDropDown is alive")
        console.log(theEvent.srcElement.innerHTML)
    }

    var dropDownItems = document.getElementsByClassName("dropdown-item");
    console.log("ITEMS");
    console.log(dropDownItems);
    console.log(dropDownItems.length);
    console.log("LENGTH: " + dropDownItems.length);
    for (var i = 0; i < dropDownItems.length; i ++) {
        //dropDownItems[i].addEventListener ("click",DashboardDropDown)
        console.log("Event listener " + dropDownItems[i]);
        dropDownItems[i].addEventListener ("click", function(event) {
            DashboardDropDown(event);
        });
     }
}
function Dashboard() {
    console.log("MAKING THE DASHBOARD");
     
    return (
        <div className="container">
            <body>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Crypto-Currency Tracker</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6" id="dashboardDropdown">
                        <br></br>
                        To select the crypto-currencies you wish to track, please select items from the below dropdown by clicking on any of them. Your tracked crypto-currencies will appear at right.
                    <br></br>
                        <br></br>
                        <div className="dropdown">
                            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select&nbsp;&nbsp;
  </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button className="dropdown-item" type="button" >Bitcoin</button>
                                <button className="dropdown-item" type="button">Litecoin</button>
                                <button className="dropdown-item" type="button">Ethereum</button>
                                <button className="dropdown-item" type="button">Zcash</button>
                                <button className="dropdown-item" type="button">Dash</button>
                                <button className="dropdown-item" type="button">Ripple</button>
                                <button className="dropdown-item" type="button">Monero</button>
                                <button className="dropdown-item" type="button">Bitcoin Cash</button>
                                <button className="dropdown-item" type="button">NEO</button>
                                <button className="dropdown-item" type="button">Cardano</button>
                                <button className="dropdown-item" type="button">EOS</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" id="dashboardList">
                        <br></br>
                        To remove a crypto-currency from tracking, simply click the "X" beside the item.
                        <br></br>
                        <br></br>
                        <ul>
                            <li>Bitcoin <button type="button" class="btn btn-link btn-sm">Remove</button></li>
                            <li>Dash <button type="button" class="btn btn-link btn-sm">Remove</button></li>
                            <li>NEO <button type="button" class="btn btn-link btn-sm">Remove</button></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12" id="dashboardTracker">
                        <br></br>
                        <h3>Tracking</h3>
                        <hr></hr>
                        <div>
                            <h4>Bitcoin</h4>
                            <p>
                                <strong>Price Range (Past 30 Days):&nbsp;</strong> $7.87 - $11.76
                                <br></br>
                                <strong>30 Day Average Trading Volume (Shares, Thousands Per Day):&nbsp;</strong> 120,456
                                <br></br>
                                <strong>30 Average Market Cap (Millions):&nbsp;</strong> $90,543
                                <br></br>
                                <hr></hr>
                            </p>
                            <h4>Dash</h4>
                            <p>
                                <strong>Price Range (Past 30 Days):&nbsp;</strong> $1.23 - $4.56
                                <br></br>
                                <strong>30 Day Average Trading Volume (Shares, Thousands Per Day):&nbsp;</strong> 78,901
                                <br></br>
                                <strong>30 Average Market Cap (Millions):&nbsp;</strong> $234,567
                                <br></br>
                                <hr></hr>
                            </p>
                            <h4>NEO</h4>
                            <p>
                                <strong>Price Range (Past 30 Days):&nbsp;</strong> $6.78 - $9.10
                                <br></br>
                                <strong>30 Day Average Trading Volume (Shares, Thousands Per Day):&nbsp;</strong> 345,861
                                <br></br>
                                <strong>30 Average Market Cap (Millions):&nbsp;</strong> $56,432
                                <br></br>
                                <hr></hr>
                            </p>
                        </div>
                    </div>
                </div>
        </body>
        </div>

    );
}

export default Dashboard;