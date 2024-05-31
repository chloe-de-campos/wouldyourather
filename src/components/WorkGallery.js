
import {useState} from "react"
import {useEffect} from "react"
import Projects from "./Projects"
import Project from "./Project"


export default function WorkGallery(props)  {
  

    return(
        // <p>workgallery</p>
        <div style={{'padding-top': '8vh'}} id="workGallery" className= "workGallery">
            <h5 >WORK</h5>
             {Projects.map((project) => (Project(project)))}
        </div>
        
    )   

}