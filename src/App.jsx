import Banner from "../components/banner"
import Home from "../components/home"
import Navbar from "../components/navbar"
import { Route,Routes } from "react-router-dom"


function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/banner" element={<Banner/>}/> 
      <Route path="/navbar" element={<Navbar/>}/>
     </Routes>
     
     
    
    </>
  )
}

export default App
