import React from 'react'
import './styles.css'

import Navbar from '../../ui/Navbar'

import SocialDiscord from '../../../../assets/img/contact-icon-discord.png'
import SocialTwitter from '../../../../assets/img/contact-icon-twitter.png'
import SocialTelegram from '../../../../assets/img/contact-icon-telegram.png'
import SocialFacebook from '../../../../assets/img/contact-icon-facebook.png'
import SocialBitcointalk from '../../../../assets/img/contact-icon-bitcointalk.png'

export default function Contact() {
  return (
    <div className="container-contact" id="contact">
      <Navbar />
      <h1>Contact</h1>
      <p>Feel free to send us an e-mail or get in touch via our social networks!</p>
      <div className="form-group">
        <form action="">
          <label htmlFor="">YOUR NAME</label>
          <input type="text" />
          <label htmlFor="">YOUR E-MAIL</label>
          <input type="email" />
          <label htmlFor="">SUBJECT</label>
          <input type="text" />
          <label htmlFor="">YOUR MESSAGE</label>
          <textarea name="" id="" cols={30} rows={10}></textarea>
          <div>
            <button type="submit">SEND</button>
            <div className="social-media">
              <a href="www.google.com" target="_blank" rel="noreferrer"><img src={SocialDiscord} alt="" /></a>
              <a href="www.google.com" target="_blank" rel="noreferrer"><img src={SocialTwitter} alt="" /></a>
              <a href="www.google.com" target="_blank" rel="noreferrer"><img src={SocialTelegram} alt="" /></a>
              <a href="www.google.com" target="_blank" rel="noreferrer"><img src={SocialFacebook} alt="" /></a>
              <a href="www.google.com" target="_blank" rel="noreferrer"><img src={SocialBitcointalk} alt="" /></a>
            </div>
          </div>
        </form>

      </div>
    </div>
  )
}