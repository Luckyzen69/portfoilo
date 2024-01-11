import React from 'react';
import starmall from '../assets/starmall.jpg';  
import darkcomplex from "../assets/darkcomplex.png"
import jobportal from "../assets/Jobportal.png"

export default function Projects(){
    return <>
    <div id='projects'>
       <h1 className="justify-center flex font-bold font-mono text-3xl m-2 mb-10">Projects </h1>
       <div className="grid grid-cols-1">
        <div className="border grid grid-cols-1 sm:grid-cols-2 font-mono m-2 hover:ring-2 rounded-lg">
             <a href="https://luckyzen69.github.io/Dark-complex/#home"> 
             <img src={darkcomplex} alt="image" />
          </a>
             <p className='font-mono  justify-start ml-4'> <span className='font-bold font-mono text-xl ml-4'> Dark Complex : Science behind Interstellar</span>
             <br /> <br />
             
             Dark complex is a website which was created with only basic HTML, CSS and JAVASCRIPT. This website is about a movie Interstellar which was  a Cinematic Odyssey Beyond Space and Time. 
             Directed by the director of movie Oppenheimer.

             </p>
             
            </div>

        <div className="border  grid grid-cols-1 sm:grid-cols-2 m-2 hover:ring-2 rounded-e-lg">
            <p className='font-mono ml-4 '><span className='font-bold text-xl ml-4'>Job Portal </span>
            <br /><br />
             Job  portal is a 1st website which I created by using MERN basically Mongodb, Express.js , React, Node.js and Postman. It is responsive and user-friendly website. </p>
           <a href="#"> <img src={jobportal} alt="image" key={jobportal} />
            </a>
            </div>
            
       </div>
    </div>
        
        </>
 }