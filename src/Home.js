
import "./App.css";
import About from "./About.js"
import { useState, useEffect} from "react";

import WorkGallery from "./components/WorkGallery";

// Home page! displays gallery of my work.

// const Home = () =>{
//     return (
//         <div className="mainApp"> 
            
//             <div className="AppCenter">
//                 <div className="topBuffer">
//                 </div>

//                 <div id="header">
//                 </div>
                
//                 {WorkGallery()}
//             </div>
    
//     </div>)

//   }
  
//   export default <Home/>;

function Chloe() { 

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // `calc(-0.1 * ${Math.pow(scrollPosition,1.5)}px`
        <div style={{ position: 'relative', top:`calc(-0.2 ${scrollPosition}px)`, left: `calc(-1 * ${0.005* Math.pow(scrollPosition,2)}px)`  }} class="bouncing-text" id="chloe">
        {Array.from('CHLOE').map((letter, index) => {
        const content = letter === ' ' ? '\u00A0' : letter;
        return (
            // style={{ animationDelay: `${index * 0.03}s` }}
            <span class="smokey-letter" key={index} >
              {content}
            </span>
          );
        })}
      </div>
  );
}


function Campos() { 

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
        <div style={{ position: 'relative', top:`calc(-0.2 * ${scrollPosition}px)`,  left: `calc(${0.005* Math.pow(scrollPosition,2)}px)`, clip: 'rect(auto, auto, auto, 0)' }} class="bouncing-text" id="chloe">
        {Array.from('CAMPOS').map((letter, index) => {
        const content = letter === ' ' ? '\u00A0' : letter;
        return (
            // style={{ animationDelay: `${index * 0.03}s` }}
            <span class="smokey-letter" key={index} >
              {content}
            </span>
          );
        })}
      </div>
  );
}

function ScrollMan1() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Trigger the animation only if there is a change in the scroll position
      if (currentScrollY !== lastScrollY) {
        setIsAnimating(true);
        setLastScrollY(currentScrollY);
        // Reset animation state after it runs
        setTimeout(() => setIsAnimating(false), 700); // Duration should match your CSS animation
      }
    };

    // Add and clean up the scroll event listener
    window.addEventListener('scroll', handleScroll);
    // return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]); // Depend on lastScrollY to update it

  return (
    <svg id="man1" className={isAnimating ? 'animate' : ''} width="206" height="183" viewBox="0 0 206 183" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M146.9 88.4135C150.91 90.5235 154.42 91.4035 158.21 90.0435C162 88.6835 164.92 84.4835 166.14 80.7635C167.82 75.6435 166.27 69.6835 162.16 66.1835C158.05 62.6835 151.56 61.9435 146.7 64.5935C141.84 67.2435 138.61 70.6935 138.03 76.0135C137.64 79.6335 141.02 86.0635 146.9 88.4135Z" />
    <path d="M141 69.0112C144.02 63.5512 156.25 46.53 172.77 4.09002C173.82 1.38002 170.26 -0.769985 168.23 1.36002C168.09 1.50002 168.51 1.10002 168.5 1.12002C119.5 102.26 106.39 83.11 14.23 130.19C12.87 130.88 2.87002 135.31 1.63002 136.21C-0.869977 138.02 1.17002 141.9 4.10002 140.9C6.74002 140.01 18.21 135.85 20.44 134.99C32.88 130.17 40.29 127.27 51.18 123.04C64.56 117.85 76.37 113.3 90.48 116.26C95.58 117.33 100.39 119.47 104.8 122.17C111.4 126.21 115.37 131.23 117.44 138.52C120.17 148.12 119.15 160.84 110.17 165.67C101.18 170.5 87.55 171.38 78.74 166.26C69.49 160.88 65.56 157.34 58.84 151.53C52.14 145.74 49.37 144.88 47.47 146.72C43.31 150.76 53.37 158.07 56.17 161.06C64.9 170.37 74.18 177.33 86.69 180.66C132.91 192.95 142.31 141.29 163.13 111.71C171.14 100.34 179.31 89.2 188.75 66.16C189.99 63.13 203.07 24.32 204.51 19.3C205.27 16.66 201.52 15.12 200.1 17.49C189.82 34.59 178 84 158.21 90.0435C154.42 91.4035 150.91 90.5235 146.9 88.4135C141.02 86.0635 137.64 79.6335 138.03 76.0135C138.336 73.2134 139.375 70.9313 141 69.0112Z" />
    <path d="M158.21 90.0435C178 84 189.82 34.59 200.1 17.49C201.52 15.12 205.27 16.66 204.51 19.3C203.07 24.32 189.99 63.13 188.75 66.16C179.31 89.2 171.14 100.34 163.13 111.71C142.31 141.29 132.91 192.95 86.69 180.66C74.18 177.33 64.9 170.37 56.17 161.06C53.37 158.07 43.31 150.76 47.47 146.72C49.37 144.88 52.14 145.74 58.84 151.53C65.56 157.34 69.49 160.88 78.74 166.26C87.55 171.38 101.18 170.5 110.17 165.67C119.15 160.84 120.17 148.12 117.44 138.52C115.37 131.23 111.4 126.21 104.8 122.17C100.39 119.47 95.58 117.33 90.48 116.26C76.37 113.3 64.56 117.85 51.18 123.04C40.29 127.27 32.88 130.17 20.44 134.99C18.21 135.85 6.74002 140.01 4.10002 140.9C1.17002 141.9 -0.869977 138.02 1.63002 136.21C2.87002 135.31 12.87 130.88 14.23 130.19C106.39 83.11 119.5 102.26 168.5 1.12002C168.51 1.10002 168.09 1.50002 168.23 1.36002C170.26 -0.769985 173.82 1.38002 172.77 4.09002C156.25 46.53 144.02 63.5512 141 69.0112C139.375 70.9313 138.336 73.2134 138.03 76.0135M158.21 90.0435C154.42 91.4035 150.91 90.5235 146.9 88.4135C141.02 86.0635 137.64 79.6335 138.03 76.0135M158.21 90.0435C162 88.6835 164.92 84.4835 166.14 80.7635C167.82 75.6435 166.27 69.6835 162.16 66.1835C158.05 62.6835 151.56 61.9435 146.7 64.5935C141.84 67.2435 138.61 70.6935 138.03 76.0135" stroke="black" stroke-miterlimit="10"/>
    </svg>
  );
}


