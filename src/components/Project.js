import "../App.css"
import Button from '@mui/material/Button';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import React, { useState, useEffect } from 'react';
import "../App.css";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import EastIcon from '@mui/icons-material/East';
import CloseIcon from '@mui/icons-material/Close';


export default function Project(props) {

    let navigate = useNavigate(); 
   
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.classList.add('bodyNoScroll');
        } else {
            document.body.classList.remove('bodyNoScroll');
        }
    }, [open]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        bgcolor: 'background.paper',
        border: '0px solid white',
        boxShadow: 24,
        p: 4,
        outline: 'none',
        maxHeight: '80vh', // Adjust max height as necessary
        overflowY: 'auto' // Ensure content can scroll
    };

    return(

        <div className="Project" style = {{border: '1pt solid #7e7e7e'}}> 
            
{/* 
            <img style={{position: 'sticky', zIndex: 0}} src={props.image}/>
            <h3 style={{position: 'sticky', zIndex: 1, "marginBottom": "10%"}}>{props.name}</h3>
            <p style={{"marginTop":"10%", "marginBottom":"2%"}}>{props.desc}</p>

            <button className="button" onClick={() => navigate(props.link)} type="button">
            View Project</button>

            <div className="Project">
                 */}
          
            <div id="projectbox" onClick={handleOpen}> 
                <img src={props.image} alt={props.name} style={{maxHeight: '50vh', width: 'calc(120px + 20vw)', margin: 'initial', objectFit: 'cover'}}/>
                <div className="ProjectContent" >
                    <h4 style={{'margin-top':'0pt', 'margin-bottom': '0pt', 'align-content': 'space-between', 'color':'rgb(104 104 104)', 'fontWeight': 'normal'}}>{props.year}</h4>
                    <h1 style={{'margin':'0pt', fontFamily:'baskerville'}}>{props.name}</h1>
                        <p  style={{'margin-bottom':'0%'}}>{props.desc}</p>
                        {/* <button className="button" onClick={() => navigate(props.link)} type="button">
                            View Project
                        </button> */}
                        <Button 
                        disableElevation
                    disableRipple
                    size="small"
                    sx={{
                      ml: 1,
                      "&.MuiButtonBase-root:hover": {
                        bgcolor: "transparent"
                      }
                    }}
                        style={{justifyContent:'left', padding:'0px', margin:"0px", color: '#7e7e7e'}} onClick={handleOpen}>Read Case Study <EastIcon style={{fontSize:"small", paddingLeft: "4pt" }}/></Button>
                </div>
                
            </div>
              {/* Modal for project details */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableScrollLock={true}
            >
                <Box sx={modalStyle }>
                    <Button 
                    disableElevation
                    disableRipple
                    size="small"
                    sx={{
                      ml: 1,
                      "&.MuiButtonBase-root:hover": {
                        bgcolor: "transparent"
                      }
                    }}
                    style={{justifyContent:'left',padding:'0px', margin:"0px", width: '24px !important;', height: '24px !important;', color: '#7e7e7e'}} onClick={handleClose}><CloseIcon style={{fontSize:"large", width:'40px'}}/></Button>
                    <p id="modal-modal-description">{props.content}</p>
                </Box>
            </Modal>

        </div> 
        

    )
}