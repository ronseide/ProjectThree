import React from "react";
import "./style.css";
import axios from "axios";
import CurrencyChart from "./CurrencyChart/currencyChart"


class Dashboard extends React.Component {
    state = {
        currency_name: "",
        user_id: this.props.user.user_id,
        currency_names: [],
        // new_names:""
        new_names: []
        // new_names["currency"] = "";
    };

    componentDidMount() {
        this.getCurrencies()
    }

    handleX(){}


    handleClick = (e) => {
        axios
            .post("http://localhost:3001/currencies/currency",
                {
                    currency_name: e.target.value,
                    user_id: this.props.user.user_id,
                

                })
            .then((res) => {
               console.log(this.state.currency_name);
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
            .get(`http://localhost:3001/currencies/currency/${this.state.user_id}`)
            .then((res) => {
                let currency_names = res.data;
                console.log(currency_names);
                currency_names = currency_names.filter(element => element.currency_name != "");
                console.log(currency_names);
                for (let i  = 0; i < currency_names.length; i++ ) {
                    if (currency_names[i].currency_name ){

                    
                    axios.get(`https://api.coincap.io/v2/assets/${currency_names[i].currency_name}/markets`)
                    .then((res) => {
                        const currencyInfo = res.data.data[0];
                       currency_names[i].info=currencyInfo; 
                        console.log(currencyInfo);
                    })

                    console.log(currency_names[i]);
                }
                }
                  
                this.setState({ currency_names });
                console.log(this.state.currency_names);
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
        if(!this.state.currency_names.length) {
            return null;
        }

        let currecies = this.state.currency_names.map((currency) => {
            return (
                <CurrencyChart 
                currency={currency.currency_name}
                priceUsd={currency}/> 
                
                
            )
        })
                return(
            <div className = "container" >
                        <body>
                            <div className="row">
                                <div className="col-md-12">
                                    <h1>CryptoTracker</h1>
                                    <h2 className="welcomeMess"> Hi, {this.props.user.user_name}. <br /> Welcome to your Dashboard.</h2>
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
                                            // this.handleClick(e)
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
                                        <button className="btn" onClick={(e)  => (this.handleClick(e))}>  Select Currencies </button>
                                    </div>

                                </div>
                                <div className="col-md-6" id="dashboardList">
                                    <br></br>
                                    To remove a crypto-currency from tracking, simply click the "X" beside the item.
                        <br></br>
                                    <br></br>
                                    <ul>
                                        {this.state.currency_names.map((currency) => {
                                            return (<li>{currency.currency_name} <button onClick={this.handleX} type="button" class="btn btn-link btn-sm" id="deleteButton">X</button></li>)
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
                                {currecies}

                                <div className="col-md-12" id="dashboardTracker">
                                    <br></br>
                                    
                                    
                                           
                
                                        </div>
                                    </div>
                                </div>
                                
                           
                        </body>
            </div>

        );
    }
}

export default Dashboard;