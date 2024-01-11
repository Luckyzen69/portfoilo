import React from 'react';
import starmall from '../assets/starmall.jpg';  
import jobportal from "../assets/Jobportal.png"


export default function Projects(){
    return <>
    <div>
       <h1 className="justify-center flex font-bold font-mono text-3xl m-2">Projects </h1>
       <div className="flex">
        <div className="border">
            <img src='../assets/starmall.jpg' alt="image" />
            <a href="https://luckyzen69.github.io/Dark-complex/#home">Dark Complex</a>
            </div>
        <div className="border">
            <img src={jobportal} alt="image" key={jobportal} />
            <a href="#">Job Portal</a>
            </div>
            <div className="border">
                <img src='../assets/starmall.jpg' alt="image" />
                <a href="#">e-commerce client</a>
                </div>
            <div className="border">
                <img src="" alt="Starmall " key={starmall} />
                <a href="#">Game</a>
                </div>
       </div>
    </div>
        
        </>
 }