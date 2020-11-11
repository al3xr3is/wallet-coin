import React, { useState } from 'react';
import './styles.css'

import Carousel, { Dots, arrowsPlugin, autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import LogoDiscord from '../../../../../assets/img/logo-icon-discord.png'
import LogoTwitter from '../../../../../assets/img/logo-icon-twitter.png'
import LogoTelegram from '../../../../../assets/img/logo-icon-telegram.png'
import LogoFacebook from '../../../../../assets/img/logo-icon-facebook.png'

import ArrowLeft from '../../.././../../assets/img/seta-esquerda.png'
import ArrowRight from '../../.././../../assets/img/seta-direita.png'


export default function SocialMedia() {

  const divStyle = {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    width: "780px",
    height: "300px",
    backgroundColor: "#0a74cb7e",
    borderRadius: "20px",
    marginBottom: "20px",
    transition: "all .3s",
  }

  const h1Style = {
    marginTop: "8px",
    fontSize: "3.6rem"
  }

  const pStyle = {
    fontSize: "2.6rem"
  }

  const [value, setValue] = useState(0);
  const [slides] = useState([
    (<img src={LogoDiscord} alt="" />),
    (<img src={LogoTwitter} alt="" />),
    (<img src={LogoTelegram} alt="" />),
    (<img src={LogoFacebook} alt="" />),
  ])

  const onChange = value => {
    setValue(value);
  }

  return (
    <div className="container-social-media" id="socialmedia">
      <h1>Social Media</h1>
      <p>Through our social media, you may stay up to date, take questions, talk to the whole community and also have direct support with our dev team.</p>

      <div className="container-carousel">
        <Carousel
          value={value}
          onChange={onChange}
          plugins={[
            'infinite',
            {
              resolve: autoplayPlugin,
              options: {
                interval: 2000,
              }
            },
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: <button><img src={ArrowLeft} alt="" /></button>,
                arrowLeftDisabled: <button><img src={ArrowLeft} alt="" /></button>,
                arrowRight: <button><img src={ArrowRight} alt="" /></button>,
                arrowRightDisabled: <button><img src={ArrowRight} alt="" /></button>,
                addArrowClickHandler: true,
              }
            }
          ]}
          animationSpeed={1000}>

          <div style={divStyle}>
            <img src={LogoDiscord} alt="logos" />
            <h1 style={h1Style}>Discord</h1>
            <p style={pStyle} >Our main area</p>
          </div>

          <div style={divStyle}>
            <img src={LogoTwitter} alt="logos" />
            <h1 style={h1Style}>Twitter</h1>
            <p style={pStyle}>Fresh News</p>
          </div>

          <div style={divStyle}>
            <img src={LogoTelegram} alt="logos" />
            <h1 style={h1Style}>Telegram</h1>
            <p style={pStyle}>Interact</p>
          </div>
          <div style={divStyle}>
            <img src={LogoFacebook} alt="logos" />
            <h1 style={h1Style}>Facebook</h1>
            <p style={pStyle}>Our day to day</p>
          </div>
        </Carousel>

        <Dots
          value={value}
          onChange={onChange}
          number={slides.length} />
      </div>

      <p>Discord is our main area, where you have all the support you need: <br />Live chat support, quick response time, technical documentation, installation guides...</p>
    </div>
  )
}