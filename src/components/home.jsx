import Banner from "./banner";
import Contact from "./contact";
import Navbar from "./navbar";
import Projects from "./projects";
import { useEffect,useState } from "react"
import { MdOutlineDarkMode } from "react-icons/md";


export default function Home(){
    const  [theme,setTheme] = useState("light");
    useEffect(()=>{
      if(theme == "dark"){
        document.documentElement.classList.add("dark")
      }else{
        document.documentElement.classList.remove("dark")
      }
    },[theme])
  
      const handleThemeSwitch=()=>{
        setTheme(theme === "dark" ? "light" : "dark")
      }
    return <>
    <div className="dark:bg-stone-900	 dark:text-white" >
    <Navbar />
   <Banner/>
   <Projects/>
   <Contact/>
   <button onClick={handleThemeSwitch} className="absolute top-1 right-2 text-3xl"><MdOutlineDarkMode/></button>
    </div>
    </>
}