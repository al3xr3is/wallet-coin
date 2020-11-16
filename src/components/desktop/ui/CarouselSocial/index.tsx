import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

import './styles.css'

import LogoDiscord from '../../../../assets/img/logo-icon-discord.png'
import LogoTwitter from '../../../../assets/img/logo-icon-twitter.png'
import LogoTelegram from '../../../../assets/img/logo-icon-telegram.png'
import LogoFacebook from '../../../../assets/img/logo-icon-facebook.png'

export default function CarouselSocial() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={2000}>
        <div className="carousel-box">
          <a href="https://discord.gg/ccRq2wE5Be" rel="noreferrer" target="_blank">
            <img
              className="carousel-img"
              src={LogoDiscord}
              alt="First slide"
            />
          </a>

            <Carousel.Caption>
              <h1 className="carousel-title">Discord</h1>
              <p>Our main area</p>
            </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className="carousel-box">
          <a href="https://twitter.com/final_coin" rel="noreferrer" target="_blank">
            <img
              className="carousel-img"
              src={LogoTwitter}
              alt="Second slide"
            />
          </a>

          <Carousel.Caption>
            <h1 className="carousel-title">Twitter</h1>
            <p>Fresh news</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className="carousel-box">
          <a href="https://t.me/finalcoin" rel="noreferrer" target="_blank">
            <img
              className="carousel-img"
              src={LogoTelegram}
              alt="Third slide"
            />
          </a>

          <Carousel.Caption>
            <h1 className="carousel-title">Telegram</h1>
            <p>Interact</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className="carousel-box">
          <a href="https://www.facebook.com/finalcoinza" rel="noreferrer" target="_blank">
            <img
              className="carousel-img"
              src={LogoFacebook}
              alt="Third slide"
            />
          </a>

          <Carousel.Caption>
            <h1 className="carousel-title">Facebook</h1>
            <p>our day-to-day</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
