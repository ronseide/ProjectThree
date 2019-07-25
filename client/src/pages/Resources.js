import React from "react";
import "./style.css";


function Resources() {
    return (
        <div classNameName="parentElement">
            <h1>What is CryptoCurrency?</h1>

            <div>

            <p id="resourcep"> The world of crypto-currencies is an exciting place. Less than a decade old, crypto-currencies are a revolution in both how societies think about money and how savvy investors can reap profits. But this world is not without its dangers and the un-initiated can suffer untold losses.
                        At Crypto-Currency Tracker, we don't just provide an easy means of tracking current and potential investments, we provide a range of links to informative articles that represent differing views on the market: a general overview, positive views and even more negative points of view.</p>
</div>
            {/* firs row coins */}
                <div className="container">
                    <div className="row">
                         <div className="col">

                         <button  type="button" className="btn btn-primary coinButton" data-toggle="modal" data-target="#modal1">
                            Bitcoin</button>

                            <div className="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel coinName"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content resources">

                            <div className="modal-header name">
                                        <h5 className="modal-title" id="exampleModalLabel coinName">Bitcoin</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>

                            <div className="modal-body">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/L-Qhv8kLESY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <h5>a type of digital currency in which a record of transactions is maintained and new units of currency are generated by the computational solution of mathematical problems, and which operates independently of a central bank.</h5>
                            <a href="https://bitcoin.org/en/" target="_blank">Bitcoin is an innovative payment network and a new kind of money.</a>
                        <br/>                            
                         <a href="https://bitcoin.org/en/how-it-works" target="_blank">How does Bitcoin work?</a>
                         <br/>                            
                         <a href="https://www.coindesk.com/information/what-is-bitcoin" target="_blank">What is Bitcoin?</a>

                                    </div>
                                    </div>
                                    </div>
                                    </div>

                        </div>
                        <div className="col">
                        

                        <button type="button" className="btn btn-primary coinButton" data-toggle="modal" data-target="#modal2">
                            Litecoin</button>

                            <div className="modal fade" id="modal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel coinName"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content resources">

                            <div className="modal-header name">
                                        <h5 className="modal-title" id="exampleModalLabel coinName">Litecoin</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>

                            <div className="modal-body">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/q7B7S88RtV8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        <h5>Litecoin (LTC or Ł) is a peer-to-peer cryptocurrency and open-source software project released under the MIT/X11 license. Creation and transfer of coins is based on an open source cryptographic protocol and is not managed by any central authority. ... In technical details, litecoin is nearly identical to Bitcoin.</h5>
                                        
                                        <br/><a href="https://www.investopedia.com/articles/investing/042015/bitcoin-vs-litecoin-whats-difference.asp" target="_blank">Bitcoin vs. Litecoin: What's the Difference?</a>
                                       <br/> <a href="https://www.investopedia.com/articles/investing/040515/what-litecoin-and-how-does-it-work.asp" target="_blank">What Is Litecoin, and How Does It Work?</a>
                                      <br/>  <a href="https://litecoin.org/" target="_blank">Litecoin.org</a>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                        </div>
                        <div className="col">


                        <button type="button" className="btn btn-primary coinButton" data-toggle="modal" data-target="#modal3">
                            Ethereum</button>

                            <div className="modal fade" id="modal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel coinName"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content resources">

                            <div className="modal-header name">
                                        <h5 className="modal-title" id="exampleModalLabel coinName">Ethereum</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>

                            <div className="modal-body">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/-_Qs0XdPpw8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            Ether is a token whose blockchain is generated by the Ethereum platform. Ether can be transferred between accounts and used to compensate participant mining nodes for computations performed. ... Ethereum was proposed in late 2013 by Vitalik Buterin, a cryptocurrency researcher and programmer.
                           
                                        <br/><a href="https://www.coindesk.com/information/what-is-ethereum" target="_blank">What is Ethereum?</a>
                                       <br/> <a href="https://blockgeeks.com/guides/ethereum/" target="_blank">What is Ethereum? [The Most Comprehensive Step-by-Step-Guide!]</a>
                                      <br/>  <a href="https://en.wikipedia.org/wiki/Ethereum" target="_blank">Ethereum</a>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                        </div>
                        <div className="col">
                        

                        <button type="button" className="btn btn-primary coinButton" data-toggle="modal" data-target="#modal4">
                        Zcash</button>

                            <div className="modal fade" id="modal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel coinName"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content resources">

                            <div className="modal-header name">
                                        <h5 className="modal-title" id="exampleModalLabel coinName">Zcash</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>

                            <div className="modal-body">

<iframe width="560" height="315" src="https://www.youtube.com/embed/Uysqjsc5eeY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
ZCash is a cryptocurrency with a decentralized blockchain that provides anonymity for its users and their transactions. As a digital currency, ZCash is similar to Bitcoin in a lot of ways including the open-source feature, but their major differences lie in the level of privacy and fungibility that each provides
                            
                                        <br/><a href="https://www.investopedia.com/tech/what-zcash/" target="_blank">What Is Zcash?</a>
                                       <br/> <a href="https://blockgeeks.com/guides/zcash/" target="_blank">What is Zcash? The Most Comprehensive Guide Ever!</a>
                                      <br/>  <a href="https://z.cash/" target="_blank">Zcash is a privacy-protecting, digital currency built on strong science.</a>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                        </div>
                </div>
                </div>


{/* second row of coins */}

<div className="container">
                    <div className="row">
                         <div className="col">

                         <button type="button" className="btn btn-primary coinButton" data-toggle="modal" data-target="#modal5">
                            Dash</button>

                            <div className="modal fade" id="modal5" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel coinName"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content resources">

                            <div className="modal-header name">
                                        <h5 className="modal-title" id="exampleModalLabel coinName">Dash</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>

                            <div className="modal-body">

                            <iframe width="560" height="315" src="https://www.youtube.com/embed/S0oNO3mbBE8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            The way that Dash are released into the currency system is through mining activity. Dash mining works similar to other cryptocurrencies, such as Bitcoin or Litecoin, where the foundation is a blockchain, which includes a decentralized ledger of all transactions that have ever taken place.
                            <br/><a href="https://www.investopedia.com/tech/what-dash-cryptocurrency/" target="_blank">What Is Dash Cryptocurrency?</a>
                                        <br/><a href="https://en.wikipedia.org/wiki/Dash_(cryptocurrency)" target="_blank">Dash (cryptocurrency)</a>
                                       <br/> <a href="https://coinsutra.com/dash-cryptocurrency/" target="_blank">Dash Cryptocurrency: Everything A Beginner Needs To Know</a>
                       
                                    </div>
                                    </div>
                                    </div>
                                    </div>

                        </div>
                        <div className="col">
                        

                        <button type="button" className="btn btn-primary coinButton" data-toggle="modal" data-target="#modal6">
                            Ripple</button>

                            <div className="modal fade" id="modal6" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel coinName"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content resources">

                            <div className="modal-header name">
                                        <h5 className="modal-title" id="exampleModalLabel coinName">Ripple</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>

                            <div className="modal-body">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/66cgnXJkJP4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                           
                            XRP, the digital asset of Ripple, is supposedly capable of settling a payment within 4 seconds and handling 1,500 transactions every second. ... Were a financial institution to use xRapid to help with cross-border payments from one fiat currency to another, XRP is what is used mid-transaction for liquidity.
                                        <br/><a href="https://cointelegraph.com/ripple-101/what-is-ripple" target="_blank">What Is Ripple. Everything You Need To Know</a>
                                       <br/> <a href="https://www.ripple.com/" target="_blank">Join RippleNet
One frictionless experience to send money globally</a>
                                      <br/>  <a href="https://bitcoinmagazine.com/guides/what-ripple" target="_blank">What is Ripple?</a>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                        </div>
                        <div className="col">


                        <button type="button" className="btn btn-primary coinButton" data-toggle="modal" data-target="#modal7">
                            Monero</button>

                            <div className="modal fade" id="modal7" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel coinName"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content resources resources">

                            <div className="modal-header name">
                                        <h5 className="modal-title" id="exampleModalLabel coinName">Monero</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>

                            <div className="modal-body">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/6DQb0cMvU7I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                            Monero (XMR) is a Cryptonote algorithm based cryptocurrency, it relies on Ring Signatures in order to provide a certain degree of privacy when making a transaction. Monero is a Proof of Work cryptocurrency that can be miner with computational power from a CPU or GPU.
                                        <br/><a href="https://www.getmonero.org/get-started/what-is-monero/" target="_blank">What is Monero (XMR)?</a>
                                       <br/> <a href="https://www.getmonero.org/" target="_blank">MONERO
Private Digital Currency</a>
                                      <br/>  <a href="https://www.investopedia.com/tech/introduction-monero-xmr/" target="_blank">What Is Monero (XMR) Cryptocurrency?</a>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                        </div>
                        <div className="col">
                        

                        <button type="button" className="btn btn-primary coinButton" data-toggle="modal" data-target="#modal8">
                            Bitcoin Cash</button>

                            <div className="modal fade" id="modal8" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel coinName"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content resources">

                            <div className="modal-header name">
                                        <h5 className="modal-title" id="exampleModalLabel coinName">Bitcoin Cash</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>

                            <div className="modal-body">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/fP__cDMisqc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                            Bitcoin cash is a cryptocurrency created in August 2017, arising from a fork of Bitcoin Classic. Bitcoin Cash increases the size of blocks, allowing more transactions to be processed.                          
                                        <br/><a href="https://cointelegraph.com/bitcoin-cash-for-beginners/btc-bch-differences" target="_blank">Difference Between Bitcoin and Bitcoin Cash</a>
                                       <br/> <a href="https://en.wikipedia.org/wiki/Bitcoin_Cash" target="_blank">Bitcoin Cash</a>
                                      <br/>  <a href="https://www.bitcoin.com/get-started/what-is-bitcoin-cash" target="_blank">What is Bitcoin Cash?</a>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                        </div>
                </div>
                </div>


                {/* third row of coins */}

                <div className="container">
                    <div className="row thirdrow">
                         <div className="col">

                         <button type="button" className="btn btn-primary coinButton" data-toggle="modal" data-target="#modal9">
                            Neo</button>

                            <div className="modal fade" id="modal9" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel coinName"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content resources">

                            <div className="modal-header name">
                                        <h5 className="modal-title" id="exampleModalLabel coinName">Neo</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>

                            <div className="modal-body">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/qF9VMJ4tpy0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                            What Is NEO? NEO was founded as AntShares by Da Hongfei and Erik Zhan in China in 2014 and was rebranded "NEO" in June 2017. It is a blockchain-based platform that supports its own cryptocurrency and enables the development of digital assets and smart contracts.                           
                                        <br/><a href="https://www.investopedia.com/tech/china-neo-cryptocurrency/" target="_blank">Why NEO Can Do What No Other Cryptocurrency Can Do</a>
                                       <br/> <a href="https://neo.org/" target="_blank">NEO.org</a>
                                      <br/>  <a href="https://coinswitch.co/info/neo/what-is-neo" target="_blank">What is NEO (neo)?</a>
                                    </div>
                                    </div>
                                    </div>
                                    </div>

                        </div>
                        <div className="col">
                        

                        <button type="button" className="btn btn-primary coinButton" data-toggle="modal" data-target="#modal10">
                            Cardano</button>

                            <div className="modal fade" id="modal10" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel coinName"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content resources">

                            <div className="modal-header name">
                                        <h5 className="modal-title" id="exampleModalLabel coinName">Cardano</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>

                            <div className="modal-body">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/58WwbOB9POE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                            Cardano is home to the Ada cryptocurrency, which can be used to send and receive digital funds. ... Similar to Ethereum, Cardano is a smart contract platform however, Cardano offers scalability and security through layered architecture                           
                                        <br/><a href="https://www.cardano.org/en/what-is-cardano/" target="_blank">WHAT IS CARDANO?</a>
                                       <br/> <a href="https://www.investopedia.com/news/introduction-cardano/" target="_blank">Cardano Aims to Create a Stable Cryptocurrency Ecosystem</a>
                                      <br/>  <a href="https://blockgeeks.com/guides/what-is-cardano/" target="_blank">What is Cardano Blockchain? [The Most Comprehensive Step-by-Step Guide]</a>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                        </div>
                        <div className="col">


                        <button type="button" className="btn btn-primary coinButton" data-toggle="modal" data-target="#modal11">
                            EOS</button>

                            <div className="modal fade" id="modal11" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel coinName"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content resources">

                            <div className="modal-header name">
                                        <h5 className="modal-title" id="exampleModalLabel coinName">EOS</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>

                            <div className="modal-body">

                            <iframe width="560" height="315" src="https://www.youtube.com/embed/9C3qFqJQ4Pw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            EOS is a blockchain platform for the development of decentralized applications (dapps), similar to Ethereum in function. ... It provides a complete operating system for decentralized applications focused on the web with services like user authentication, cloud storage, and server hosting.                
                                        <br/><a href="https://www.investopedia.com/tech/what-is-eos/" target="_blank">What Is EOS?</a>
                                       <br/> <a href="https://coincentral.com/what-is-eos/" target="_blank">What Is EOS? | Everything You Should Know</a>
                                      <br/>  <a href="https://blockgeeks.com/guides/eos-blockchain/" target="_blank">What is EOS Blockchain: Beginners Guide</a>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                        </div>
                      
                </div>
                </div>









        </div>






  
  
    );
}

export default Resources;