function ScrollMan2() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ position: 'relative', top: `${Math.pow(scrollPosition, 2) / scrollPosition / 2}px`, left: `${-0.02 * Math.pow(scrollPosition, 2)}px`, transform: `rotate(calc(0.5 * ${0.009 * Math.pow(scrollPosition,2) + scrollPosition}deg)`, clip: 'rect(auto, auto, auto, 0)'}}>
      <svg id="man2" width="200" height="230" viewBox="0 0 200 230" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.4901 53.81C33.0401 54.21 29.8401 56.3 28.0501 59.72C27.9601 59.89 27.8801 60.06 27.8001 60.22C25.1201 66.15 25.5101 74.19 29.7401 78.76C33.2301 82.52 38.8201 83.2 43.0801 80.71C47.3401 78.22 50.1301 72.89 50.4301 67.38C50.5101 65.85 50.4101 64.29 50.0301 62.81C48.6001 57.3 43.4101 54.03 38.4401 53.71C37.8801 53.67 37.1901 53.71 36.4901 53.8V53.81Z" fill="white"/>
                <path d="M31.6499 80.39C26.3699 76.91 25.2899 69.59 26.8599 62.8C28.4299 56.01 30.9799 50.04 33.8499 43.85C39.5699 31.5 41.8699 17.07 40.2799 3.19C40.0599 1.27 38.5399 0.0300017 36.9599 0.670002C35.3399 1.32 35.4499 3.41 35.6099 5.1C36.7299 17.03 33.1899 28.94 28.3499 39.55C23.4999 50.16 17.3199 59.9 12.5199 70.54C-0.890105 100.25 -2.77011 136.11 5.33989 168.29C7.18989 175.64 9.57989 182.91 13.4199 189.14C20.7899 201.09 32.9399 208.16 45.3399 211.34C53.3799 213.41 62.9399 213.56 68.2899 205.86C69.1799 204.58 68.9699 202.75 67.7299 201.96C66.8099 201.38 66.0499 201.96 65.3299 202.46C60.8599 205.54 55.2599 205.9 50.1999 204.48C45.1399 203.06 40.5299 200.01 36.2399 196.6C31.2099 192.6 26.2899 187.72 24.2799 181.06C22.2399 174.3 23.5499 166.77 25.8899 160.14C28.6999 152.2 32.9699 144.96 38.3399 139.04C46.4699 130.08 56.7899 124.36 66.8399 118.55C86.1799 107.35 118.68 81.67 132.08 62.06C133.19 60.44 134.26 58.63 135.14 56.73C136.76 53.22 132.56 50 130.35 53.05C118.1 69.97 85.8899 93.83 66.7199 94.59C61.8199 94.78 60.0699 89.17 58.7499 85.24C58.0399 83.12 57.9999 79.73 58.4099 77.81C63.5599 53.75 71.0499 29.79 69.4099 5.08C69.4099 5.05 69.4099 5.02 69.4099 4.99C68.9399 1.37 65.7599 1.06 65.5199 5.98C64.9899 16.77 63.3399 25.82 61.6899 33.74C58.6299 48.36 56.9299 56.11 51.2199 70.2C48.7499 76.3 47.6399 77.91 43.6299 80.36C40.1499 82.48 35.9499 83.41 31.6699 80.36L31.6499 80.39Z" />
                <path d="M36.4901 53.81C33.0401 54.21 29.8401 56.3 28.0501 59.72C27.9601 59.89 27.8801 60.06 27.8001 60.22C25.1201 66.15 25.5101 74.19 29.7401 78.76C33.2301 82.52 38.8201 83.2 43.0801 80.71C47.3401 78.22 50.1301 72.89 50.4301 67.38C50.5101 65.85 50.4101 64.29 50.0301 62.81C48.6001 57.3 43.4101 54.03 38.4401 53.71C37.8801 53.67 37.1901 53.71 36.4901 53.8V53.81Z" stroke="#231F20" stroke-miterlimit="10"/>
                <path d="M31.6499 80.39C26.3699 76.91 25.2899 69.59 26.8599 62.8C28.4299 56.01 30.9799 50.04 33.8499 43.85C39.5699 31.5 41.8699 17.07 40.2799 3.19C40.0599 1.27 38.5399 0.0300017 36.9599 0.670002C35.3399 1.32 35.4499 3.41 35.6099 5.1C36.7299 17.03 33.1899 28.94 28.3499 39.55C23.4999 50.16 17.3199 59.9 12.5199 70.54C-0.890105 100.25 -2.77011 136.11 5.33989 168.29C7.18989 175.64 9.57989 182.91 13.4199 189.14C20.7899 201.09 32.9399 208.16 45.3399 211.34C53.3799 213.41 62.9399 213.56 68.2899 205.86C69.1799 204.58 68.9699 202.75 67.7299 201.96C66.8099 201.38 66.0499 201.96 65.3299 202.46C60.8599 205.54 55.2599 205.9 50.1999 204.48C45.1399 203.06 40.5299 200.01 36.2399 196.6C31.2099 192.6 26.2899 187.72 24.2799 181.06C22.2399 174.3 23.5499 166.77 25.8899 160.14C28.6999 152.2 32.9699 144.96 38.3399 139.04C46.4699 130.08 56.7899 124.36 66.8399 118.55C86.1799 107.35 118.68 81.67 132.08 62.06C133.19 60.44 134.26 58.63 135.14 56.73C136.76 53.22 132.56 50 130.35 53.05C118.1 69.97 85.8899 93.83 66.7199 94.59C61.8199 94.78 60.0699 89.17 58.7499 85.24C58.0399 83.12 57.9999 79.73 58.4099 77.81C63.5599 53.75 71.0499 29.79 69.4099 5.08C69.4099 5.05 69.4099 5.02 69.4099 4.99C68.9399 1.37 65.7599 1.06 65.5199 5.98C64.9899 16.77 63.3399 25.82 61.6899 33.74C58.6299 48.36 56.9299 56.11 51.2199 70.2C48.7499 76.3 47.6399 77.91 43.6299 80.36C40.1499 82.48 35.9499 83.41 31.6699 80.36L31.6499 80.39Z" stroke="#231F20" stroke-miterlimit="10"/>
            </svg>
      </div>
  );
}


