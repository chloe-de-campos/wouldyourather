
import {useState} from "react"
import {useEffect} from "react"
import Projects from "./Projects"
import Project from "./Project"


export default function WorkGallery(props)  {
  

    return(
        // <p>workgallery</p>
        <div id="workGallery" className= "workGallery">
             {Projects.map((project) => (Project(project) ))}
        </div>
        
    )   

}