
import { useState } from 'react';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";

import { IconButton } from '@mui/material';


import * as React from 'react';

import { NavLink } from 'react-router-dom';
import About from '../About.js'



// top navigation bar. collapses on scroll, or on smaller screensize 

const NavBar= () => {

  const [padding, setPadding] = useState('40px 14% 10px 14%');

  window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 80) {
        setPadding('0px 7%')

      } else {
        setPadding('40px 14% 10px 14%')
      }
    }
   
  const handleChange = (event) => {
    console.log('handling change like a champ')
  };

  let navigate = useNavigate(); 
  const openAbout = () =>{ 
    let path = `about`; 
    navigate(path);
  }

  if(window.matchMedia("(min-width: 600px)").matches){
    return (
      <div style={{padding:padding}} className="NavBar">
         <NavLink style={{ textDecoration: 'none', color: "black"}} to="/"><h1 style={{"fontSize":"calc(3vw)"}} href="https://sdpy695.github.io/#/UI-Portfolio-4/">Chloe de Campos</h1></NavLink>
        <div className="NavButtons">
      
        <Button title="link me in" style={{"margin": "10px"}} target="_blank" href="https://www.linkedin.com/in/chloedecampos">
          {/* Link me in */}
          <LinkedInIcon/>
        </Button>
        <Button title="email me" style={{"margin": "10px"}} target="_blank"  href="mailto:chloe_de_campos@brown.edu">
          {/* Email  */}
          <EmailIcon/>
        </Button>
        <Button title="about me" style={{"margin": "10px"}} onClick={openAbout}>
          {/* About */}
          <PersonIcon/>
        </Button>
        {/* <Button style={{"margin": "10px"}} onClick={() => alert("link intentionally broken for anonymization")}>link me in</Button>
        <Button style={{"margin": "10px"}} onClick={() => alert("link intentionally broken for anonymization")}>see my cartoons</Button> */}
        {/* <a style={{"padding": "10px"}} target="_blank"  href="mailto:chloe_de_campos@brown.edu">Email me</a>
        <a style={{"padding": "10px"}} target="_blank" href="https://www.linkedin.com/in/chloedecampos">Link me in</a>
        <a style={{"padding": "10px"}} target="_blank"  href="https://www.instagram.com/stink.lines/">Look at my cartoons</a> */}
          {/* <NavLink to="/Responsive-Redesign">ResponsiveRedesign</NavLink> */}
          {/* <a style={{"padding": "10px"}} href="">Work</a>
          <a style={{"padding": "10px"}} href="">Contact</a> */}
  
        </div>
       </div>        
    )
  }
  else{
    return (
      <div style={{justifyContent:'center', padding:'1%',}} id="NavBar" className="NavBar">
          <NavLink style={{ textDecoration: 'none', color: "black"}} to="/"><h1 style={{"fontSize":"calc(4vw)", "padding":"10px"}} href="">Chloe de Campos</h1></NavLink>
          <div className="NavButtons">
      
        <Button title="link me in" style={{"margin": "-3px", padding: "1px"}} target="_blank" href="https://www.linkedin.com/in/chloedecampos">
          {/* Link me in */}
          <LinkedInIcon/>
        </Button>
        <Button title="email me" style={{"margin": "-3px", padding: "1px"}} target="_blank"  href="mailto:chloe_de_campos@brown.edu">
          {/* Email  */}
          <EmailIcon/>
        </Button>
        <Button title="about me" style={{"margin": "-3px", padding: "1px"}} onClick={openAbout}>
          {/* About */}
          <PersonIcon/>
        </Button>
        </div>
       </div>        

       
    )
  }
  
}

export default <NavBar/>;