function ScrollMan3() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ position: 'relative', top: `calc( ${scrollPosition}px)`, left: `calc(2 * ${scrollPosition}px)`, transform: `rotate(calc(-.8 * ${scrollPosition}deg)` }}>
     <svg id="man3" width="206" height="134" viewBox="0 0 206 134" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M46.3123 71.5812C49.2123 69.5312 51.8523 68.5612 55.2923 68.5112C52.3823 61.1712 45.9823 ≈39.3812 48.4823 28.6212C50.7923 18.6712 53.7723 12.2412 56.2523 7.65122C59.1323 2.30122 63.8023 3.23122 61.5223 8.56122C61.5223 8.56122 54.7223 24.6512 58.1323 41.8312C60.4423 53.4412 69.0223 64.6312 69.7123 65.5012C92.8589 94.5466 106.454 78.4776 113.081 70.6455L113.152 70.5612C128.952 48.3012 131.402 32.0612 147.562 4.39122C150.582 -0.778782 157.862 -0.118783 153.742 6.93122C151.262 11.1712 147.892 20.2312 145.382 26.3412C133.212 56.0112 134.002 56.1212 127.802 76.5012C124.802 86.3612 122.292 113.401 138.892 115.501C173.642 119.891 194.132 88.2312 196.232 78.5612C198.202 69.5012 206.662 69.6412 204.702 78.6612C200.832 96.4812 172.812 132.661 126.782 132.661C118.432 132.661 97.8023 135.731 72.4123 122.581C54.9423 113.531 20.1123 101.671 5.78225 67.4612C-1.69775 49.6112 1.83225 31.4812 1.83225 31.4512C2.82225 27.9612 8.72225 28.3612 9.18225 33.5212C9.18225 33.5212 8.77225 55.3112 16.1523 67.2612C22.7023 77.8612 33.1823 87.9512 45.6323 90.8312C44.1623 89.4312 42.7166 86.96 42.0766 85C40.4566 80.04 42.0523 74.5912 46.3123 71.5812Z" />
          <path d="M55.2923 68.5112C51.8523 68.5612 49.2123 69.5312 46.3123 71.5812C42.0523 74.5912 40.4566 80.04 42.0766 85C42.7166 86.96 44.1623 89.4312 45.6323 90.8312M55.2923 68.5112C52.3823 61.1712 45.9823 39.3812 48.4823 28.6212C50.7923 18.6712 53.7723 12.2412 56.2523 7.65122C59.1323 2.30122 63.8023 3.23122 61.5223 8.56122C61.5223 8.56122 54.7223 24.6512 58.1323 41.8312C60.4423 53.4412 69.0223 64.6312 69.7123 65.5012C92.8589 94.5466 106.454 78.4776 113.081 70.6455L113.152 70.5612C128.952 48.3012 131.402 32.0612 147.562 4.39122C150.582 -0.778782 157.862 -0.118783 153.742 6.93122C151.262 11.1712 147.892 20.2312 145.382 26.3412C133.212 56.0112 134.002 56.1212 127.802 76.5012C124.802 86.3612 122.292 113.401 138.892 115.501C173.642 119.891 194.132 88.2312 196.232 78.5612C198.202 69.5012 206.662 69.6412 204.702 78.6612C200.832 96.4812 172.812 132.661 126.782 132.661C118.432 132.661 97.8023 135.731 72.4123 122.581C54.9423 113.531 20.1123 101.671 5.78225 67.4612C-1.69775 49.6112 1.83225 31.4812 1.83225 31.4512C2.82225 27.9612 8.72225 28.3612 9.18225 33.5212C9.18225 33.5212 8.77225 55.3112 16.1523 67.2612C22.7023 77.8612 33.1823 87.9512 45.6323 90.8312M55.2923 68.5112C58.1723 68.6412 60.15 68.76 64 71C66.38 72.38 67.78 74.97 68.5 77C70.18 81.75 69.41 87.1912 66 90.8312C62.59 94.4712 58.4623 96.1712 53.4023 95.0412C50.7823 94.4512 47.8723 92.9912 45.6323 90.8312" stroke="black" stroke-miterlimit="10"/>
      </svg>
      </div>
  );
}




