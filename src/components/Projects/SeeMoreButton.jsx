import { FaGithub } from "react-icons/fa";
import { useTranslation } from "../../i18n/i18nProvider.js";
import styles from "./Projects.module.scss";

function SeeMoreButton({ link, isLight }) {
	const { t } = useTranslation();
	return (
		<a
			href={link}
			target={"_blank"}
			rel="noopener noreferrer"
			className={`${styles.seeMore} ${isLight ? "light" : "dark"}`}
		>
			<span className={"secondary-font"}>{t("projects.seeMoreOn")}</span>
			<FaGithub size={28} />
		</a>
	);
}

export default SeeMoreButton;
