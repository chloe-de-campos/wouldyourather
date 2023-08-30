// import { BorderHorizontalTwoTone } from "@mui/icons-material"
// import "../ProjectPages.css"
import "../../App.css"
import { useNavigate } from "react-router-dom";

const BuildAZoo = ()  => {
    
    let navigate = useNavigate(); 
    function openPath (mypath) {
        let path = mypath; 
        navigate(path);
    }

    return(
        <div>
            <div className="topBuffer"> </div>
            <div className="projectDescription">
                <p className="date">November 2022</p>
                <h2 >Build a Zoo</h2>
                <p>Statistically speaking, 94% of zookeepers struggle with online shopping for new animals. The most common complaint is that the options are presented in an overwhelming manner, without an easy way to narrow the search. The only reasonable solution to this issue is a one stop online shop for all zoo animals, featuring relevant filter and sort categories such as the animal's diet, or the number of legs on the animal. </p>

                <p>I'm kidding. This is an exercise in using React.js to display data dynamically on a webpage, mimicking an online shopping interface. </p>

                The application allows users to look through a catalogue of zoo animals and compile a list of those they would like to purchase.

                It offers wacky sort and filter features, which can be layered on top of eachother for users to quickly narrow their search through the catalogue.

                    
                <p><a target= "_blank" href="https://sdpy695.github.io/Development/">Find some animals for your own zoo</a>.</p> 

                <button className="button" onClick={() => navigate(-1)} type="button">
            Return to Projects</button>
            </div> 
        </div>
       
   
    )

}

export default <BuildAZoo/>;