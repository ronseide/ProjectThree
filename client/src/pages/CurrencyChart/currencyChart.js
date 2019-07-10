import React from "react";
import axios from "axios";

class CurrencyChart extends React.Component{ 
    state ={
        currencyInfo: null
    }
    
    componentDidMount(){
        axios.get(`https://api.coincap.io/v2/assets/${this.props.currency}/markets`)
        .then((res) => {
            const currencyInfo = res.data.data[0];
            this.setState({ currencyInfo })
            console.log(currencyInfo);
        })

    }
render() {
    return(
        <div>
            <h1>{this.props.currency}</h1>
            <h2>
            {(() => {
        switch (this.props.currency) {
          case "bitcoin":   return "btc";
          case "litecoin": return "ltc";
          case "ethereum":  return "etc";
          case "zcash":   return "zec";
          case "dash": return "dash";
          case "ripple":  return "xrp";
          case "monero":   return "xmr";
          case "bitcoin-cash": return "bch";
          case "neo":  return "neo";
          default:  return "";
        }
            })()}
            </h2>
            <h2>{this.state.currencyInfo && "$" + this.state.currencyInfo.priceUsd}</h2>
            <br></br>
        </div>
    )

}
}

export default CurrencyChart;