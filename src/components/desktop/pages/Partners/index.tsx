import React from 'react'
//import './styles.css'
import './styless.css'

import PartnersArion from '../../../../assets/img/partners-arion-.png'
import PartnersFinalmente from '../../../../assets/img/partners-finalmente.png'
import ExchangeCrex24 from '../../../../assets/img/exchange-crex24.png'
import ExchangeFinexbox from '../../../../assets/img/exchange-finexbox.png'
// import TrackingCoinmarketcap from '../../../../assets/img/tracking-logo-coinmarketcap.png'
import TrackingCoinmarketcap from '../../../../assets/img/tracking-logo-coinmarketcap-csson.png'
import TrackingMNO from '../../../../assets/img/tracking-logo-mno.png'

export default function Partners() {
  return (
    <div className="container-partners" id="partners">
      
      <h1>Exchanges - Partners - Static Tracking</h1>

      <div className="partners">
        <div className="partners-cards">
          <h2>Exchange Listing</h2>
          <div className="imgs">
          <a href="https://crex24.com/exchange/FINAL-BTC" rel="noreferrer" target="_blank" >
            <div className="card-img d-flex justify-content-center">
              <img src={ExchangeCrex24} alt="Exchange Crex24" />
            </div>
          </a>
          <a href="https://www.finexbox.com/market/pair/FINAL-BTC" rel="noreferrer" target="_blank">
            <div className="card-img d-flex justify-content-center">
              <img src={ExchangeFinexbox} alt="Exchange Finexbox" />
            </div>
          </a>
        </div>
          </div>
          

        <div className="partners-cards">
          <h2>Statics Tracking</h2>
          <div className="imgs">
          <a href="https://coinmarketcap.com/" rel="noreferrer" target="_blank">
            <div className="card-img d-flex justify-content-center">
              <img src={TrackingCoinmarketcap} alt="Tracking Coinmarketcap" />
            </div>
          </a>
          <a href="https://masternodes.online/currencies/FINAL" rel="noreferrer" target="_blank">
            <div className="card-img d-flex justify-content-center">
              <img src={TrackingMNO} alt="Tracking mno" />
            </div>
          </a>
        </div>
          </div>

        <div className="partners-cards">
          <h2>Partners</h2>
          <div className="imgs">
          <a href="https://finalmenteglobal.com/" rel="noreferrer" target="_blank">
            <div className="card-img d-flex justify-content-center">
              <img src={PartnersFinalmente} alt="Partners Finalmente" />
            </div>
          </a>
          <a href="https://arioncoin.com/" rel="noreferrer" target="_blank">
            <div className="card-img d-flex justify-content-center">
              <img src={PartnersArion} alt="Partners Arion Coin" />
            </div>
          </a>
          </div>
        </div>

        <div className="partners-cards-mobile-explorer">
          <div className="imgs">
          <a href="https://final-coin.ccore.online/" rel="noreferrer" target="_blank">CCCore</a>
          </div>
          <div className="imgs">
          <a href="https://www.coinexplorer.net/final-coin" rel="noreferrer" target="_blank">Coinexplorer.net</a>
          </div>
          <div className="imgs">
          <a href="https://explorer.final-coin.com/" rel="noreferrer" target="_blank">Final-Coin</a>
          </div>
         
        </div>
      </div>
    </div>
    
  )
}
