import React from 'react'
import './styles.css'

import Navbar from '../../../ui/Navbar'

import CreditCardImg from '../../../../../assets/img/credit-card.png'

export default function CreditCard() {
  return(
    <div className="container-credit-card" id="credit-card">
      <Navbar />
      <h1>Credit Card</h1>
      <h3>Final Coin</h3>
      <h3>Credit Card Request</h3>
      <p>Thank you for requesting our Final Coin credit card, <br/>
        <a href="https://finalmenteglobal.com/">click on the card below</a> to make your request.</p>
        <img src={CreditCardImg} alt="credit card finalmente global"/>
      <p>*You will be redirected to our main website Finalmente Global. <br/>
        Have the documents in hand to proceed with the registration to request your Final Coin Credit Card.</p>
    </div>
  )
}