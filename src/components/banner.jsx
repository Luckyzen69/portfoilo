import { DiCss3 ,DiHtml5 ,DiJsBadge,DiMongodb ,DiVisualstudio,DiNodejs,DiNpm   } from "react-icons/di";
import { SiTailwindcss,SiGithub ,SiRedux  } from "react-icons/si";
import { SiExpress,SiPostman  ,SiReact } from "react-icons/si";
import { FaFigma } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import profile from '../assets/profile.jpg'; 



export default function Banner(){
    return <>
    <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center text-center m-4 dark:text-white ">
        <div>
        <h1 className="font-bold font-mono text-2xl">I am a MERN Stack Developer.</h1>
        </div>
        <div className=" rounded-full sm:border grid grid-cols-1 sm:grid-cols-2  p-4 m-2 hover:ring-2 ">
          <img src={profile} alt=""  className=" flex  justify-center items-center text-center h-64 hover:ring-4 rounded-full hover:shadow-2xl" />
            <p className="font-mono text-xl mr-10 mt-4 ">My name is 
            <span className="font-bold"> Lagzen Thakuri.</span> 
             <br /> <br /> <br />
             From <span className="font-bold"> Nepal , Kathmandu.</span>
             <br /> <br /> <br />
            Thakurizen22@gmail.com
            </p>
        </div> 
        </div>

        <div className="border sm:rounded-full p-2 m-10   text-center hover:ring-2">
            <p className="font-bold text-3xl  font-mono mb-10  ">  Skills </p>
            <div className=" space-x- justify-center  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"  >
                <div  >
                <p className="font-bold font-mono text-xl">Font-End</p>
                <ul className="flex space-x-4 justify-center ">
                    
                    <li> <DiHtml5/></li>
                    <li> <DiCss3/></li>
                    <li> <DiJsBadge/></li>
                    <li> <SiReact/></li>
                    <li> <SiTailwindcss/></li>
                </ul>
                </div>

                <div>
                <p className="font-bold font-mono text-xl">Back-End</p>

                <ul className="flex space-x-4 justify-center ">
                    <li > <FaNodeJs/></li>
                    <li> <SiExpress/></li>
                    <li> <DiNpm/></li>
                    <li> <SiRedux /></li>
                    
                </ul>
                </div>
                <div>

                <p className="font-bold font-mono text-xl">Database & Others</p>
                <ul className="flex space-x-4 justify-center">
                    <li> <DiMongodb/></li>
                    <li> <SiPostman/></li>
                    <li> <DiVisualstudio/></li>
                    <li> <FaFigma/></li>
                    

                </ul>
                </div>
            </div>
        </div>
                <hr />
    
    </>
}