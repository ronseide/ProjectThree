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
                        Information on the advantages and benefits of crypto-currency investing
                        <ul class="resourceLinks">
                            <li><a href="https://cryptocurry.com/features/amazing-benefits-investing-cryptocurrencies/" target="_blank">CryptoCurry: Amazing Benefits Of Investing In Cryptocurrencies</a></li>
                            <li><a href="https://blockgeeks.com/5-benefits-cryptocurrency/" target="_blank">Blockgeeks: 5 Amazing Benefits of Cryptocurrency: A New Digital Future</a></li>
                            <li><a href="https://www.huffpost.com/entry/7-incredible-benefits-of_b_13160110" target="_blank">Huffington Post: 7 Incredible Benefits Of Cryptocurrency</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                    <i class="far fa-meh face"></i>
                    {/* <img src="https://mdbootstrap.com/img/Photos/Avatars/img(31).jpg" class="img-fluid z-depth-1 rounded-circle"
                    lt="Responsive image" /> */}
                    <br></br><br></br>
                        General information on crypto-currency investing<br></br><br></br>
                        <ul class="resourceLinks">
                            <li><a href="https://www.pwc.com/us/en/industries/financial-services/fintech/bitcoin-blockchain-cryptocurrency.html" target="_blank">PWC: Making sense of bitcoin, cryptocurrency and blockchain</a></li>
                            <li><a href="https://www.investopedia.com/terms/c/cryptocurrency.asp" target="_blank">Investopedia: Cryptocurrency</a></li>
                            <li><a href="https://www.toptal.com/finance/market-research-analysts/cryptocurrency-market" target="_blank">Toptal: Demystifying Cryptocurrencies, Blockchain, and ICOs
</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                    <i class="far fa-frown face"></i>

                    {/* <img src="https://mdbootstrap.com/img/Photos/Avatars/img(31).jpg" class="img-fluid z-depth-1 rounded-circle"
                    lt="Responsive image" /> */}
                                            <br></br><br></br>
                        Information on the disadvantages and risks of crypto-currency investing
                        <ul class="resourceLinks">
                            <li><a href="https://www.prescouter.com/2017/11/disadvantages-of-cryptocurrencies/" target="_blank">PreScouter: What are the disadvantages of cryptocurrencies?</a></li>
                            <li><a href="https://www.quora.com/What-are-the-disadvantages-of-cryptocurrencies" target="_blank">Quora: What are the disadvantages of cryptocurrencies?</a></li>
                            <li><a href="https://www.kaspersky.com/blog/cryptocurrencies-intended-risks/20034/" target="_blank">Kaspersky Daily: Problems and risks of cryptocurrencies</a></li>
                        </ul>

                    </div>



                </div>
            </body>
        </div>
    );
}

export default Resources;