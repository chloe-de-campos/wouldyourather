
import "../../App.css"
import { useNavigate } from "react-router-dom";

const SelfCheckout = ()  => {
    
    let navigate = useNavigate(); 
    function openPath (mypath) {
        let path = mypath; 
        navigate(path);
    }

    return(
        <div>
            <div className="topBuffer"> </div>
            <div className="projectDescription">

            <p className="date">September 2022</p>
                <h2>Self Checkout</h2>
                <h3>The Interface</h3>

                <p>The self checkout machine allows more customers to pay at once without requiring more staff. The interface is an evolution of the cashier-manned checkout, with the scanning system and payment system both oriented to face the customer.</p>
          
                <p>This exercise explores the personas of the users who interact with a specific interface. I observed real users interacting with a the self checkout machine at a local grocery store and interviewed the individuals about their experiences.</p>

                <div flex="auto">
                    <div className="project-image" style={{display: "flex", justifyContent: "center"}}> 
                        <img style={{width: "max(70%, 400px)"}} src={require("./scanner.jpeg")}/>     
                    </div>
                </div>

                <h3>The Users</h3> 

                <div id="column-wrapper" style={{paddingTop:"0%", paddingBottom:"2%",  height:"max-content"}}>
                    <div style={{display:"grid", gridTemplateColumns:"50% 50%"}}>
                        <div style={{margin:"20px"}}>
                
              
                            <h5>Observations</h5>
                            <p>Watching users interact with the machine, I made 3 key observations: </p>

                            <ol>
                                <li> People are distracted approaching checkout, often on the phone, in conversation with a partner or child, with headphones in. </li>
                                <li> Everyone observed approaches the machine with confidence. </li>
                                <li> When users are confused, some struggle through the process themselves, some are quick to flag down the attendant and ask for help. </li>
                            </ol>

                        </div>

                        <div style={{margin:"20px"}}>
                        <h5>Interviews</h5>
                        <p>I asked shoppers the following questions about their experience: </p>
                        <ol>
                                
                            <li>Why did you choose self checkout?</li>
                            <li>What was frustrating about using the self checkout?</li>
                            <li>Was there anything missing that you expected?</li>
                            <li>What part of the checkout took the most time for you?</li>
                            <li>What would make you stop using the self checkout?</li>

                        </ol>
                        
                        </div>
                     </div>
                </div> 
       
                <div >
                    <h3>User Findings</h3>
                    <p>Generally, surveyed users reported that they felt satisfied with their experience and confident in their ability to navigate the interface. Several said they could see how it would be confusing if they had never seen the machine before, but could navigate the interface easily due to familiarity. The greatest frustrations were concerned with the feature that allows users to look up individual items which will not scan with a barcode, and with the way the interface is occasionally triggered to freeze until an attendant can allow the user to resume checkout.</p>

                </div>

                <div style={{display:"flex", flexDirection: "row"}} > 
          
                    <div className="column-three">
                    
                        <p>"I don't understand why sometimes it says I need an attendant after I scan something"</p>
                    </div>

                    <div className="column-three">
                    
                        <p>"I like that I don't have to talk to anyone and I can keep listening to my music while I'm checking out"</p>
                    </div>


                    <div className="column-three">
                        <p>"The part that takes the longest is having to look up the name of the produce." </p>
                    </div>

                </div>


                <h3>Personas</h3>
                <div>
                    <p>Based on the feedback from the interviews, these empathy maps imagine the experiences of two shoppers leaving the grocery store. Approaching the self-checkout, these shoppers have different priorities in mind. </p>
                    <div className="column-wrapper" style={{display:"grid", gridTemplateColumns: "50% 50%"}}>
                        <div className="project-image" style={{width:" auto", padding: "10px"}}> 
                            <img src={require("./Stressed Sarah.png")}/>
                            
                        </div>
                        <div className="project-image" style={{width:" auto",  padding: "10px"}}> 
                            <img src={require("./Methodical Marie.png")}/>
                        </div>
                    </div>
                </div>


                <div> 
                    <h3>Storyboard</h3>

                    <p>Marie's storyboard imagines the orderly approach of a person who uses the self checkout interface routinely.</p>

                </div>

                <div className="center">
                    <div className="project-image" style={{width: "auto"}}> 
                        <img src={require("./Storyboard.jpg")}/>
                    </div>
                </div>

                <h3>Conclusion</h3>

                <p>Though using the self checkout machine can be a complicated process with many steps, the shoppers who choose the self checkout over the cashiered option are generally experienced enough with using the interface to navigate it with ease. 
                
                However, the greatest barrier to the learnability of the machine is the stilted integration between the machine and the attendant, which seems to be an unavoidable interruption to the user's flow.
                
                </p>  


                <button className="button" onClick={() => navigate(-1)} type="button">
            Return to Projects</button>
            </div> 
        </div>
       
   
    )

}

export default <SelfCheckout/>;