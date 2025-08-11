import { motion } from "framer-motion";
import "./App.css";

import { useState } from "react";
import Footer from "./components/Footer.jsx";
import Intro from "./components/Intro.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills.jsx";
import TextSection from "./components/TextSection.jsx";

const glideInVariant = {
	hidden: { opacity: 0, x: -30 },
	visible: { opacity: 1, x: 0 },
};

function App() {
	const [doneWriting, setDoneWriting] = useState(false);
	const componentsArray = [
		<TextSection key={"About"}>
			{{
				name: "About",
				description: `Hey 👋, I’m Sina a 19 y/o Software Engineer eager to learn more about Front-End technologies.
                       I try to build interfaces that feel as good as they look, from pixel-perfect designs in Figma to live, responsive apps in the browser`,
			}}
		</TextSection>,
		<TextSection key={"Edu"}>
			{{
				name: "Education",
				description:
					"I’m currently majoring in Computer Science at Iran University of Science and Technology (IUST)",
			}}
		</TextSection>,
		<Skills key={"Skills"} />,
		<Projects key={"Projects"} />,
	];

	return (
		<div className="container">
			<Intro doneWriting={doneWriting} setDoneWriting={setDoneWriting} />
			{doneWriting && (
				<>
					{componentsArray.map((Component, i) => (
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.1 }}
							variants={glideInVariant}
							transition={{
								duration: 0.3,
								ease: "easeOut",
								delay: i <= 2 ? (i + 1) * 0.3 : 0,
							}}
							key={Component.key}
						>
							{Component}
						</motion.div>
					))}
					<Footer />
				</>
			)}
		</div>
	);
}

export default App;
