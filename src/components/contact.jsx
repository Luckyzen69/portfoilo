import { FaGithub,FaYoutube,FaLinkedin ,FaInstagram  } from "react-icons/fa";


export default function Contact(){
    return <>
    <div className="justify-center text-center items-center dark:bg-stone-950 dark:text-white p-2" id="contact">
        <h1 className="font-bold cursor-default">Get in Touch</h1>
        
        <div className="m-2  ">
            <ul className="flex text-center justify-center items-center space-x-5 ">
                <li className="hover:text-red-500"><a href="https://github.com/Luckyzen69" target="blank"><FaGithub/></a></li>
                <li className="hover:text-red-500"><a href="https://www.youtube.com/channel/UCQmp909J8KpqHM32EbYfyKQ" target="blank"> <FaYoutube /></a></li>
                <li className="hover:text-red-500"><a href="https://www.linkedin.com/in/lagzen-thakuri-813286290/" target="blank"><FaLinkedin /></a></li>
                <li className="hover:text-red-500"><a href="https://www.instagram.com/lagzenthakuri/"><FaInstagram/></a></li>
            </ul>
        </div>
    </div>
    </>
}