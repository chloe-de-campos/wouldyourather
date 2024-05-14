
import "./App.css";
import About from "./About.js"
import { useState } from "react";

import WorkGallery from "./components/WorkGallery";

// Home page! displays gallery of my work.

const Work = () =>{
    return (
        <div className="mainApp"> 
            
            <div className="AppCenter">

                <div id="header">
                </div>
                
                <div>
                    
                </div>
                {WorkGallery()}
            </div>
    
    </div>)

  }
  
  export default <Work/>;
  
