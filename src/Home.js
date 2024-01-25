
import "./App.css";
import About from "./About.js"
import { useState } from "react";

import WorkGallery from "./components/WorkGallery";

// Home page! displays gallery of my work.

const Home = () =>{
    return (
        <div className="mainApp"> 
            
            <div className="AppCenter">
                <div className="topBuffer">
                </div>

                <div id="header">
                </div>
                
                {WorkGallery()}
            </div>
    
    </div>)

  }
  
  export default <Home/>;
  
