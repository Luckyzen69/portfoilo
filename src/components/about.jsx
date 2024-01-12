import { Link } from "react-router-dom"

export default function About(){
    return <> <div className="relative cursor-default  dark:bg-zinc-900 dark:text-white     	">

    <div className="justify-center flex  sticky  hover:text-red dark:bg-zinc-900 dark:text-white   ">
    {[
    ['Home', '/home'],
    ['About', '/about'],
    ['Projects', '/projects'],
    ['Blog', '/blog'],
  ].map(([title, url]) => (
    <Link to={url} key={title} className="rounded-lg px-3 py-2 text-slate-700  font-medium hover:bg-slate-100 hover:text-slate-900 dark:bg-zinc-900 dark:text-white dark:hover:text-red-500 ">{title}</Link>
  ))}
    
    </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2  dark:bg-zinc-900 dark:text-white ">

    <div className="m-2 text-center">
    <h2 className="font-bold font-mono text-xl">AIMS / GOALS  </h2>
    <div className="vb"></div>
   <ul className=" font-mono  space-y-10 mt-10  ">
    <li className="text-base"> Software developer</li>
    <li className="text-base"> Game developer</li>
    <li className="text-base"> App developer</li>
    <li className="text-base"> Animator </li>
   </ul>
    </div>

   <div className="m-2 text-center  dark:bg-zinc-900 dark:text-white ">
    <h2 className="font-bold font-mono text-xl">Education</h2>
    <div className="vl"></div>
    <ul className="space-y-10 mt-10 font-mono">
        <li className="text-base"> Secondary Education Examination (SEE) <span>: 2021 AD / 2077 BS</span></li>
        <li className="text-base">NEB BOARD (SLC / +2) <span>: 2023 AD / 2079 BS</span></li>
        <li className="text-base">MERN Stack : Course taken at Mindrisers: Institute of Technology </li>
        <li className="text-base">Bachelor : applied </li>
    </ul>
   </div>


    </div>
    </>
}