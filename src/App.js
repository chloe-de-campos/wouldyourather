import "./App.css";
import { useState } from "react";
import Home from './Home';
import About from './About.js';
import NavBar2 from './components/NavBar2';
import BuildAZoo from './project-pages/BuildAZoo/BuildAZoo.js'
import EggProblem from './project-pages/EggProblem/EggProblem.js'
import Mars from './project-pages/Mars/Mars.js'
import NuGo from './project-pages/NuGo/NuGo.js'
import Shindig from './project-pages/Shindig/Shindig.js'
import BelgianEmbassy from './project-pages/BelgianEmbassy/BelgianEmbassy.js'
import NFTScoring from './project-pages/NFTScoring/NFTScoring.js'
import SelfCheckout from './project-pages/SelfCheckout/SelfCheckout.js'
import SustainableInfrastructure from './project-pages/SustainableInfrastructure/SustainableInfrastructure.js'
import Work from './Work.js'

import ScrollToTop from './components/ScrollToTop'

import React, { Component } from 'react';
import { Switch, BrowserRouter, HashRouter,Router, Route, Routes, Navigation, Link } from 'react-router-dom';


// Just the page router
class App extends Component{
  
  render() {
    return (   
      <div>
       
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
      
        <HashRouter style={"width: 100%"}>
          <ScrollToTop/>
          {NavBar2}
          {/* <div> */}
          <Routes>
            <Route exact path="/" element={Home}/>  
            {/* <Route path="/portfolio" element={Home}/> */}
            <Route exact path="/about" element={About}/> 
            <Route exact path="/work" element={Work}/> 
            <Route exact path="/work/buildazoo" element={BuildAZoo}/>  
            <Route exact path="/work/eggproblem" element={EggProblem}/>  
            <Route exact path="/work/mars" element={Mars}/>  
            <Route exact path="/work/belgianembassy" element={BelgianEmbassy}/>  
            <Route exact path="/work/nftscoring" element={NFTScoring}/>  
            <Route exact path="/work/selfcheckout" element={SelfCheckout}/>  
            <Route exact path="/work/sustainableinfrastructure" element={SustainableInfrastructure}/>  
            <Route exact path="/work/NuGo" element={NuGo}/>  
            <Route exact path="/work/shindig" element={Shindig}/>  
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
