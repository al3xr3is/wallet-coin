import React from 'react'
import './styles.css'

import Navbar from '../../ui/Navbar'

export default function Home() {
  return (
    <div className="container-home" id="home">
    <Navbar img="icon-01-home"/>
      <div className="aside">
        <h1>Welcome</h1>
        <p>Final Coin is the cryptocurrency created as a branch of the Finalmente Global Group. We work to incorporate the latest trends and technologies to promote the Vision of “Success is Easy”. Let us show you how.</p>
        <a className="button" href="https://discord.com/invite/ccRq2wE5Be" rel="noreferrer" target="_blank">Join Us</a>
      </div>
    </div>
  )
}