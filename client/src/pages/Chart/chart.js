// import React from "react";
// import axios from "axios";
// import CanvasJS from "canvasjs";
// import Moment from "moment";

// class Charts extends React.Component {

//     dataToBeParsed = []

//     coinCall = () => {
//         var apiKey = "1a5e848dbbf95548ac3963b2487039b4";
//         var apiSecret = "996f8196377cde8739d6531c598bfdb3";
//         var id = 363;
//         var dataType = "price";
//         var baseCurrency = "USD";
//         var start = moment().format('YYYY-MM-DD')
//         var end = moment().subtract(30, "days").format("YYYY-MM-DD");

//         axios({
//             method: 'get',
//             url: "https://www.cryptocurrencychart.com/api/coin/history/" + id + "/" + start + "/" + end + "/" + dataType + "/" + baseCurrency,
//             headers: {
//                 'key': apiKey,
//                 "secret": apiSecret
//             },
//         }).then((res) => {

//             dataToBeParsed = res;
//         })

//     };

//     canvas = () => {
//     correctedArray = [];
//     for (let i = 0; i < dataToBeParsed.length; i++) {
//         correctedArray.push({
//             label: dataToBeParsed[i].date,
//             y: dataToBeParsed[i].price
//         });
    
    
    
//     console.log(correctedArray);
//     var chart = new CanvasJS.Chart("chartContainer", {
//         title: {
//             text: "Rendering Chart with dataPoints from External JSON"
//         },
//         color: "#369EAD",

//         data: [{
//             type: "line",
//             dataPoints: correctedArray
//         }]
//     });

//     chart.render();
// }};
// }


// export default Charts;