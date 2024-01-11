import { DiCss3 ,DiHtml5 ,DiJsBadge,DiMongodb ,DiVisualstudio,DiNodejs,DiNpm   } from "react-icons/di";
import { SiTailwindcss,SiGithub  } from "react-icons/si";
import { SiExpress,SiPostman  ,SiReact } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";

import Projects from "./projects";

export default function Banner(){
    return <>
    <div className="flex justify-center items-center text-center relative ">
        <div className="absolute top-80 left-64">

           <hr />
        <h1>I am a web developer</h1>
        </div>
        <div className="border rounded-full p-4 m-2 absolute top-40 right-10">
            image
        </div> 
        <div className="border p-2">
            <p>my skills </p>
            <div className="grid grid-cols-3 grid-rows-3" >
                <div >
                <p className="font-bold">font end</p>
                <ul className="flex ">
                    
                    <li> <SiReact/></li>
                    <li> <DiHtml5/></li>
                    <li> <SiTailwindcss/></li>
                    <li> <DiJsBadge/></li>
                </ul>
                </div>

                <div>
                <p>back-end</p>

                <ul className="flex">
                    <li> <SiExpress/></li>
                    <li> <DiCss3/></li>
                    <li> <DiNodejs/></li>
                    <li> <DiNpm/></li>
                    
                </ul>
                </div>
                <div>

                <p>Database and others</p>
                <ul className="flex">
                    <li> <DiMongodb/></li>
                    <li> <SiPostman/></li>
                    <li> <DiVisualstudio/></li>
                    <li> <FaFigma/></li>
                    <li> <SiGithub /></li>

                </ul>
                </div>
            </div>
        </div>
    </div>
    </>
}