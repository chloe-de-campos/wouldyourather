
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
import { GitHub } from '@mui/icons-material';



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
         <NavLink style={{ textDecoration: 'none', color: "black"}} to="/">
          <h1 className="bouncing-text"  style={{"fontSize":"calc(3.75vw)"}} href="https://chloedecampos.com">Chloe de Campos</h1>
          </NavLink>
        <div className="NavButtons">
      
        <Button title="link me in" style={{"margin": "0px"}} target="_blank" href="https://www.linkedin.com/in/chloedecampos">
          {/* Link me in */}
          <LinkedInIcon style={{width:"20px", margin:"0px", padding:"0px"}} />
        </Button>
        <Button title="email me" style={{"margin": "0px"}} target="_blank"  href="mailto:chloe_de_campos@brown.edu">
          {/* Email  */}
          <EmailIcon style={{width:"20px", margin:"0px", padding:"0px"}} />
        </Button>
        <Button title="about me" style={{"margin": "0px"}} onClick={openAbout}>
          {/* About */}
          <PersonIcon style={{width:"20px", margin:"0px", padding:"0px"}} />
        </Button>
        <Button title="my github" style={{"margin": "0px"}} target="_blank" href="https://github.com/chloe-de-campos/">
          {/* My Github*/}
          <GitHub style={{width:"20px", margin:"0px", padding:"0px"}} />
        </Button>
       
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
                    <LinkedInIcon style={{width:"20px", margin:"0px", padding:"0px"}}/>
                </Button>
                <Button title="email me" style={{"margin": "-3px", padding: "1px"}} target="_blank"  href="mailto:chloe_de_campos@brown.edu">
                {/* Email  */}
                    <EmailIcon style={{width:"20px", margin:"0px", padding:"0px"}}/>
                </Button>
                <Button title="about me" style={{"margin": "-3px", padding: "1px"}} onClick={openAbout}>
                {/* About */}
                    <PersonIcon style={{width:"20px", margin:"0px", padding:"0px"}}/>
                </Button>
            
                <Button title="my github" style={{"margin": "-3px", padding: "1px"}} target="_blank" href="https://github.com/chloe-de-campos/">
                {/* My Github*/}
                    <GitHub style={{width:"20px", margin:"0px", padding:"0px"}} />
                </Button>
            
        </div>
       </div>        

       
    )
  }
  
}

export default <NavBar/>;