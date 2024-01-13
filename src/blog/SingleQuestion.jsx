 import React from "react"
 export default function SingleQuestion({date,title,detail}){
   return<>
    <div>
       <p className="font-mono font-bold">{date}</p>
         <h1 className="font-bold ml-2">{title}</h1>
            <p className="ml-4"> -{detail} </p>
    </div>
   </>
 }