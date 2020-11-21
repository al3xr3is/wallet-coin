import React from 'react'
//import './styles.css'
import './styless.css'

// import RoadmapIcon from '../../../../../assets/img/roadmap-icon.png'
import RoadmapLine from '../../../../../assets/img/roadmap-line.png'
import RoadmapLineMobile from '../../../../../assets/img/roadmap-mobile.png'

export default function Roadmap() {
  return (
    <div className="container-roadmap" id="roadmap">
      
      <div className="title">
      <h1>Roadmap</h1>
      <p>2020 - 2021</p>
      </div>
      <main className="main-desktop">
      <div className="row-3">
        <div className="card card-3">
          <h2>Q4 2020</h2>
          <h3>Launch of the Final Coin and listing on exchanges.</h3>
        </div>
        <div className="card card-4">
          <h2>Q2 2021</h2>
          <h3>Credit Card launch and affiliate program.</h3>
        </div>
        <div className="card card-5">
          <h2>Q4 2021</h2>
          <h3>Launch of cryptocurrency exchange - Dex exchange.</h3>
        </div>
      </div>
      <div className="row-2">
        <img className="roadmap-desktop" src={RoadmapLine} alt=""/>
        <img className="roadmap-mobile" src={RoadmapLineMobile} alt=""/>
      </div>
      

      <div className="row-1">
        <div className="card card-1">
          <h2>Q1 2021</h2>
          <h3>Web Wallet / Android App</h3>
        </div>

        <div className="card card-2">
          <h2>Q3 2021</h2>
          <h3>Integration of new partnerships and ledger software.</h3>
        </div>
      </div>
      </main>

      <main className="main-mobile">
        <img className="roadmap-mobile" src={RoadmapLineMobile} alt=""/>
        <div className="col-right">
        <div className="card card-3">
          <h2>Q4 2020</h2>
          <h3>Launch of the Final Coin and listing on exchanges.</h3>
        </div>

        <div className="card card-1">
          <h2>Q1 2021</h2>
          <h3>Web Wallet / Android App</h3>
        </div>

        <div className="card card-4">
          <h2>Q2 2021</h2>
          <h3>Credit Card launch and affiliate program.</h3>
        </div>

        <div className="card card-2">
          <h2>Q3 2021</h2>
          <h3>Intgration of new partnerships and ledger software.</h3>
        </div>

        <div className="card card-5">
          <h2>Q4 2021</h2>
          <h3>Launch of cryptocurrency exchange - Dex exchange.</h3>
        </div>
        </div>
      </main>
    </div>
  )
}
