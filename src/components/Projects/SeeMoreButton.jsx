import { FaGithub } from "react-icons/fa";
import { useTranslation } from "../../i18n/i18nProvider.js";
import styles from "./Projects.module.scss";

function SeeMoreButton({ link, isLight }) {
	const { t } = useTranslation();
	const openInNewTab = () => {
		window.open(link, "_blank", "noopener,noreferrer");
	};
	return (
		<button
			onClick={openInNewTab}
			type={"button"}
			className={`${styles.seeMore} ${isLight ? "light" : "dark"}`}
		>
			<span className={"secondary-font"}>{t("projects.seeMoreOn")}</span>
			<FaGithub size={28} />
		</button>
	);
}

export default SeeMoreButton;
