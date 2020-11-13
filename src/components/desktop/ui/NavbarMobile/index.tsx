import React, { useRef } from 'react'
import './styles.css'
// import './styless.css'

// import LogoFinalArion from '../../../../assets/img/icon-00-logo.png'

import Home from '../../../../assets/img/icon-01-home.png'
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

  // let burgerRef = useRef()
  const navRef = useRef<HTMLUListElement>(null)
   

  function toggleNav() {
    navRef.current?.classList.toggle('open')
  }

  return (
    <>
      <div className="nav-mobile">

        <div className="burger" onClick={toggleNav}>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
        </div>

        <nav className="nav-bar-mobile">
          <ul ref={navRef}>
            <li>
              <a href="#home" rel="noreferrer" onClick={toggleNav}>
                <img src={Home} alt="Home" />
              </a>
            </li>
            <li>
              <a href="#what-is-final" rel="noreferrer" onClick={toggleNav}>
                <img src={AboutUs} alt="AboutUs" />
              </a>
            </li>
            <li>
              <a href="#coinspecs" rel="noreferrer" onClick={toggleNav}>
                <img src={CoinSpecs} alt="CoinSpecs" />
              </a>
            </li>
            <li>
              <a href="#roadmap" rel="noreferrer" onClick={toggleNav}>
                <img src={RoadMap} alt="RoadMap" />
              </a>
            </li>
            <li>
              <a href="#socialmedia" rel="noreferrer" onClick={toggleNav}>
                <img src={Social} alt="Social" />
              </a>
            </li>
            <li>
              <a href="#team" rel="noreferrer" onClick={toggleNav}>
                <img src={Team} alt="Team" />
              </a>
            </li>
            <li>
              <a href="#partners" rel="noreferrer" onClick={toggleNav}>
                <img src={Partners} alt="Partners" />
              </a>
            </li>
            <li>
              <a href="#get" rel="noreferrer" onClick={toggleNav}>
                <img src={Wallets} alt="Wallets" />
              </a>
            </li>
            <li>
              <a href="#credit-card" rel="noreferrer" onClick={toggleNav}>
                <img src={CreditCard} alt="CreditCard" />
              </a>
            </li>
            <li>
              <a href="#contact" rel="noreferrer" onClick={toggleNav}>
                <img src={Contact} alt="Contact" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}