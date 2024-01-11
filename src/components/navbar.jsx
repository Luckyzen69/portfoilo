import { TiHomeOutline } from "react-icons/ti";
import { GrProjects } from "react-icons/gr";

export default function Navbar(){
    return <>
    <div className="relative cursor-default	">

    <div className="justify-center flex   hover:text-red    ">
    {[
    ['Home', '/home'],
    ['About', '/about'],
    ['Projects', '/projects'],
    ['Contact', '/contact'],
  ].map(([title, url]) => (
    <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 ">{title}</a>
  ))}
    
    </div>
    </div>
    </>
}