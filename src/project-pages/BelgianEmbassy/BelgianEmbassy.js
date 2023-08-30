
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
                
                <h2>Redesigning The Belgian Embassy</h2>
                Currently, the biggest resource for for Beglian-American expats is <a href="https://unitedstates.diplomatie.belgium.be/en">the website</a> for the Belgian Embassy and Consulates in the United States. 
              However, the information on the current website is disorganized and difficult to view on a mobile device. I reimagined the page to be more accessible. 

                <h3>The Original Site</h3>
                <p>Several fundamental issues with this site make it inaccessible to the target users:</p>
                <li>The page is full of small text with low contrast against its background</li>
                <li>The images included don't have alt text, so they can't be interpreted by a screenreader</li>
                <li>On the mobile version of the site, the buttons are too small for even the most dextrous fingers to reach them on a touchscreen.</li>
                <li>The language bar gets lost in the corner, allowing for users to be trapped in a version of the site that's in a language they don't understand. In combination with the small buttons, users with less mobility aren't able to access the language change feature.</li>
         

                <h3>The First Redesign</h3>
                <h3>1. Low-Fi Prototyping</h3> 

                <p>These prototypes block out how the layout can be designed to adapt to different screen sizes</p>
            
                <div className = "project-image"> 
                    <img src={require("./annotated lowfi mobile.png")}/> 
                    <img src={require("./annotated-lowfi-laptop.png")}/> 
                </div>

                <h3>2. Hi-Fi Prototyping</h3> 

                <p>These protoypes flesh out the feel of the website, sorting the information by target audience and using heirarchies of heading sizes to encourage users to quickly skim the page and find the information they're searching for.</p> 

                <div className = "project-image"> 
                    <img src={require("./annotated-hifi-laptop.png")}/> 
                    <img src={require("./annotated-hifi-mobile.png")}/> 
                </div>

                <h3>3. First Draft</h3> 
                
                <p>The <a href="https://sdpy695.github.io/Responsive-Redesign/" target="_blank">first design</a> is a dummy page made using html and css which is displayed in a more accessible way and can responsively adapt to screen resizing.</p>


                <h3>4. Reflection</h3> 
                <p>Returning to this design with more experience, I noticed ways the functionality could be improved and the design could be less... ugly. I kicked off a redesign of the redesign. </p>

                <p>
                This time I made two hi-fi mockups: one for mobile and one for desktop:
                </p>

                <div style={{display: "flex", flexDirection: "row"}}>
                    <div style={{objectFit: "scale-down", width: "55%"}} > 
                        <img className="project-image"  src={require("./desktopreredesign.png")} />
                    </div>
                    <div style={{objectFit: "scale-down", height: "50vmax", overflow:"scroll",  width: "45%"}}>
                        <img className="project-image" style={{width:"auto"}} src={require("./phonereredesign.png")}/> 
                    </div>
                </div>

                <p>On round two, I replaced the button-only interface with images and a search bar to make the page more dynamic, and added some javascript to help the page scale more fluidly. </p>

                <p>Click <a href="updated rr/index.html" target="_blank">here</a> to view the new update. </p> 

                <button className="button" onClick={() => navigate(-1)} type="button">
            Return to Projects</button>
            </div> 
        </div>
       
   
    )

}

export default <BuildAZoo/>;