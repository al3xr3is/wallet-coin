import React from 'react';
import './App.css';

import Home from './components/desktop/pages/Home'
import AboutUs from './components/desktop/pages/AboutUs'
import Get from './components/desktop/pages/Get'
import Partners from './components/desktop/pages/Partners';
import Roadmap from './components/desktop/pages/Roadmap';

function App() {
  return (
    <div className="App">
      <>
      <Home />
      <AboutUs />
      <Get />
      <Partners />
      <Roadmap />
      </>
    </div>
  );
}

export default App;
