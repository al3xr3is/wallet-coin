import React from 'react'
import './styles.css'

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="sidebar-mobile">
          <div className="menu-toggle">
            <div className="one">1</div>
            <div className="two">2</div>
            <div className="three">3</div>
          </div>

          <div className="item-on">
            <div className="item-selected"></div>
          </div>

          <div className="list-items">
            <ul>
              <li className="icon">1</li>
              <li className="icon">2</li>
              <li className="icon">3</li>
              <li className="icon">4</li>
              <li className="icon">5</li>
              <li className="icon">6</li>
              <li className="icon">7</li>
              <li className="icon">8</li>
              <li className="icon">9</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}