import "../../App.css"
import { useNavigate } from "react-router-dom";



const Shindig = ()  => {
    
    let navigate = useNavigate(); 
    function openPath (mypath) {
        let path = mypath; 
        navigate(path);
    }

    return(
        <div>ls
            <div class="topBuffer"> </div>
            <div class="projectDescription">
            <img src={require('./nugo mockup dark short.png')}></img>
            <p className="date">January 2024</p>
                <h2>Shindig</h2>

                <p>I'm an athlete and a vegetarian and a college student. At the center of that venn diagram you find a person who is constantly scavenging for protein. I almost didn't buy a NuGo bar because the packaging was so offputting--and I'm vain about this stuff--but I liked the ingredients so I took a risk. The risk paid off, and I found myself not only satisfied but hooked, purchasing bars in every available flavor the following week. I started a redesign journey with the goal of creating packaging that would not only attract but excite me as a consumer.</p>


                <h3>Challenges</h3>

                <img src={require('./old_bar.png')}></img>
                <p>
                The original packaging presented several challenges:

                    <ol>
                        <li><b> Weird Logo:</b> I found that the rotation of the box and font of the original logo disrupted the visual harmony. This issue led to a lack of cohesiveness and a less professional aesthetic. </li>

                        <li><b>Repeated Information: </b>Repetition of information on the packaging caused confusion and clutter. Streamlining the content was crucial for a cleaner and more effective design.</li>

                        <li><b>Typographic Confusion:</b> The typography lacked clear hierarchy, making it difficult for consumers to grasp essential information quickly. Clarity in communication was a key area for improvement.</li>

                        <li><b>Unclear Audience:</b> I couldn't tell who the design was for. It had a confusing blend of sportiness, delicate chocolatey decadence, and palm-oil-hating crunchiness.</li>
                    </ol>
                </p>

                <h3>Redesign Solutions</h3>
                <img src={require('./new_bar.png')}></img>
                <p>
                    <ol>
                        <li><b>Connect To Target Market:</b> Adopted an earthy, natural style to resonate with the target market, including vegans and those with specific dietary concerns, creating a visually cohesive and appealing packaging.</li>       
                        <li><b>Enhance Visual Appeal:</b> Created a packaging design that catches the consumer's eye and communicates the energy bar's quality. Incorporated organic illustrations showcasing ingredients and flavors, fostering a connection with health-conscious consumers seeking natural products.</li>
                        <li><b>Real Dark Chocolate Focus: </b>Emphasized the phrase "Real Dark Chocolate" by using a decadent dripping blobby shape and a dark chocolatey color. This approach maintains prominence without overwhelming the packaging with large text.</li>
                    </ol>
                </p>
   
                <button className="button" onClick={() => navigate(-1)} type="button">
                Return to Projects</button>
            </div> 
        </div>
       
   
    )

}

export default <Shindig/>;