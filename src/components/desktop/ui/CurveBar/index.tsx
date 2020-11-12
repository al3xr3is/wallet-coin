import React from 'react'
//import './styles.css'

import LogoFinalArion from '../../../../assets/img/icon-00-logo.png'

import IconHome from '../../../../assets/img/icon-01-home.png'
// import IconAboutUs from '../../../../assets/img/icon-02-about.png'
// import IconCoinSpecs from '../../../../assets/img/icon-03-specs.png'
// import IconRoadMap from '../../../../assets/img/icon-04-roadmap.png'
// import IconSocial from '../../../../assets/img/icon-05-social.png'
// import IconTeam from '../../../../assets/img/icon-06-team.png'
// import IconPartners from '../../../../assets/img/icon-07-partners.png'
// import IconWallets from '../../../../assets/img/icon-08-wallets.png'
// import IconCreditCard from '../../../../assets/img/icon-09-credit-card.png'
// import IconContact from '../../../../assets/img/icon-10-contact.png'

export default function Navbar(props) {

  return (
    <>
      <div className="sidebar-desktop">      

      <nav className="nav-bar">
        
          <a href="#home"><img src={LogoFinalArion} alt="logo final arion" /></a>
      
        <div className="nav-items">
          <ul>
            <li className="icon"><a href="#home">Home</a></li>
            <div className="dropdown">
              <button className="dropbtn">About Us</button>
              <div className="dropdown-content">
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
                <a href="https://github.com" rel="noreferrer" target="_blank">GitHub</a>
                <a href="https://bitcointalk.org/index.php?topic=5274631.0" rel="noreferrer" target="_blank">Bitcointalk</a>
              </div>
            </div>
            {/* <li className="icon"><a href="#get">Get</a></li> */}
            <li className="icon"><a href="#partners">Partners</a></li>
            <li className="icon"><a href="#roadmap">Roadmap</a></li>

            <div className="dropdown">
              <button className="dropbtn">Explorer</button>
              <div className="dropdown-content">
                <a href="https://github.com">Explorer 1</a>
                <a href="https://github.com">Explorer 2</a>
                <a href="https://github.com">Explorer 3</a>
              </div>
            </div>

            {/* <li className="icon"><a href="#explorer">Explorer</a></li> */}
            <li className="icon"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      </div>
    </>
  )
}