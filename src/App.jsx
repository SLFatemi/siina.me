import './App.css'
import Intro from "./components/Intro.jsx";
import TextSection from "./components/TextSection.jsx";
import Skills from "./components/Skills.jsx";
import {FaHtml5, FaCss3Alt, FaReact} from "react-icons/fa";
import {IoLogoJavascript, IoLogoPython} from "react-icons/io5";
import {IoIosBrush} from "react-icons/io";


const skillsList = [
    {name: 'HTML5', svg: FaHtml5},
    {name: 'CSS3', svg: FaCss3Alt},
    {name: 'Javascript', svg: IoLogoJavascript},
    {name: 'React.js', svg: FaReact},
    {name: 'Pyhton', svg: IoLogoPython},
    {name: 'Graphic Design', svg: IoIosBrush},
]

function App() {
    return (
        <div className="container">
            <Intro/>
            <TextSection>{
                {
                    name: "About",
                    description: "Hey 👋, I’m Sina a 19 y/o CS student eager to learn Front-End development"
                }
            }</TextSection>
            <TextSection>{
                {
                    name: "Education",
                    description: "I’m currently majoring in Computer Science at Iran University of Science and Technology (IUST)"
                }
            }</TextSection>
            <Skills skillsList={skillsList}/>
        </div>
    )
}

export default App
