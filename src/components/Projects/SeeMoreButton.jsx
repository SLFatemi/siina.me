import { FaGithub } from "react-icons/fa";
import { useTranslation } from "../../i18n/i18nProvider.js";

function SeeMoreButton({ link, isLight }) {
	const { t } = useTranslation();
	const openInNewTab = () => {
		window.open(link, "_blank", "noopener,noreferrer");
	};
	return (
		<button
			onClick={openInNewTab}
			type={"button"}
			className={`see-more ${isLight ? "light" : "dark"}`}
		>
			<span className={"secondary-font"}>{t("projects.seeMoreOn")}</span>
			<FaGithub size={28} />
		</button>
	);
}

export default SeeMoreButton;
