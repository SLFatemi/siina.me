import { motion } from "framer-motion";
import "./styles/main.scss";

import { useEffect, useRef, useState } from "react";
import ChangeLangButton from "./components/ChangeLangButton/ChangeLangButton.jsx";
import DarkModeButton from "./components/DarkModeButton/DarkModeButton.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Intro from "./components/Intro/Intro.jsx";
import NavList from "./components/NavBtns/NavList.jsx";
import NavBtns from "./components/NavList/NavBtns.jsx";
import NavName from "./components/NavName/NavName.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import TextSection from "./components/TextSection/TextSection.jsx";
import { useTranslation } from "./i18n/i18nProvider.js";

const glideInVariant = {
	hidden: { opacity: 0, x: -30 },
	visible: { opacity: 1, x: 0 },
};

function App() {
	const [doneWriting, setDoneWriting] = useState(false);
	const [isLight, setIsLight] = useState(() => {
		return localStorage.getItem("darkMode")
			? JSON.parse(localStorage.getItem("darkMode"))
			: false;
	});

	const { t, language } = useTranslation();

	useEffect(() => {
		localStorage.setItem("lang", JSON.stringify(language));
	}, [language]);

	useEffect(() => {
		localStorage.setItem("darkMode", JSON.stringify(isLight));
	}, [isLight]);

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
		<TextSection id={"About"} key={"About"}>
			{{
				name: t("sections.about.name"),
				description: t("sections.about.description"),
			}}
		</TextSection>,
		<TextSection id={"Education"} key={"Edu"}>
			{{
				name: t("sections.education.name"),
				description: t("sections.education.description"),
			}}
		</TextSection>,
		<Skills key={"Skills"} isLight={isLight} />,
		<Projects key={"Projects"} isLight={isLight} />,
	];

	return (
		<>
			<Header>
				<nav>
					<NavName isLight={isLight} />
					<NavList />
					<NavBtns>
						<ChangeLangButton />
						<DarkModeButton
							onChangeColorScheme={handleChangeColorScheme}
							isLight={isLight}
						/>
					</NavBtns>
				</nav>
			</Header>
			<div className="container">
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
		</>
	);
}

export default App;
