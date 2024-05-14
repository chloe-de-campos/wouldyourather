
import Resp from "./projecticons/Responsive.png"
import It from "./projecticons/Iterative.png"
import Pers from "./projecticons/Personas.png"
import Devicon from "./projecticons/Development.png"
import Mat from "./projecticons/Cleanmaterials.png"
import Egg from './projecticons/Egg.png'
import Marsicon from './projecticons/Marscreenshot.png'
import Carton from './projecticons/Carton.jpeg'
import NuGoicon from './projecticons/nugo mockup dark.png'
import Shindigicon from './projecticons/Shindig.png'

import NuGo from '../project-pages/NuGo/NuGo.js'
import Shindig from '../project-pages/Shindig/Shindig.js'
import Dev from '../project-pages/BuildAZoo/BuildAZoo.js'
import Mars from '../project-pages/Mars/Mars.js'
import EggProblem from '../project-pages/EggProblem/EggProblem.js'
import SustainableInfrastructure from '../project-pages/SustainableInfrastructure/SustainableInfrastructure.js'

const Projects = [

    {"name": "NuGo",
    "link": "NuGo",
    "image": NuGoicon,
    "desc": "Revamping an energy bar's packaging for visual appeal and market relevance.",
    "year": "2024 • Packaging Design",
    "content": NuGo
    },

    {"name": "Shindig",
    "link": "Shindig",
    "image": Shindigicon,
    "desc": "Logo design for a new software tool" ,
    "year": "2024 • Logo Design • Branding",
    'content': Shindig
    },

   
    {"name": "Buildazoo",
    "link": "BuildAZoo",
    "image": Devicon,
    "desc": "An interactive webpage using React.js" ,
    "year": "2021 • Web Development",
    'content': Dev
    },

    {"name": "Mars",
    "link": "Mars",
    "image": Marsicon,
    "desc": "An impractical communication system for students" ,
    "year": "2022 • Web Development",
    "content": Mars
    },

    {"name": "The Egg Problem",
    "link": "EggProblem",
    "image": Carton,
    "desc": "Interactive web design to visualize a math problem" ,
    "year": "2022 • Web Development",
    "content": EggProblem
    },
    
    {"name": "Sustainable Infrastructure",
    "link": "SustainableInfrastructure",
    "image": Mat,
    "desc": "Isometric graphic design for a non-profit" ,
    "year": "2021 • Illustration",
    "content":  SustainableInfrastructure
    },


    // {"name": "The Belgian Embassy",
    // "link": "BelgianEmbassy",
    // "image": Resp,
    // "desc": "Reimagining a clunky unscalable webpage to be responsive to changes in screen sizes" ,
    // },

    // {"name": "NFTScoring",
    // "link": "NFTScoring",
    // "image": It,
    // "desc": "Using an iterative design process to incorporate user feedback into the design for a mobile app" ,
    // },



    
]

export default Projects