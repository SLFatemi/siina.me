import { motion } from "framer-motion";
import "./styles/main.scss";

import { useEffect, useRef, useState } from "react";
import DarkModeButton from "./components/DarkModeButton/DarkModeButton.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Intro from "./components/Intro/Intro.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import TextSection from "./components/TextSection/TextSection.jsx";

const glideInVariant = {
	hidden: { opacity: 0, x: -30 },
	visible: { opacity: 1, x: 0 },
};

function App() {
	const [doneWriting, setDoneWriting] = useState(false);
	const [isLight, setIsLight] = useState(false);

	const bodyEl = useRef(document.querySelector("body"));

	function handleChangeColorScheme() {
		setIsLight((cur) => !cur);
	}

	useEffect(() => {
		!isLight
			? bodyEl.current.classList.add("dark")
			: bodyEl.current.classList.remove("dark");
	}, [isLight]);

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
		<Skills key={"Skills"} isLight={isLight} />,
		<Projects key={"Projects"} isLight={isLight} />,
	];

	return (
		<div className="container">
			<DarkModeButton
				onChangeColorScheme={handleChangeColorScheme}
				isLight={isLight}
			/>
			<Intro
				doneWriting={doneWriting}
				setDoneWriting={setDoneWriting}
				isLight={isLight}
			/>
			{doneWriting && (
				<>
					{componentsArray.map((Component, i) => (
						<motion.div
							initial="hidden"
							animate="visible"
							// Removed staggered list animation

							// whileInView="visible"
							// viewport={{ once: true, amount: 0.1 }}
							variants={glideInVariant}
							transition={{
								duration: 0.3,
								ease: "easeOut",
								delay: i <= 3 ? (i + 1) * 0.2 : 0,
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
