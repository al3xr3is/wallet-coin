import React from 'react'
import './styles.css'

import Navbar from '../../ui/Navbar'

export default function Home() {
  return(
    <div className="container-home" id="home">
      <Navbar />
      <h1>Home</h1>
    </div>
  )
}