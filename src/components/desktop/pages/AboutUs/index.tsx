import React from 'react'
//import './styles.css'

import WhatIsFinalCoin from './WhatIsFinalCoin'
import CoinSpecs from './CoinSpecs'
import Roadmap from './Roadmap'
import SocialMedia from './SocialMedia'
import Team from './Team'

export default function AboutUs() {
  return(
    <div className="container-about" id="about">
      <WhatIsFinalCoin />
      <CoinSpecs />
      <Roadmap />
      <SocialMedia />
      <Team />
    </div>
  )
}