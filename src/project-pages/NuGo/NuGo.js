import "../../App.css"
import { useNavigate } from "react-router-dom";

const NuGo = ()  => {
    
    let navigate = useNavigate(); 
    function openPath (mypath) {
        let path = mypath; 
        navigate(path);
    }

    return(
        <div>ls
            <div class="topBuffer"> </div>
            <div class="projectDescription">
            <p className="date">January 2024</p>
                <h2>Nugo</h2>

                <p>I found these bars </p>

                <h3>Challenge</h3>

                <p>
                The original packaging presented several challenges:

                    <ol>
                        <li><emph> Weird Logo:</emph> I found that the rotation of the box and font of the original logo disrupted the visual harmony. This issue led to a lack of cohesiveness and a less professional aesthetic. </li>

                        <li><emph> Repeated Information: </emph>Repetition of information on the packaging caused confusion and clutter. Streamlining the content was crucial for a cleaner and more effective design.</li>

                        <li><emph>Typographic Confusion:</emph> The typography lacked clear hierarchy, making it difficult for consumers to grasp essential information quickly. Clarity in communication was a key area for improvement.</li>

                        <li><emph>Unclear Audience:</emph> The existing design had a confusing blend of sports nutrition and delicate chocolatey decadence, making it challenging to identify the target audience.</li>

                        
                    </ol>
                </p>

                <h3>Objectives</h3>

                <p>
                    <ol>
                        <li><emph>Enhance Visual Appeal:</emph> Create a packaging design that catches the consumer's eye and communicates the energy bar's quality. </li>
                        <li><emph> Brand Consistency: </emph>Ensure the new design aligns with the overall brand image and values.</li>
                        <li><emph>Informative Design: </emph>Incorporate key information about the product, benefits, and usage to guide the consumer.</li>
                    </ol>
                </p>

                <p>Impractical problems require impractical solutions. Mars is an app designed for students to communicate during class in the most obnoxious way possible to their peers. It uses javascript and React to translate messages from english to morsecode and then strobes the webpage to transmit it to those in view. It also includes a decoding interface for recipients to record and translate messages back to english.</p>

                <p>This stupid app is named for my brilliant friend Mars, who used to sit behind me and whose attention I really really wanted. </p>
            
                <p><a target="_blank" href="https://chloe-de-campos.github.io/mars/">Send a message to mars</a>.</p> 

                <button className="button" onClick={() => navigate(-1)} type="button">
                Return to Projects</button>
            </div> 
        </div>
       
   
    )

}

export default <NuGo/>;