import React from 'react';
import './App.css';

import Home from './components/desktop/pages/Home'
import AboutUs from './components/desktop/pages/AboutUs'
import Get from './components/desktop/pages/Get'
import Partners from './components/desktop/pages/Partners';
import Contact from './components/desktop/pages/Contact';
import FixedBar from './components/desktop/ui/FixedBar'
import NavbarMobile from './components/desktop/ui/NavbarMobile'

function App() {
  return (
    <div className="App">
      <>
        <div className="fixed-bar">
          <FixedBar />
        </div>
        <div className="fixed-bar-mobile">
          <NavbarMobile />
        </div>
        <Home />
        <AboutUs />
        <Partners />
        <Get />
        <Contact />
      </>
    </div>
  );
}

export default App;
