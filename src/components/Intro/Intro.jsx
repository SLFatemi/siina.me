import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import TypeIt from "typeit-react";
import pfpDark from "../../assets/pfpDark.png";
import pfpLight from "../../assets/pfpLight.png";
import { useTranslation } from "../../i18n/i18nProvider.js";
import { useThemeStore } from "../../store/themeStore.js";
import styles from "./Intro.module.scss";

function Intro({ doneWriting, setDoneWriting }) {
	const isLight = useThemeStore((store) => store.isLight);
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
		<section className={styles.sectionImg}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.3, ease: "easeIn" }}
			>
				<img
					src={isLight ? pfpLight : pfpDark}
					alt={"Sina Fatemi"}
					className={styles.mainImg}
				/>
			</motion.div>
			<div className={styles.nameLinks}>
				{!hasTyped ? (
					<TypeIt
						options={{
							afterComplete: handleTypingComplete,
						}}
						className={`${styles.name} ${language === "fa" ? styles.fa : ""}`}
					>
						{t("intro.firstName")}
						<span className={styles.smSpace}> </span>
						{t("intro.lastName")}
					</TypeIt>
				) : (
					<div
						className={`${styles.name} ${language === "fa" ? styles.fa : ""}`}
					>
						{t("intro.firstName")}
						<span className={styles.smSpace}> </span>
						{t("intro.lastName")}
					</div>
				)}
				{doneWriting && (
					<ul className={styles.socialLinks}>
						<li>
							<a
								target={"_blank"}
								rel="noopener noreferrer"
								href="https://www.linkedin.com/in/sinafatemi"
							>
								<FaLinkedin className={styles.linkIcon} size={20} />
							</a>
						</li>
						<li>
							<a
								target={"_blank"}
								rel="noopener noreferrer"
								href="https://github.com/SLFatemi"
							>
								<FaGithub className={styles.linkIcon} size={20} />
							</a>
						</li>
						<li>
							<a
								target={"_blank"}
								rel="noopener noreferrer"
								href="https://t.me//SLfatemi"
							>
								<FaTelegram className={styles.linkIcon} size={20} />
							</a>
						</li>
					</ul>
				)}
			</div>
			<div
				className={`${styles.description} ${!doneWriting ? styles.hidden : ""}`}
			>
				{t("intro.description")} @
				<a href="https://oddrun.ir/">{t("intro.affiliate")}</a>
			</div>
		</section>
	);
}

export default Intro;
