import "../../App.css"
import { useNavigate } from "react-router-dom";

const Mars = ()  => {
    
    let navigate = useNavigate(); 
    function openPath (mypath) {
        let path = mypath; 
        navigate(path);
    }

    return(
        <div>
            <div class="topBuffer"> </div>
            <div class="projectDescription">
            <p className="date">February 2023</p>
                <h2>Mars</h2>
                <p>Impractical problems require impractical solutions. Mars is an app designed for students to communicate during class in the most obnoxious way possible to their peers. It uses javascript and React to translate messages from english to morsecode and then strobes the webpage to transmit it to those in view. It also includes a decoding interface for recipients to record and translate messages back to english.</p>

                <p>This stupid app is named for my brilliant friend Mars, who used to sit behind me and whose attention I really really wanted. </p>
            
                <p><a target="_blank" href="https://chloe-de-campos.github.io/mars/">Send a message to mars</a>.</p> 

                <button className="button" onClick={() => navigate(-1)} type="button">
                Return to Projects</button>
            </div> 
        </div>
       
   
    )

}

export default <Mars/>;