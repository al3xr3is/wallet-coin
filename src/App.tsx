import React from 'react';
import './App.css';

import Home from './components/desktop/pages/Home'
import AboutUs from './components/desktop/pages/AboutUs'
import Get from './components/desktop/pages/Get'
import Partners from './components/desktop/pages/Partners';
import Roadmap from './components/desktop/pages/Roadmap';
import Contact from './components/desktop/pages/Contact';
import Explorer from './components/desktop/pages/Explorer';

function App() {
  return (
    <div className="App">
      <>
      <Home />
      <AboutUs />
      <Get />
      <Partners />
      <Roadmap />
      <Explorer />
      <Contact />
      </>
    </div>
  );
}

export default App;
