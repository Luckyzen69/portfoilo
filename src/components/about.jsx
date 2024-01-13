import { Link } from "react-router-dom"

export default function About(){
    return <> <div className="relative cursor-default  dark:bg-stone-950	 dark:text-white     	">

    <div className="justify-center flex  sticky  hover:text-red dark:bg-stone-950 dark:text-white   ">
    {[
    ['Home', '/home'],
    ['About', '/about'],
    ['Projects', '/projects'],
    ['Blog', '/blog'],
  ].map(([title, url]) => (
    <Link to={url} key={title} className="rounded-lg px-3 py-2 text-slate-700  font-medium hover:bg-slate-100 hover:text-slate-900 dark:bg-stone-950 dark:text-white dark:hover:text-red-500 ">{title}</Link>
  ))}
    
    </div>
    </div>


    <div className="  pb-48  ">


    <div className="grid grid-cols-1 sm:grid-cols-2  dark:bg-stone-950 dark:text-white  h-max">

    <div className="m-2 text-center">
    <h2 className="font-bold font-mono text-xl">AIMS / GOALS  </h2>
    <div className="vb"></div>
   <ul className=" font-mono  space-y-10 mt-6  ">
    <li className="text-lg"> Software developer</li>
    <li className="text-lg"> Game developer</li>
    <li className="text-lg"> App developer</li>
    <li className="text-lg"> Animator </li>
   </ul>
    </div>

   <div className="m-2 text-center  dark:bg-stone-950 dark:text-white p-0.5">
    <h2 className="font-bold font-mono text-xl">Education</h2>
    <div className="vl"></div>
    <ul className="space-y-10 mt-6 font-mono ">
        <li className="text-lg"> Secondary Education Examination (SEE) <span>: 2021 AD / 2077 BS</span></li>
        <li className="text-lg">NEB BOARD (SLC / +2) <span>: 2023 AD / 2079 BS</span></li>
        <li className="text-lg">MERN Stack : Course taken at Mindrisers: Institute of Technology </li>
        <li className="text-lg">Bachelor : applied </li>
    </ul>
   </div>



    </div>
   <div className="text-center mt-9 p-0.5  font-mono">
    <h2 className="text-2xl">Experience</h2>
    <ul>
      <li className="text-lg">None</li>
      <li className="text-lg">....</li>
    </ul>
   </div>
    </div>
    </>
}