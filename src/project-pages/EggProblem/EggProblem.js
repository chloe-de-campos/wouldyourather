// import { BorderHorizontalTwoTone } from "@mui/icons-material"
// import "../ProjectPages.css"
import "../../App.css"
import { useNavigate } from "react-router-dom";

const EggProblem = ()  => {
    
    let navigate = useNavigate(); 
    function openPath (mypath) {
        let path = mypath; 
        navigate(path);
    }

    return(
        <div>
            <div class="projectDescription">
            
                <div>
                <p className="date">February 2023</p>
                <h2>The Egg Problem</h2>
                
                <p>Do you ever get so wrapped up in a riddle that you can't think about anything else until you've solved it? After watching my friends spread one nasty problem between themselves like a virus, I built a web app to help them visualize and discuss solutions.</p>
                
                <h4>That One Nasty Problem</h4>
                <p>You are given 12 eggs and told that 1 of them is a <a target="_blank" href="https://youtu.be/kpgRdVBf5Qk?t=11"><i>bad egg</i></a>. Though the bad egg is visually identical to the other eggs, you know that its weight is marginally different than the weight of the other eggs. You have a balance scale which you may use 3 times to compare sets of eggs. How do you find the bad egg and determine whether it is heavier or lighter than the other eggs?</p>

                <h4>The Simulator</h4>
                <p>My tool provides riddlers with a drag-and-drop interface to explore possible approaches to the problem. The simulator secretly designates one bad egg. Then users can practice weighing different combinations of eggs against eachother, with the results of each measurement recorded and displayed at the bottom. When a user thinks they've found the egg, they can check their results against the simulator.</p>

                <a href="https://chloe-de-campos.github.io/the-egg-problem/" target="_blank">Solve the egg problem yourself 😇</a>.

                </div>
                {/* <button className="button" onClick={() => navigate(-1)} type="button">
            Return to Projects</button> */}
            </div> 
            
        </div>
       
   
    )

}

export default <EggProblem/>;