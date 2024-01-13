import { useState } from "react"
import SingleQuestion from "./SingleQuestion"
import BlogData from "./BlogData"
import { Link } from "react-router-dom"
import React from "react"

export default function Blog(){
    const [BlogQuestions, setBlogQuestions] = useState(BlogData)
    return <>
     <div className="relative cursor-default	">

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
    <div className=" dark:bg-stone-950 dark:text-white p-10  pb-60  ">
        <p className="font-mono font-bold text-xl text-center ">Blog </p>
        <div className="m-2 font-mono p-1.5">
           
            <div>
            {BlogQuestions.map((BlogQuestion) => {
    // console.log(BlogQuestions);
    return (
        <React.Fragment key={BlogQuestion.id}>
            {BlogQuestion ? (
                <SingleQuestion {...BlogQuestion} />
            ) : (
                <p>Error: BlogQuestion is undefined</p>
            )}
        </React.Fragment>
    );
})}

            </div> 
        </div>
    </div>
    </>
}