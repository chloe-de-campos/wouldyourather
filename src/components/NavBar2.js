
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

const NavBar2= () => {

  const [padding, setPadding] = useState('5px 4% 2px 4%');

  window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 80) {
        setPadding('5px 4% 2px 14%')

      } else {
        setPadding('5px 4% 2px 14%')
      }
    }
   
  const handleChange = (event) => {
    console.log('handling change like a champ')
  };

  const scrolltowork = (event) => {
    if  (document.getElementById('workGallery')){
      document.getElementById('workGallery').scrollIntoView({behavior:"smooth", block:"start"})}
  }

  const scrolltoabout = (event) => {
    if (document.getElementById("aboutme")){
      document.getElementById("aboutme").scrollIntoView({behavior:"smooth", block:"start"})}
  }

  let navigate = useNavigate(); 
  const openAbout = () =>{ 
    let path = `about`; 
    navigate(path);
  }

  const openHome = () =>{ 
    let path = ``; 
    navigate(path);
  }
  const openWork = () =>{ 
    let path = `work`; 
    navigate(path);
  }

  const scrolltoTop = () => {
    window.scrollTo({top: 0, left: 0, behavior:"smooth"});
  }


    return (
      
      <div style={{padding:padding}} className="NavBar2">
        

     {/* <h1 className="bouncing-text"  style={{"fontSize":"calc(3.75vw)"}} href="https://chloedecampos.com">Chloe de Campos</h1> */}
          
        <div className="NavButtons" style={{}}> 
          
          <div className="button" title="home" style={{fontWeight: '400', fontSize: '12pt', "margin": "0px", border:"0px", boxShadow:"none"}} target="_blank" onClick={scrolltoTop}>
            HOME
          </div>

          <div className="button" title="my work" style={{fontWeight: '400',fontSize: '12pt', "margin": "0px", border:"0px", boxShadow:"none"}} target="_blank"  onClick={scrolltowork}>
            WORK
          </div>

          <div className="button" title="about" style={{fontWeight: '400',fontSize: '12pt', "margin": "0px", border:"0px", boxShadow:"none"}} target="_blank" onClick={scrolltoabout}>
                ABOUT
              </div>

        {/* <Button title="link me in" style={{"margin": "0px"}} target="_blank" href="https://www.linkedin.com/in/chloedecampos">

          <LinkedInIcon style={{width:"20px", margin:"0px", padding:"0px"}} />
        </Button>
        <Button title="email me" style={{"margin": "0px"}} target="_blank"  href="mailto:chloe_de_campos@brown.edu">

          <EmailIcon style={{width:"20px", margin:"0px", padding:"0px"}} />
        </Button>
        <Button title="about me" style={{"margin": "0px"}} onClick={openAbout}>

          <PersonIcon style={{width:"20px", margin:"0px", padding:"0px"}} />
        </Button>
        <Button title="my github" style={{"margin": "0px"}} target="_blank" href="https://github.com/chloe-de-campos/">

          <GitHub style={{width:"20px", margin:"0px", padding:"0px"}} />
        </Button> */}
       
        </div>
       </div>        
    )
  
}

export default <NavBar2/>;