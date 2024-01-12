

export default function Blog(){
    return <>
     <div className="relative cursor-default	">

<div className="justify-center flex  sticky  hover:text-red dark:bg-zinc-900 dark:text-white   ">
{[
['Home', '/home'],
['About', '/about'],
['Projects', '#projects'],
['Blog', '/blog'],
].map(([title, url]) => (
<a href={url} className="rounded-lg px-3 py-2 text-slate-700  font-medium hover:bg-slate-100 hover:text-slate-900 dark:bg-zinc-900 dark:text-white dark:hover:text-red-500 ">{title}</a>
))}

</div>
</div>
    <div>
        <p className="font-mono font-bold text-xl text-center">Blog </p>
        <div className="m-2 font-mono">
            <p className="font-mono font-bold">Jan 12 2024</p>
            <p></p>
        </div>
    </div>
    </>
}