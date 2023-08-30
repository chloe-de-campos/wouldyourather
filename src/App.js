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

import ScrollToTop from './components/ScrollToTop'

import React, { Component } from 'react';
import { Switch, BrowserRouter, HashRouter,Router, Route, Routes, Navigation, Link } from 'react-router-dom';


// Just the page router
class App extends Component{
  
  render() {
    console.log(process.env.PUBLIC_URL)
    return (   
      <div>
       
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
      
        <HashRouter style={"width: 100%"}>
          <ScrollToTop/>
          {NavBar}
          {/* <div> */}
          <Routes>
            <Route exact path="/" element={Home}/>  
            {/* <Route path="/portfolio" element={Home}/> */}
            <Route exact path="/about" element={About}/> 
            <Route exact path="/buildazoo" element={BuildAZoo}/>  
            <Route exact path="/eggproblem" element={EggProblem}/>  
            <Route exact path="/mars" element={Mars}/>  
            <Route exact path="/belgianembassy" element={BelgianEmbassy}/>  
            <Route exact path="/nftscoring" element={NFTScoring}/>  
            <Route exact path="/selfcheckout" element={SelfCheckout}/>  
            <Route exact path="/sustainableinfrastructure" element={SustainableInfrastructure}/>  
            <Route element={About}/>  
          </Routes>
          {/* </div> */}
        </HashRouter>
      {/* </BrowserRouter> */}
    </div>
    );
  }
}

export default App;
