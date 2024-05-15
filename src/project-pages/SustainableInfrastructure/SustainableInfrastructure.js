
import "../../App.css"
import { useNavigate } from "react-router-dom";

const SustainableInfrastructure = ()  => {
    
    let navigate = useNavigate(); 
    function openPath (mypath) {
        let path = mypath; 
        navigate(path);
    }

    return(
        <div>
    
            <div className="projectDescription">
            <p className="date">July 2021</p>
                <h2>The Center for Sustainable Infrastructure</h2>
                <div>
          
	        
                <p>
                In the spring and summer of 2021, I interned at the Center for Sustainable Infrastructrue in Olympia, Washington. These are graphics I designed to illustrate the industrial systems and problem-solving approaches they were developing. 
                </p>
        
                </div>

                <div style={{margin:"10vh"}}></div>
                <h3>Industrial Symbiosis</h3>
                <p>An industrial symbiosis model imagines a system in which byproducts from one industrial process can be reused as raw materials in another, rather than treated as waste.</p>


                <img src={require("./Cleanmaterials.png")}/>
        
                <div style={{margin:"10vh"}}></div>
                <h3>Value Planning</h3>
                <p>These diagrams use case studies to demonstrate the impact that a "value-planning" approach can have on a project. Value planning involves local communties in thinking expansively about a project and addressing the root. </p>
                

                <div className="gallery-container" >
                    <div className="thumbnails"></div>
                        <div className="slides" >
                            <div className="project-image" > 
                                <img src={require("./Olympia.png")}/>
                            </div>
                    
                            <div className="project-image" >
                                <img src={require("./Goldendale.png")}/>
                            </div>
                            
                            <div className="project-image" >
                                <img className="project-image"  src={require("./Stevenson.png")}/>
                            </div>
                    </div>
                </div>
                <div style={{margin:"10vh"}}></div>
                <h3>Renewable Hydrogen</h3>
        
                <div >
                    <div className="project-image" >
                        <img src={require("./renewable hydrogen txt.png")}/>
                    </div>
                </div>

                <p>Check out the <a href="https://www.sustaininfrastructure.org/impact">2021 Impact Report</a> to see my published work. </p>

                {/* <button className="button" onClick={() => navigate(-1)} type="button">
                Return to Projects</button> */}
            </div> 
        </div>
       
   
    )

}

export default <SustainableInfrastructure/>;