import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import TypeIt from "typeit-react";
import pfpDark from "../../assets/pfpDark.png";
import pfpLight from "../../assets/pfpLight.png";
import "./_Intro.scss";
import { useEffect, useState } from "react";
import { useTranslation } from "../../i18n/i18nProvider.js";

function Intro({ doneWriting, setDoneWriting, isLight }) {
	const { t, language } = useTranslation();
	const [hasTyped, setHasTyped] = useState(false);

	// Set doneWriting to true immediately if we've already typed once
	useEffect(() => {
		if (hasTyped) {
			setDoneWriting(true);
		}
	}, [hasTyped, setDoneWriting]);

	const handleTypingComplete = () => {
		setHasTyped(true);
		setTimeout(() => {
			setDoneWriting(true);
		}, 200);
	};

	return (
		<section className="section-img">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.3, ease: "easeIn" }}
			>
				<img
					src={isLight ? pfpLight : pfpDark}
					alt={"Sina Fatemi"}
					className="main-img"
				/>
			</motion.div>
			<div className="name-links">
				{!hasTyped ? (
					<TypeIt
						options={{
							afterComplete: handleTypingComplete,
						}}
						className={`name ${language}`}
					>
						{t("intro.firstName")}
						<span className="sm-space"> </span>
						{t("intro.lastName")}
					</TypeIt>
				) : (
					<div className={`name ${language}`}>
						{t("intro.firstName")}
						<span className="sm-space"> </span>
						{t("intro.lastName")}
					</div>
				)}
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
				{t("intro.description")}
			</div>
		</section>
	);
}

export default Intro;
