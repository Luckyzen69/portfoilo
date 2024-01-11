import Banner from "./components/banner"
import Home from "./components/home"
import Navbar from "./components/navbar"
import { Route,Routes } from "react-router-dom"
import About from "./components/about"
import Projects from "./components/projects"
import Contact from "./components/contact"
import { useEffect,useState } from "react"
function App() {
 
  return (
    <>
    
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/banner" element={<Banner/>}/> 
      <Route path="/navbar" element={<Navbar/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
     
     
    
    
    </>
  )
}

export default App
