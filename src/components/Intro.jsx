import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import TypeIt from "typeit-react";
import profilePicture from "../assets/pfp.png";

function Intro({ doneWriting, setDoneWriting }) {
	return (
		<section className="section-img">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.3, ease: "easeIn" }}
			>
				<img src={profilePicture} alt={"Sina Fatemi"} className="main-img" />
			</motion.div>
			<div className="name-links">
				<TypeIt
					options={{
						afterComplete: (instance) => {
							instance.destroy();
							setTimeout(() => {
								setDoneWriting(true);
							}, 200);
						},
					}}
					className="name"
				>
					Sina<span className="sm-space"> </span>Fatemi
				</TypeIt>
				{doneWriting && (
					<ul className="social-links">
						<li>
							<a className="link" href="https://www.linkedin.com/in/sinafatemi">
								<FaLinkedin className={"link-icon"} size={20} />
							</a>
						</li>
						<li>
							<a className="link" href="https://github.com/SLFatemi">
								<FaGithub className={"link-icon"} size={20} />
							</a>
						</li>
						<li>
							<a className="link" href="https://t.me//SLfatemi">
								<FaTelegram className={"link-icon"} size={20} />
							</a>
						</li>
					</ul>
				)}
			</div>
			<div className={`description ${!doneWriting && "--hidden"}`}>
				Front-End Developer
			</div>
		</section>
	);
}

export default Intro;
