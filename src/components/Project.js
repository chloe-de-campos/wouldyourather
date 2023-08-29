import "../App.css"
import Button from '@mui/material/Button';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Project(props) {

    let navigate = useNavigate(); 
   

    return(

        <div className="Project"> 
            <h3 style={{"marginBottom": "10%"}}>{props.name}</h3>
            <img src={props.image}/>
            <p style={{"marginTop":"10%", "marginBottom":"2%"}}>{props.desc}</p>

            <button className="button" onClick={() => navigate(props.link)} type="button">
            View Project</button>

        </div> 
        

    )
}