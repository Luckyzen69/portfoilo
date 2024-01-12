import React from 'react';
import starmall from '../assets/starmall.jpg';  
import darkcomplex from "../assets/darkcomplex.png"
import jobportal from "../assets/Jobportal.png"
import { Link } from 'react-router-dom';

export default function Projects(){
    return <>
      <div className="relative cursor-default	">

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


    <div id='projects' className=' dark:bg-zinc-900 dark:text-white '>
       <h1 className="justify-center flex font-bold font-mono text-3xl m-2 mb-10">Projects </h1>
       <div className="grid grid-cols-1">
        <div className="border grid grid-cols-1 sm:grid-cols-2 font-mono m-2 hover:ring-2 rounded-lg">
             <a href="https://luckyzen69.github.io/Dark-complex/#home" target='blank'> 
             <img src={darkcomplex} alt="image" />
          </a>
             <p className='font-mono  justify-start ml-4'> <span className='font-bold font-mono text-xl ml-4'> Dark Complex : Science behind Interstellar</span>
             <br /> <br />
             
             Dark complex is a website which was created with only basic HTML, CSS and JAVASCRIPT. This website is about a movie Interstellar which was  a Cinematic Odyssey Beyond Space and Time. 
             Directed by the director of movie Oppenheimer.
             <br /><br /> website link<br />
             <span className='hover:underline text-'><a href="https://luckyzen69.github.io/Dark-complex" target='blank'>https://luckyzen69.github.io/Dark-complex</a></span>

             </p>
             
            </div>

        <div className="border  grid grid-cols-1 sm:grid-cols-2 m-2 hover:ring-2 rounded-e-lg  dark:bg-zinc-900 dark:text-white ">
            <p className='font-mono ml-4 '><span className='font-bold text-xl ml-4'>Job Portal </span>
            <br /><br />
             Job  portal is a 1st website which I created by using MERN basically Mongodb, Express.js , React, Node.js and Postman. It is responsive and user-friendly website. 
             <br /><br />
             website link 
             <br />
             <span className='hover:underline'><a href="https://job-portal-0.netlify.app/" target='blank'>https://job-portal-0.netlify.app/</a></span>

             </p>
           <a href="https://job-portal-0.netlify.app/"> <img src={jobportal} alt="image" key={jobportal} />
            </a>
            </div>
            
       </div>
    </div>
        
        </>
 }