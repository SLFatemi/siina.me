import Skill from "./Skill.jsx";
import {FaCss3Alt, FaHtml5, FaReact} from "react-icons/fa";
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

function Skills() {
    return <>
        <div className="section-name --skills">
            Skills
        </div>
        <section className="section --skills">
            <div className="section-description">
                <div className="skills">
                    {skillsList.map(skill => {
                        return <Skill name={skill.name} svg={skill.svg}/>
                    })}
                </div>
            </div>
        </section>
    </>

}

export default Skills