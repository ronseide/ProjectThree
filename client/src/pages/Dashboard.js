import React from "react";
import "./style.css";
import axios from "axios";
import CurrencyChart from "./CurrencyChart/currencyChart"

class Dashboard extends React.Component {
    state = {
        currency_name: "",
        user_id: this.props.user.user_id,
        currency_names: []
    };

    componentDidMount() {
        this.getCurrencies()
    }


    handleClick = (e) => {
        axios
            .post("http://localhost:3001/currencies/currency",
                {
                    currency_name: e.target.value,
                    user_id: this.props.user.user_id,
                })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    getCurrencies = (e) => {
        axios
            .get(`http://localhost:3001/currencies/currency/${this.state.user_id}`)
            .then((res) => {
                const currency_names = res.data;
                this.setState({ currency_names });
                console.log(res);
            })
            .catch((err) => console.log(err))
    }

    handleClickDelete = (e) => {
        axios
            .post("http://localhost:3001/currencies/currency/remove",
            {
                id: this.props.user.id,
            })
            .then((res) => {
             console.log(res);
            })
            .catch((err) => {
                
                console.log(err)

                    
            })
        }


    updateInput = (event) => {
        console.log(event)
        this.setState({ currency_name: event.target.value }, function () {
            console.log(this.state)
            });
            this.setState(prevState => ({
                currency_names: [...prevState.currency_names, this.state.currency_name]
              })
              )}
        
    
    
    render() {
                return(
            <div className = "container" >
                
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
                                            this.getCurrencies(e)
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
                                            return <li>{currency.currency_name} <button type="button" class="btn btn-link btn-sm">X</button></li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12" id="dashboardTracker">
                                {this.state.currency_names.map((currency) => {
                                    return <CurrencyChart currency={currency.currency_name}/>
                                })}
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
                                            

                                        </p>
                                        <h4>Dash</h4>
                                        <p>
                                            <strong>Price Range (Past 30 Days):&nbsp;</strong> $1.23 - $4.56
                                <br></br>
                                            <strong>30 Day Average Trading Volume (Shares, Thousands Per Day):&nbsp;</strong> 78,901
                                <br></br>
                                            <strong>30 Average Market Cap (Millions):&nbsp;</strong> $234,567
                                <br></br>
                                        </p>
                                        <h4>NEO</h4>
                                        <p>
                                            <strong>Price Range (Past 30 Days):&nbsp;</strong> $6.78 - $9.10
                                <br></br>
                                            <strong>30 Day Average Trading Volume (Shares, Thousands Per Day):&nbsp;</strong> 345,861
                                <br></br>
                                            <strong>30 Average Market Cap (Millions):&nbsp;</strong> $56,432
                                <br></br>
                                        </p>

                                    </div>
                                </div>
                            
      </div>
            </div>

                )}
            }

    
    


export default Dashboard