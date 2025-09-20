import { useTranslation } from "../../i18n/i18nProvider.js";
import styles from "./NavList.module.scss";

function NavList() {
	const { t, language } = useTranslation();
	return (
		<ul
			className={`${styles.list} ${language === "fa" ? `secondary-font` : ""}`}
		>
			<li>
				<a href={"#about"}>{t("nav.listAbout")}</a>
			</li>
			{/*<li>*/}
			{/*	<a href={"#Education"}>education</a>*/}
			{/*</li>*/}
			<li>
				<a href={"#skills"}>{t("nav.listSkills")}</a>
			</li>
			<li>
				<a href={"#projects"}>{t("nav.listProjects")}</a>
			</li>
		</ul>
	);
}

export default NavList;
