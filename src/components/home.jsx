import Banner from "./banner";
import Navbar from "./navbar";
import Projects from "./projects";

export default function Home(){
    return <>
    <div className="bg-lightBrown h-96">
    <Navbar />
   <Banner/>
   <Projects/>
    </div>
    </>
}