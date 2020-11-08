import React from 'react'
import './styles.css'

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="sidebar-mobile">
          <div className="logo">
            <div className="arion">1</div>
            
          </div>

          

          <div className="nav-items">
            <ul>
              <li className="icon"><a href="#home">Home</a></li>
              <li className="icon"><a href="#about">About us</a></li>
              <li className="icon"><a href="#get">Get</a></li>
              <li className="icon"><a href="#partners">Partners</a></li>
              <li className="icon"><a href="#roadmap">Roadmap</a></li>
              <li className="icon"><a href="#explorer">Explorer</a></li>
              <li className="icon"><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="item-on">
            <div className="item-selected"></div>
          </div>
        </div>
      </nav>
    </>
  )
}