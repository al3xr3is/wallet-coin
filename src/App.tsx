import React from 'react';
import './App.css';

import Home from './components/desktop/pages/Home'
import AboutUs from './components/desktop/pages/AboutUs'
import Get from './components/desktop/pages/Get'
import Partners from './components/desktop/pages/Partners';
import Contact from './components/desktop/pages/Contact';

function App() {
  return (
    <div className="App">
      <>
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
