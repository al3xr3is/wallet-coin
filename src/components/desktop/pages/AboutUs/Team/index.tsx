import React from 'react'
import Navbar from '../../../ui/Navbar'
import './styles.css'

import Yohan from '../../../../../assets/img/team-yohan.png'
import Kobos from '../../../../../assets/img/team-kobos.png'
import Nikita from '../../../../../assets/img/team-nikita.png'
import Cryptocoders from '../../../../../assets/img/team-cryptocoderz.png'
import Zoras from '../../../../../assets/img/team-zoras.png'
import Alex from '../../../../../assets/img/team-alex.png'

export default function Team() {
  return (
    <>
      <div className="container-team" id="team">
        <Navbar />
        <h1>Team</h1>
        <p>Here are the main people working to keep the project going</p>

        <div className="grid-team">
          <div className="card card-1">
            <h2>Yohan</h2>
            <img src={Yohan} alt="" />
            <h3>Design Lead</h3>
            <p>Finalmente Global Design Leader, Yohan has a lot of experience and knowledge in his field. Always adding value to the projects you work on.</p>
          </div>
          <div className="card card-2">
            <h2>Kobos</h2>
            <img src={Kobos} alt="" />
            <h3>CEO</h3>
            <p>Finalmente Global Owner, believes in the potential of cryptocurrencies and has vast knowledge in the financial area, which adds credibility in the currency and in its main platform, Finalmente Global.</p>
          </div>
          <div className="card card-3">
            <h2>Nikita</h2>
            <img src={Nikita} alt="" />
            <h3>Project Lead</h3>
            <p>Nikita, an expert and experienced in the world of cryptocurrencies, has participated and helped create many coins. It has its own Arion Coin currency, which can be found at CoinMarketCap.</p>
          </div>
          <div className="card card-4">
            <img src={Cryptocoders} alt="" />
            <h2>Cryptocoders</h2>
            <h3>Wallet Developer</h3>
          </div>
          <div className="card card-5">
            <img src={Zoras} alt="" />
            <h2>Zoras</h2>
            <h3>Designer</h3>
          </div>
          <div className="card card-6">
            <img src={Alex} alt="" />
            <h2>Al3x R3is</h2>
            <h3>Web Developer</h3>
          </div>
        </div>
      </div>
    </>
  )
}