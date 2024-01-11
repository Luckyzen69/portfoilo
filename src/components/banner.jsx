import { DiCss3 ,DiHtml5 ,DiJsBadge,DiMongodb ,DiVisualstudio,DiNodejs,DiNpm   } from "react-icons/di";
import { SiTailwindcss,SiGithub  } from "react-icons/si";
import { SiExpress,SiPostman  ,SiReact } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";




export default function Banner(){
    return <>
    <div className="flex justify-center items-center text-center  ">
        <div className=" ">

         
        <h1 className="font-bold font-mono text-2xl">I am a MERN Stack developer</h1>
        </div>
        <div className="border rounded-full p-4 m-2 ">
          <img src="../assets/starmall.jpg" alt="" />
        </div> 
        </div>

        <div className="border sm:rounded-full p-2 m-10   text-center">
            <p className="font-bold text-2xl  font-mono">  Skills </p>
            <div className=" space-x- justify-center  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"  >
                <div  >
                <p className="font-bold font-mono text-xl">Font-End</p>
                <ul className="flex space-x-4 justify-center ">
                    
                    <li> <SiReact/></li>
                    <li> <DiHtml5/></li>
                    <li> <SiTailwindcss/></li>
                    <li> <DiJsBadge/></li>
                </ul>
                </div>

                <div>
                <p className="font-bold font-mono text-xl">Back-End</p>

                <ul className="flex space-x-4 justify-center ">
                    <li > <FaNodeJs/></li>
                    <li> <SiExpress/></li>
                    <li> <DiCss3/></li>
                    <li> <DiNpm/></li>
                    
                </ul>
                </div>
                <div>

                <p className="font-bold font-mono text-xl">Database & Others</p>
                <ul className="flex space-x-4 justify-center">
                    <li> <DiMongodb/></li>
                    <li> <SiPostman/></li>
                    <li> <DiVisualstudio/></li>
                    <li> <FaFigma/></li>
                    <li> <SiGithub /></li>

                </ul>
                </div>
            </div>
        </div>
    
    </>
}