const Home = () =>{
    return (
        <div className="mainApp" style={{"height":"100%"}}> 
            
            <div className="AppCenter" style = {{position: 'relative', overflow: 'hidden', width: '80vw'}}>
                
                {/* <img id="myPath" src={"men/man1.svg"}/> */}
                <div style={{"display":"inline-grid","width":"100%", "align-content":"center",
                    "justify-items":"center",
                    "grid-template-columns":"26vw 26vw 26vw",
                    "grid-template-rows":"26vh 26vh 26vh" /* This prevents scrolling */,
                    }}> 

                    {/* ROW 1 */}
                    
                    <Chloe/>
                     
                     
                      <ScrollMan1/>

                      <ScrollMan3/>

                     {/* ROW 2 */}
                    <div></div>
                    
                    <div class="bouncing-text" id="d">
                        {Array.from('DE').map((letter, index) => {
                        const content = letter === ' ' ? '\u00A0' : letter;
                        return (
                          // style={{ animationDelay: `${index * 0.03}s` }}
                          <span class="smokey-letter" key={index} >
                            {content}
                          </span>
                        );
                      })}</div>
                    <div></div>
                    
                    
                     {/* ROW 3 */}
                    
                    <div></div>
                    <ScrollMan2/>
                    <Campos/>
                     {/* ROW 4 */}
                    {/* <div></div>
    
                    <div></div>
                    <div></div> */}
                    
                </div> 
                <div style={{'margin-top': '20vh'}} id="header">

                </div>
                  
                <div id="workgallery123"> 
                  
                  {WorkGallery()}
                </div>

       
      <div>
        {/* <div className="topBuffer"> </div> */}
          <div style={{"padding-top":"5%", alignItems:'left'}} id="aboutme" className="projectDescription">

        
             <span className="normalabout"></span>
              <div className="box">
                 <span className="normalabout" style={{"display":"flex", justifyContent:'space-between', alignContent:'space-between'}}>
                
                   <div id="cols" >
                   <h5 style={{fontWeight: '500',fontFamily: 'baskerville', fontSize: 'calc(5vw)', padding:'0pt', margin:'0pt'}}>ABOUT</h5>
                           
                             <p>
                             Drawing from my background in visual arts and computer science, I bring a playful functionality to my work as a designer. 
                             <br></br>
                             <br></br>
                             I want to build self-aware products that can make accessibility beautiful and simple. In my work, I hope to balance the idealism of universal design with the reality of practical design.


                             
                             <br></br>
                             <br></br>
                              I grew up in Seattle and took a pandemic-y journey through studying at Brown University and the Berlin Art Institute. Design is frustrating and satisfying and exhausting. I look forward to working with teams of inspired and inspiring folks. 
                             <br></br>
                             <br></br>
                             Outside of design, I <a target = "_blank" href="https://m.youtube.com/watch?v=amLP0th0TN0&feature=youtu.be/">play ultimate frisbee</a>, solve crosswords, and draw <a target = "_blank" href="https://www.instagram.com/stink.lines/">drawings for little stinkers</a>.

                             <br></br>
                             <br></br>
                             Send me a sweet little <a target = "_blank" href="mailto:chloe.de.campos@hotmail.com">email</a>?  
                             </p>
               
                     </div>
                     <div id="cols" style={{width:'50%', display:'flex', alignItems:'flex-start'}}>
                          <img id="myPath" src={"men/meman.png"}/>
                    </div>
               </span>
               
                
              </div>

              </div>
              </div>

                
            </div>

            <div id="footer" style={{width:'80vw', display:'flex', justifyContent:'center', padding:'30vh 10vw 3vh 10vw', opacity:'50%'}}> 
                  Handcoded with &lt;3 in Providence, RI
            
            </div>

    
    </div>)

  }
  
  export default <Home/>;
  