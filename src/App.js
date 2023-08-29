import "./App.css";
import { useState } from "react";
import Home from './Home';
import About from './About.js';
import NavBar from './components/NavBar';
import BuildAZoo from './project-pages/BuildAZoo/BuildAZoo.js'
import EggProblem from './project-pages/EggProblem/EggProblem.js'
import Mars from './project-pages/Mars/Mars.js'
import BelgianEmbassy from './project-pages/BelgianEmbassy/BelgianEmbassy.js'
import NFTScoring from './project-pages/NFTScoring/NFTScoring.js'
import SelfCheckout from './project-pages/SelfCheckout/SelfCheckout.js'
import SustainableInfrastructure from './project-pages/SustainableInfrastructure/SustainableInfrastructure.js'


import React, { Component } from 'react';
import { Switch, HashRouter,Router, Route, Routes, Navigation, Link } from 'react-router-dom';


// Just the page router
class App extends Component{
  render() {
    return (   
      <div>
       
      <HashRouter basename={process.env.PUBLIC_URL} style={"width: 100%"}>
        {NavBar}
        <Routes>
          <Route path="/" element={Home}/>  
          <Route path="portfolio" element={Home}/>
          <Route path="about" element={About}/> 
          <Route path="buildazoo" element={BuildAZoo}/>  
          <Route path="eggproblem" element={EggProblem}/>  
          <Route path="portfolio/mars" element={Mars}/>  
          <Route path="portfolio/belgianembassy" element={BelgianEmbassy}/>  
          <Route path="portfolio/nftscoring" element={NFTScoring}/>  
          <Route path="portfolio/selfcheckout" element={SelfCheckout}/>  
          <Route path="portfolio/sustainableinfrastructure" element={SustainableInfrastructure}/>  
        </Routes>
      </HashRouter>
    </div>
    );
  }
}

export default App;
