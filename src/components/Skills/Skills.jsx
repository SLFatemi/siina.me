import { FaCss3Alt, FaReact } from "react-icons/fa";
import { IoIosBrush } from "react-icons/io";
import { IoLogoJavascript, IoLogoPython } from "react-icons/io5";
import { SiSass } from "react-icons/si";
import Skill from "./Skill.jsx";
import "./_Skills.scss";

const skillsList = [
	{ name: "React.js", svg: FaReact },
	{ name: "Javascript", svg: IoLogoJavascript },
	{ name: "Sass/SCSS", svg: SiSass },
	{ name: "CSS3", svg: FaCss3Alt },
	{ name: "Python", svg: IoLogoPython },
	{ name: "Graphic Design", svg: IoIosBrush },
];

function Skills({ isLight }) {
	return (
		<div className={"section-container"}>
			<div className="section-name --skills">Skills</div>
			<section className="section --skills">
				<div className="section-description">
					<div className="skills">
						{skillsList.map((skill) => {
							return (
								<Skill
									isLight={isLight}
									name={skill.name}
									svg={skill.svg}
									key={skill.name}
								/>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Skills;
