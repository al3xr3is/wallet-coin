import React from 'react'
import './styles.css'

import Navbar from '../../ui/Navbar'
import Wallet from './Wallet'
import CreditCard from './CreditCard'

export default function Get() {
  return(
    <div className="container-get" id="get">
      <Navbar />
      <Wallet />
      <CreditCard />
    </div>
  )
}