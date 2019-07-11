import React from "react";
import "./style.css";
import axios from "axios";


class Dashboard extends React.Component {
    state = {
        currency_name: "",
        user_id: this.props.user.user_id,
        currency_names: [],
        // new_names:""
        // new_names: [];
        // new_names["currency"] = "";
    };

    componentDidMount() {
        this.getCurrencies()
    }


    handleClick = (e) => {
        axios
            .post("/currencies/currency",
                {
                    currency_name: e.target.value,
                    user_id: this.props.user.user_id,
                

                })
            .then((res) => {
                console.log(res);
                console.log("The state of currency_name is")
                console.log(this.state.currency_name);
                console.log("The state of currency_names is")
                console.log(this.state.currency_names)
                this.setState({new_names:this.state.currency_name})

            })
            .catch((err) => {
                console.log(err);
            })
    }
    getCurrencies = (e) => {
        axios
            .get(`/currencies/currency/${this.state.user_id}`)
            .then((res) => {
                const currency_names = res.data;
                this.setState({ currency_names });
                console.log(res);
            })
            .catch((err) => console.log(err))
    }



    updateInput = (event) => {
        console.log(event)
        this.setState({ currency_name: event.target.value }, function () {
            console.log(this.state)
            });
            // this.setState({new_names:this.state.currency_name}, function () {
            //     console.log("new_name is")
            //     console.log(this.state)
            // }
            // )
        }
    
    
    render() {
                return(
            <div className = "container" >
                        <body>
                            <div className="row">
                                <div className="col-md-12">
                                    <h1>CryptoTracker</h1>
                                    <h2> Hi, {this.props.user.user_name}. <br /> Welcome to your Dashboard.</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6" id="dashboardDropdown">
                                    <br></br>
                                    To select the crypto-currencies you wish to track, please select items from the below dropdown by clicking on any of them. Your tracked crypto-currencies will appear at right.
                    <br></br>
                                    <br></br>
                                    <div className='react-select-container'>
                                        <select onChange={(e) => {
                                            this.updateInput(e)
                                            this.handleClick(e)
                                            // this.getCurrencies(e)
                                            console.log("On Change fired")
                                        }
                                        }>
                                            <option value="Bitcoin">Bitcoin</option>
                                            <option value="Litecoin">Litecoin</option>
                                            <option value="Ethereum">Ethereum</option>
                                            <option value="Zcash">Zcash</option>
                                            <option value="Dash">Dash</option>
                                            <option value="Ripple">Ripple</option>
                                            <option value="Monero">Monero</option>
                                            <option value="Bitcoin Cash">Bitcoin Cash</option>
                                            <option value="NEO">NEO</option>
                                            <option value="Cardano">Cardano</option>
                                            <option value="EOS">EOS</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6" id="dashboardList">
                                    <br></br>
                                    To remove a crypto-currency from tracking, simply click the "X" beside the item.
                        <br></br>
                                    <br></br>
                                    <ul>
                                        {this.state.currency_names.map((currency) => {
                                            return <li>{currency.currency_name} <button type="button" class="btn btn-link btn-sm" id="deleteButton">X</button></li>
                                        })}
                                    </ul>
                                    <li>{this.state.new_names}</li>
                                    <ul>
                                    {/* {this.state.new_names.map((currency) => {
                                            return <li>{currency} <button type="button" class="btn btn-link btn-sm" id="deleteButton">X</button></li>
                                        })} */}
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
}

export default Dashboard;