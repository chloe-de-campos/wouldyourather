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
import { Switch, BrowserRouter,Router, Route, Routes, Navigation, Link } from 'react-router-dom';


// Just the page router
class App extends Component{
  render() {
    return (   
      <div>
       
      <BrowserRouter basename={process.env.PUBLIC_URL} style={"width: 100%"}>
        {NavBar}
        <Routes>
          <Route path="/" element={Home}/>  
          <Route path="portfolio" element={Home}/>
          <Route path="about" element={About}/> 
          <Route path="buildazoo" element={BuildAZoo}/>  
          <Route path="eggproblem" element={EggProblem}/>  
          <Route path="mars" element={Mars}/>  
          <Route path="belgianembassy" element={BelgianEmbassy}/>  
          <Route path="nftscoring" element={NFTScoring}/>  
          <Route path="selfcheckout" element={SelfCheckout}/>  
          <Route path="sustainableinfrastructure" element={SustainableInfrastructure}/>  
        </Routes>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
