import React from 'react'
import './styles.css'

import CreditCardImg from '../../../../../assets/img/credit-card.png'

export default function CreditCard() {
  return (
    <div className="container-credit-card" id="credit-card">

      <h1>Credit Card</h1>
      <div>
        <h2>Final Coin</h2>
        <h2>Credit Card Request</h2>
      </div>
      <p>Thank you for requesting our Final Coin credit card, <br />
        <a href="https://finalmenteglobal.com/">click on the card below</a> to make your request.</p>
      <a href="https://finalmenteglobal.com/"><img src={CreditCardImg} alt="credit card finalmente global" /></a>
      <p>*You will be redirected to our main website Finalmente Global. <br />
        Have the documents in hand to proceed with the registration to request your Final Coin Credit Card.</p>
    </div>
  )
}