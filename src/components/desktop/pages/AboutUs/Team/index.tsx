import React from 'react'

//import './styles.css'
import './styless.css'

// import Yohun from '../../../../../assets/img/team-yohan.png'
import Kobos from '../../../../../assets/img/team-kobos.png'
import Nikita from '../../../../../assets/img/team-nikita.png'
import Cryptocoders from '../../../../../assets/img/team-cryptocoderz.png'
import Zoras from '../../../../../assets/img/36-team-zoras.png'
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

        <div className="container-lead">
          <div className="card-lead zoras">
            <h2>Zoras</h2>
            <img src={Zoras} alt="" />
            <h3>Design Lead</h3>
            <p>Designer, maker of all things beautiful.
            Experienced wallet and website graphics artist working in numerous projects. Discord handle Zoras #9628.</p>
          </div>

          <div className="card-lead kobus">
            <h2>Kobus</h2>
            <img src={Kobos} alt="" />
            <h3>CEO</h3>
            <p>Finalmente Global Owner and crypto enthusiast, believes in the potential of Cryptocurrencies. He combines vast online marketing skills and a lending platform to provide excellent services to clients. With an open,honest and transparent approach.</p>
          </div>

          <div className="card-lead nikita">
            <h2>Nikita</h2>
            <img src={Nikita} alt="" />
            <h3>Project Lead</h3>
            <p>Crypto Evangelist public speaking and Teaching. Experienced Crypto project lead. Owner of her own coin Arion. Builds communities and social media presence..</p>
          </div>
        </div>

        <div className="container-minions cryptocoders">
          <div className="card-minions">
            <img src={Cryptocoders} alt="Cryptocoders" />
            <h2>Cryptocoders</h2>
            <p>Wallet Developer</p>
          </div>
          {/* <div className="card-minions">
            <img src={Zoras} alt="Zoras" />
            <h2>Zoras</h2>
            <p>Designer</p>
          </div> */}
          <div className="card-minions al3x">
            <img src={Alex} alt="Al3x R3is" />
            <h2>Al3x R3is</h2>
            <p>Web Developer</p>
          </div>
        </div>

      </div>
      </div>
    </>
  )
}