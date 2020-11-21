import React from 'react'
// import './styles.css'
import './styless.css'

import LogoFinalArion from '../../../../assets/img/icon-01-logo.png'

import SetaHome from '../../../../assets/img/seta-home.png'
import AboutUs from '../../../../assets/img/icon-02-about.png'
import CoinSpecs from '../../../../assets/img/icon-03-specs.png'
import RoadMap from '../../../../assets/img/icon-04-roadmap.png'
import Social from '../../../../assets/img/icon-05-social.png'
import Team from '../../../../assets/img/icon-06-team.png'
import Partners from '../../../../assets/img/icon-07-partners.png'
import Wallets from '../../../../assets/img/icon-08-wallets.png'
import CreditCard from '../../../../assets/img/icon-09-credit-card.png'
import Contact from '../../../../assets/img/icon-10-contact.png'

export default function FixedBar() {

  const icons = {
    SetaHome,
    AboutUs,
    CoinSpecs,
    RoadMap,
    Social,
    Team,
    Partners,
    Wallets,
    CreditCard,
    Contact
  }
  return (
    <>
      <div className="fixed-navbar">

        <nav className="nav-bar">

              <div>
              <a href="#home"><img src={LogoFinalArion} alt="logo final arion" /></a>
              </div>

          <div className="nav-items">
            <ul>
              <div className="dropdown">
                <button className="dropbtn">About Us</button>
                <div className="dropdown-content">
                  <a href="https://github.com/FinalCoin/Final-Coin/wiki" rel="noreferrer" target="_blank">White Paper</a>
                  <a href="#what-is-final">About the Coin</a>
                  <a href="#coinspecs">Coin Specs</a>
                  <a href="#socialmedia">Social Media</a>
                  <a href="#team">Team</a>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn">Get</button>
                <div className="dropdown-content">
                  <a href="#get">Wallet</a>
                  <a href="#credit-card">Credit Card</a>
                  <a href="https://github.com/FinalCoin/Final-Coin" rel="noreferrer" target="_blank">GitHub</a>
                  <a href="https://bitcointalk.org/index.php?topic=5274631.0" rel="noreferrer" target="_blank">Bitcointalk</a>
                  <a href="https://github.com/FinalCoin/Final-Coin/wiki" rel="noreferrer" target="_blank">Installation Guide</a>
                  <a href="https://github.com/FinalCoin/Final-Coin/wiki" rel="noreferrer" target="_blank">FAQ</a>
                </div>
              </div>
              {/* <li className="icon"><a href="#get">Get</a></li> */}
              <li className="icon"><a href="#partners">Partners</a></li>
              <li className="icon"><a href="#roadmap">Roadmap</a></li>

              <div className="dropdown">
                <button className="dropbtn">Explorer</button>
                <div className="dropdown-content">
                  <a href="https://final-coin.ccore.online/" rel="noreferrer" target="_blank">CCCore</a>
                  <a href="https://www.coinexplorer.net/final-coin" rel="noreferrer" target="_blank">Coinexplorer.net</a>
                  <a href="https://explorer.final-coin.com/" rel="noreferrer" target="_blank">Final-Coin</a>
                </div>
              </div>

              {/* <li className="icon"><a href="#explorer">Explorer</a></li> */}
              <li className="icon"><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="page-selected">
            <a href="#home"><img src={icons.SetaHome} alt="" /></a>
          </div>

        </nav>
      </div>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0887d4" fill-opacity="0.8" d="M0,100L80,100C160,100,320,64,480,90.7C640,108,800,131,960,130.7C1120,131,1280,117,1360,90.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}
    </>
  );
}