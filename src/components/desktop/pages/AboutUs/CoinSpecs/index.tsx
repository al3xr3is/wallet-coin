import React from 'react'
import Navbar from '../../../ui/Navbar'
import './styles.css'

import Icon1 from '../../../../../assets/img/icon-coin-specs-01.png'
import Icon2 from '../../../../../assets/img/icon-coin-specs-02.png'
import Icon3 from '../../../../../assets/img/icon-coin-specs-03.png'
import Icon4 from '../../../../../assets/img/icon-coin-specs-04.png'
import Icon5 from '../../../../../assets/img/icon-coin-specs-05.png'
import Icon6 from '../../../../../assets/img/icon-coin-specs-06.png'

export default function CoinSpecs() {
  return (
    <>
      <div className="container-coinspecs" id="coinspecs">
        <Navbar />
        <h1>Coin Specs</h1>
        <p>Here you will find everything you need to know about Final Coin specifications, from its algorithm to the time of the blockchain.</p>
        <div className="grid-coinspecs">
          <div className="card card-1">
            <h2>MAX SUPPLY</h2>
            <h3>10 BILLION</h3>
            <img src={Icon1} alt=""/>
          </div>
          <div className="card card-2">
            <h2>ECHO512</h2>
            <h3>ALGORITHM</h3>
            <img src={Icon2} alt=""/>
          </div>
          <div className="card card-3">
            <h2>MASTERNODE</h2>
            <h3>10000 FINAL COIN</h3>
            <img src={Icon3} alt=""/>
          </div>
          <div className="card card-4">
            <h2>BLOCK TIME</h2>
            <h3>5 MINUTES</h3>
            <img src={Icon4} alt=""/>
          </div>
          <div className="card card-5">
            <h2>BLOCK REWARD</h2>
            <h3>10 FINAL COIN</h3>
            <h3>70/25/5 SPLIT</h3>
            <img src={Icon5} alt=""/>
          </div>
          <div className="card card-6">
            <h2>MINIMUM AGE/TX MATURATION</h2>
            <h3>40 BLOCKS/5 BLOCKS</h3>
            <img src={Icon6} alt=""/>
          </div>
        </div>
      </div>
    </>
  )
}