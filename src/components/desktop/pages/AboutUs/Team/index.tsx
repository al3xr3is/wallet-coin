import React from 'react'

//import './styles.css'
import './styless.css'

// import Yohan from '../../../../../assets/img/team-yohan.png'
import Kobos from '../../../../../assets/img/team-kobos.png'
import Nikita from '../../../../../assets/img/team-nikita.png'
import Cryptocoders from '../../../../../assets/img/team-cryptocoderz.png'
import Zoras from '../../../../../assets/img/team-zoras.png'
import Alex from '../../../../../assets/img/team-alex.png'
// import CardImg from '../../../../../assets/img/team-card1.png'


export default function Team() {
  return (
    <>
      <div className="container-team" id="team">
        <div className="title">
        <h1>Team</h1>
        <p>Here are the main people working to keep the project going</p>
        </div>

        <div className="grid-team">
          <div className="card-lead">
            <h2>Yohun</h2>
            <img src={Kobos} alt="" />
            <h3>Design Lead</h3>
            <p>Finalmente Global Design Leader, Yohan has a lot of experience and knowledge in his field. Always adding value to the projects you work on.</p>
          </div>

          <div className="card-lead">
            <h2>Kobos</h2>
            <img src={Kobos} alt="" />
            <h3>CEO</h3>
            <p>Finalmente Global Owner, believes in the potential of cryptocurrencies and has vast knowledge in the financial area, which adds credibility in the currency and in its main platform, Finalmente Global.</p>
          </div>

          <div className="card-lead">
            <h2>Nikita</h2>
            <img src={Nikita} alt="" />
            
            <h3>Project Lead</h3>
            <p>Nikita, an expert and experienced in the world of cryptocurrencies, has participated and helped create many coins. It has its own Arion Coin currency, which can be found at CoinMarketCap.</p>
            
          </div>

          <div className="card-minions">
            <img src={Cryptocoders} alt="Cryptocoders" />
            <h2>Cryptocoders</h2>
            <p>Wallet Developer</p>
          </div>

          <div className="card-minions">
            <img src={Zoras} alt="Zoras" />
            <h2>Zoras</h2>
            <p>Designer</p>
          </div>

          <div className="card-minions">
            <img src={Alex} alt="Al3x R3is" />
            <h2>Al3x R3is</h2>
            <p>Web Developer</p>
          </div>
        </div>
      </div>
    </>
  )
}