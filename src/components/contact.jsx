import { FaGithub,FaYoutube,FaLinkedin   } from "react-icons/fa";


export default function Contact(){
    return <>
    <div className="justify-center text-center items-center" id="contact">
        <h1>Get in Touch</h1>
        <div className="text-center ">
            <ul className="flex text-center justify-center items-center space-x-2">
                <li><a href="https://github.com/Luckyzen69" target="blank"><FaGithub/></a></li>
                <li><a href="https://www.youtube.com/channel/UCQmp909J8KpqHM32EbYfyKQ" target="blank"> <FaYoutube /></a></li>
                <li><a href="https://www.linkedin.com/in/lagzen-thakuri-813286290/" target="blank"><FaLinkedin /></a></li>
                <li><a href=""></a></li>
            </ul>
        </div>
    </div>
    </>
}