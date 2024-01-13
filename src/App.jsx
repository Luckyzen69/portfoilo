import Banner from "./components/banner"
import Home from "./components/home"
import Navbar from "./components/navbar"
import { Route,Routes } from "react-router-dom"
import About from "./components/about"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Blog from "./blog/blog"
import { MdOutlineDarkMode } from "react-icons/md";

import { useState,useEffect } from "react"
function App() {
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
  return (
    
    <>
    <div className="dark:bg-stone-950	 dark:text-white max-h-screen">

    
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/banner" element={<Banner/>}/> 
      <Route path="/navbar" element={<Navbar/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blog" element={<Blog/>}/>
     </Routes>
   <button onClick={handleThemeSwitch} className="absolute top-1 right-2 text-4xl"><MdOutlineDarkMode/></button>
    </div>

     
     
    
    
    </>
  )
}

export default App
