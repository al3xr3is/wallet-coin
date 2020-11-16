import React from 'react'
//import './styles.css'
import './styless.css'

import SocialDiscord from '../../../../assets/img/contact-icon-discord.png'
import SocialTwitter from '../../../../assets/img/contact-icon-twitter.png'
import SocialTelegram from '../../../../assets/img/contact-icon-telegram.png'
import SocialFacebook from '../../../../assets/img/contact-icon-facebook.png'
import SocialBitcointalk from '../../../../assets/img/contact-icon-bitcointalk.png'

export default function Contact() {
  return (
    <div className="container-contact" id="contact">
      <div className="title">
      <h1>Contact</h1>
      <p>Feel free to send us an e-mail or get in touch via our social networks!</p>
      </div>
      <div className="form-group">
        <form action="mailto:info@finalmenteglobal.com" method="post" encType={"text/plain"}>
          <label htmlFor="name">YOUR NAME</label>
          <input type="text" name="name"/>
          <label htmlFor="email">YOUR E-MAIL</label>
          <input type="email" name="email"/>
          <label htmlFor="subject">SUBJECT</label>
          <input type="text" name="subject"/>
          <label htmlFor="message">YOUR MESSAGE</label>
          <textarea name="message" cols={30} rows={5}></textarea>
          <div>
            <button type="submit">SEND</button>
          </div>
        </form>
      </div>
      <div className="social-media">
        <a href="https://discord.gg/ccRq2wE5Be" target="_blank" rel="noreferrer"><img src={SocialDiscord} alt="Discord" /></a>
        <a href="https://twitter.com/final_coin" target="_blank" rel="noreferrer"><img src={SocialTwitter} alt="Twitter" /></a>
        <a href="https://t.me/finalcoin" target="_blank" rel="noreferrer"><img src={SocialTelegram} alt="Telegram" /></a>
        <a href="https://www.facebook.com/finalcoinza" target="_blank" rel="noreferrer"><img src={SocialFacebook} alt="Facebook" /></a>
        <a href="https://bitcointalk.org/index.php?topic=5274631.0" target="_blank" rel="noreferrer"><img src={SocialBitcointalk} alt="Bitcointalk" /></a>
      </div>
    </div>
  )
}