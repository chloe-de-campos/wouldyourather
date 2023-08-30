
import "../../App.css"
import { useNavigate } from "react-router-dom";

const NFTScoring = ()  => {
    
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
                <h2>NFTScoring</h2>
                <p>NFTScoring is an emerging startup with the goal of giving NFT investors all the information needed in order to make smart decisions when buying or selling NFTs. Their NFT trading platform also offers opportunities for users to learn, providing educational resources about making informed decisions on the market.
                </p>

                <p>
                In this group project, we designed an interactive interface for the platform. We practiced using an iterative user-testing process to design a mobile app, incorporating user feedback into our final product. 
                
                We expect our app to serve users within a range between beginners and moderately knowledgable about NFTs. The aim was to create a product that is easy to navigate for users who are new to NFT trading. 
                </p>

                <h3>1. Sketching</h3> 

                <p>First, we brainstormed possible general layouts for the flow of the app. We came up with four different possible designs for the app. Each design imagines a different user flow through the components of the app.  </p>
          
                <div style={{justifyContent: "center", display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center"}}>
                    <div className="project-image" style={{paddingTop: "6%", width: "40%"}}> 
                        <img  src={require("./sketch2.png")}/> 
                    </div>

                    <div className="project-image" style={{paddingTop: "6%", width: "40%"}}> 
                        <img  src={require("./sketch3.png")}/> 
                    </div>
                    
                    <div className="project-image" style={{paddingTop: "6%", width: "40%"}}>
                         <img  src={require("./sketch1.png")}/> 

                    </div>
                
                    <div className="project-image" style={{paddingTop: "6%", width: "40%"}}>
                        <img  src={require("./sketch4.jpg")}/> 
                    </div>
                </div>


                <h3>2. Wireframing</h3>

                <p>Combining the best features of each sketch, we developed one coherent layout for the app's pages. The main flow of the app includes a "Home" page with a newsfeed, a "Wallet" page showing the user's current assets, a "Discover" page to serach for specific NFT's, and a "Learn" page with information about NFT trading and the app itself.</p>

                <div style={{paddingTop: "10%", display: "grid", gridTemplateColumns: "30% 30% 30%"}}>
                    
                    <div className="project-image"> <img style={{width: "40%", margin: "5%"}} src={require("./low-fi/Discover.png")}/> </div>

                    <div className="project-image"> <img style={{width: "30%", margin: "5%"}} src={require("./low-fi/Home.png")}/> </div>

                    <div className="project-image"> <img style={{width: "30%", margin: "5%"}} src={require("./low-fi/Learning.png")}/> </div>
                    
                    <div className="project-image"> <img style={{width: "30%", margin: "5%"}} src={require("./low-fi/NFT.png")}/> </div>

                    <div className="project-image"> <img style={{width: "30%", margin: "5%"}} src={require("./low-fi/Profile.png")}/> </div>
        
                    <div className="project-image"> <img style={{width: "30%", margin: "5%"}} src={require("./low-fi/Wallet lofi.png")}/> </div>
                    
                </div> 
                
                <h3>3. Hi-Fi Prototyping</h3>
                <p>We then fleshed out the wireframes into a hi-fi interactive prototype.</p>
                <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)", width:"800", height:"850"}} src={"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fxqozh43vH31DjqnaspPwkY%2FNFTScoring-Draft-1%3Fpage-id%3D0%253A1%26node-id%3D30%253A1373%26viewport%3D1007%252C-240%252C0.31%26scaling%3Dscale-down%26starting-point-node-id%3D30%253A1373%26show-proto-sidebar%3D1"} allowfullscreen></iframe>

                    
                <h3>4. Critique</h3>

                <p>We asked a group of peers to review our mockup and provide feedback on the interface. The feedback we received can be summarized by the following categories: </p>
                <p>
                    <li>Popups: the look of our popups didn't quite align with users' mental model for popups: ours were unexpecedly scrollable and hard to exit out of.</li>
                    <li>Font Size: the fonts across some of our pages were inconsistent and occasionally to small to read, even on mobile. </li>
                    <li>Top Bar: users found it strange that the top bar disappeared when scrolling, while the home bar on the bottom was sticky. The original top bar also had mild inconsistencies accross pages and occasionally got cut off by the notch in the top of the iPhone screen.</li>
                To address these issues, we drafted a second version of the hi-fi prototype. 
                </p>

                <div style={{display: "flex", flexDirection: "center", marginBottom: "40px"}}>
                    <img style={{width: "35%"}} src={require("./iterativeflow.gif")} />
                </div>

                <p><a target="_blank" href="https://www.figma.com/proto/Q6Pmr6BzSpfLwdcOo2LStB/NFTScoring-Final-Draft?page-id=1077%3A2176&node-id=1077%3A2730&viewport=1113%2C818%2C0.42&scaling=scale-down&starting-point-node-id=1077%3A2730&show-proto-sidebar=1">Interact with the mockup yourself</a>.</p>
                

                <button className="button" onClick={() => navigate(-1)} type="button">
            Return to Projects</button>
            </div> 
        </div>
       
   
    )

}

export default <NFTScoring/>;