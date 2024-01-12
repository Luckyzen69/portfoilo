 import React from "react"
 export default function SingleQuestion({date,title,detail}){
    <div>
       <p className="font-mono font-bold">{date}</p>
         <p className="font-bold ml-2">{title}</p>
            <p className="ml-4">- {detail} </p>
    </div>
 }