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
            {/* <img src={require('./nugo mockup dark short.png')}></img> */}
            <p className="date">January 2024</p>
                <h2>Shindig</h2>

                <p>Shindig is a command line tool and REST API for hosting and managing parties. It's a convenient way to organize events without the hassle of traditional invitations but with the hands-on personality of an invitation made from scratch.</p> 

                
                <h3>The Idea</h3>

                
                <p>
                I wanted the logo to have the feel of a hand printed card. I drew from the style of a block print to draft two options for the first version of the logo. I proposed a party hat or a banner to show a festive theme. 
                </p> 

                <img style={{width:"100%"}} src={require('./shindig12.png')}></img>
                {/* <img style={{width : "45%"}} src={require('./shindig2.png')}></img> */}

                <p>
                The client liked the "do-it-yourself" theme and requested that the logos be simpler so they could be scaled down. 
                </p> 

                <img style={{width:"100%"}} src={require('./shindig3.png')}></img>

                <p>
                I wanted to make one more version that was a little less busy so the party hat could stand out more clearly. We agreed on a bright green color and I added some eroded texture to the .svg file, to bring back the hand-made aesthetic. 
                </p> 

                <img style={{width:"100%"}} src={require('./shindig4.png')}></img>

                <p>
                Finally, I exported the star from the top of the hat as its own asset, to be used in smaller-scale areas.
                </p>

                <img style={{width:"100%"}} src={require('./shindig5.png')}></img>
                        
                <p> 
                Shindig is now live! Check out <a target = "_blank" href="https://shindig.lol/"> their website here</a>.
                </p>
            </div> 
        </div>
       
   
    )

}

export default <Shindig/>;