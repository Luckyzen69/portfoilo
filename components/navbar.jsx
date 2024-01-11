import { TiHomeOutline } from "react-icons/ti";
import { GrProjects } from "react-icons/gr";

export default function Navbar(){
    return <>
    <div className="relative">

    <div className="justify-center flex  absolute    top-32  ">
       <ul >
        <li className="flex"><TiHomeOutline/>home</li>
        <li>about</li>
        <li>contact</li>
        <li className="flex"><GrProjects/>projects</li>
       </ul>
    </div>
    </div>
    </>
}