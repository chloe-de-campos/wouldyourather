import "./App.css";
import { useState } from "react";
import getup_man from "./assets/getup_man_long.gif"
import wave_man from "./assets/wave_man.gif"

import NavBar from './components/NavBar';




const About = () => {



    const [surpriseToggle, setSurpriseToggle] = useState(false);
  
    function toggle() {
      setSurpriseToggle(surpriseToggle => !surpriseToggle);
    }
  
    return (
      <div>
        {/* <div className="topBuffer"> </div> */}
          <div style={{"padding-top":"5%"}} id="aboutsurprise" className="projectDescription">
            
             <span className="normalabout"></span>
              <div className="box">
                {!surpriseToggle && (
                 <span className="normalabout">
                 <h2 onClick={toggle} >Hello! It's me!</h2>
                 
                   <div id="cols">
                    <img style={{width: "25%"}} src={wave_man} ></img>
                           
                             <p>
                             Drawing from my background in visual arts, I bring a playful and absurdist tone to my programming work. I want to create self-aware products that can make accessibility beautiful and simple. In my work, I hope to balance the idealism of universal design with tangible practicality.

                             <br></br>
                             <br></br>
                             Design is frustrating and satisfying and exhausting. I look forward to working with teams of inspired and inspiring folks. 
                             <br></br>
                         
                             <br></br>
                             Outside of school, I play ultimate frisbee, solve crosswords, people-watch, and draw <a target = "_blank" href="https://www.instagram.com/stink.lines/">drawings for little stinkers</a></p>.
               
                     </div>
               </span>
                )}
                {surpriseToggle && (
                  <span className="surpriseabout" onClick={toggle}>
                  <h2>In all seriousness...</h2>
                    <div id="cols">
                            
                              <p>
                               Often called “The Jewel of Ireland,” Chloe de Campos originally began creating computers out of goat parts and bird horns. Though she’s only about 5’5”, Chloe has a commanding presence, emphasized by her penchant for wearing a massive sleeping bag with holes for legs so she resembles a 7 foot tall worm. Coworkers often refer to her “de campos” side in contrast to her “worm side” as a sort of Jekyll and Hyde situation. Most declined to comment out of fear. “It’s unclear what happens if the worm gets you,” one coworker said, “honestly I think it would probably just be a really boundaried conversation, but everyone else seemed afraid of the Worm Chloe so I just went along with it.” Hailing from Slime-On-Ground, a beautiful hamlet of the greater Seattle area, Chloe has a close relationship with all of the siblings her parents declared were “too ugly to be seen outside of the house” and so still live in her family’s hut made of code. Her aesthetic sensibility has been called “sliced-turkey-like” and “weedy,” which demonstrates her vital importance to any team. </p>.
                
                       </div>
                     </span>
                )}
              </div>
              </div>
              </div>
    );
}





  // const [surpriseToggle, setSurpriseToggle] = useState(false);

  // const reToggle = () => {
  //   if (surpriseToggle){
  //     setSurpriseToggle(false)
  //     return(
  //       <div>
  //          <div className="topBuffer"> </div>
  //           <div id="aboutsurprise" className="projectDescription">
              // <span className="normalabout">
              //       <h2>Hello, it's me.</h2>
              //         <div id="cols">
              //           <img style={{width:"20%"}} src={hello_man}></img>
                              
              //                   <p>
              //                   I'm in my senior year of computer science at Brown Univeristy. 
              //                   <br></br>
              //                   <br></br>
                          
              //                   Drawing from my background in visual arts, I bring a playful and absurdist tone to my programming work. I want to create self-aware products that can make accessibility beautiful and simple. In my work, I hope to balance the idealism of universal design with tangible practicality.
  
              //                   <br></br>
              //                   <br></br>
              //                   Coding is frustrating and satisfying because I learn so much from each project. I look forward to working with teams of inspired and inspiring folks. 
              //                   <br></br>
                            
              //                   <br></br>
              //                   Outside of school, I play ultimate frisbee, solve crosswords, people-watch, and draw <a target = "_blank" href="https://www.instagram.com/stink.lines/">drawings for little stinkers</a></p>.
                  
              //           </div>
              //     </span>
  //               </div>
  //             </div>
  //       )
  //   }
  //   else {
  //     setSurpriseToggle(true)
  //     return(
  //       <div>
  //          <div className="topBuffer"> </div>
  //           <div id="aboutsurprise" className="projectDescription">
             
            // <span className="surpriseabout">
            //       <h2>Hey dude,</h2>
            //         <div id="cols">
            //           <img style={{width:"20%"}} src={hello_man}></img>
                            
            //                   <p>
            //                   Often called “The Jewel of Ireland,” Chloe de Campos originally began creating computers out of goat parts and bird horns. Though she’s only about 5’5”, Chloe has a commanding presence, emphasized by her penchant for wearing a massive sleeping bag with holes for legs so she resembles a 7 foot tall worm. Coworkers often refer to her “de campos” side in contrast to her “worm side” as a sort of Jekyll and Hyde situation. Most declined to comment out of fear. “It’s unclear what happens if the worm gets you,” one coworker said, “honestly I think it would probably just be a really boundaried conversation, but everyone else seemed afraid of the Worm Chloe so I just went along with it.” Hailing from Slime-On-Ground, a beautiful hamlet of the greater Seattle area, Chloe has a close relationship with all of the siblings her parents declared were “too ugly to be seen outside of the house” and so still live in her family’s hut made of code. Her aesthetic sensibility has been called “sliced-turkey-like” and “weedy,” which demonstrates her vital importance to any team. </p>.
                
            //           </div>
            //       </span>
  //               </div>
  //             </div>
  //       )
  //   }
  // }






  // return(
  //     <div>
  //        <div className="topBuffer"> </div>
  //        <div id="aboutsurprise" className="projectDescription">
  //         <span className="normalabout">
  //               <h2>Hello, it's me.</h2>
  //                 <div id="cols">
  //                   <img style={{width:"20%"}} src={hello_man}></img>
                          
  //                           <p>
  //                           I'm in my senior year of computer science at Brown Univeristy. 
  //                           <br></br>
  //                           <br></br>
                      
  //                           Drawing from my background in visual arts, I bring a playful and absurdist tone to my programming work. I want to create self-aware products that can make accessibility beautiful and simple. In my work, I hope to balance the idealism of universal design with tangible practicality.

  //                           <br></br>
  //                           <br></br>
  //                           Coding is frustrating and satisfying because I learn so much from each project. I look forward to working with teams of inspired and inspiring folks. 
  //                           <br></br>
                        
  //                           <br></br>
  //                           Outside of school, I play ultimate frisbee, solve crosswords, people-watch, and draw <a target = "_blank" href="https://www.instagram.com/stink.lines/">drawings for little stinkers</a></p>.
              
  //                   </div>
  //             </span>




              
  //           <span style={{display:"hidden"}} className="surpriseabout">
  //               <h2>Hey dude,</h2>
  //                 <div id="cols">
  //                   <img style={{width:"20%"}} src={hello_man}></img>
                          
  //                           <p>
  //                           Often called “The Jewel of Ireland,” Chloe de Campos originally began creating computers out of goat parts and bird horns. Though she’s only about 5’5”, Chloe has a commanding presence, emphasized by her penchant for wearing a massive sleeping bag with holes for legs so she resembles a 7 foot tall worm. Coworkers often refer to her “de campos” side in contrast to her “worm side” as a sort of Jekyll and Hyde situation. Most declined to comment out of fear. “It’s unclear what happens if the worm gets you,” one coworker said, “honestly I think it would probably just be a really boundaried conversation, but everyone else seemed afraid of the Worm Chloe so I just went along with it.” Hailing from Slime-On-Ground, a beautiful hamlet of the greater Seattle area, Chloe has a close relationship with all of the siblings her parents declared were “too ugly to be seen outside of the house” and so still live in her family’s hut made of code. Her aesthetic sensibility has been called “sliced-turkey-like” and “weedy,” which demonstrates her vital importance to any team. </p>.
              
  //                   </div>
  //               </span>
  //              {/* <p>
  //              "Embracing the boundless realm of learning while still young enough to blame errors on caffeine deficiency. They say youth is wasted on the young, but I'm too busy Googling error codes to care. and perfecting my junior web designer finesse to care. Life's a crash course, and I'm the debugger turned design aficionado – creating digital art with a touch of code and a dash of youthful enthusiasm."


  //              My name is Chloe and I am a junior user interface designer based in Providence, RI. I have a passion for creating intuitive and appealing designs that enhance the user experience. My design style is influenced by accessibility, functionality, and a strong focus on user-centered design principles.
  //              </p>

  //              <p>
  //              I'm currently in my third year of Computer Science at Brown University. I've gained valuable experience through internships at <a href="https://www.sasaki.com/">Sasaki</a> and the <a href="https://www.sustaininfrastructure.org/">Center for Sustainable Infrastructure</a>, and a term at the <a href="https://berlinartinstitute.com/">Berlin Art Institute</a>. I have a strong foundation in design principles and am proficient in design software such as Adobe Creative Suite and Figma.
  //              </p>

  //              <p>
  //              In my spare time, you can find me playing ultimate frisbee, drawing, and tinkering with code. I am always looking for new opportunities to grow and improve as a designer, and I am excited to see where my career takes me next.
  //              </p>
  //              <p>
  //              Thank you for taking the time to visit my portfolio. I am always looking for opportunities to grow and learn as a designer, and I am excited to bring my skills and creativity to new challenges.
  //              </p> */}
            
  //        </div>
  //        </div>
  // )
     
// }

export default <About/>;



