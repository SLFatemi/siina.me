import { useTranslation } from "../../i18n/i18nProvider.js";
import styles from "./NavList.module.scss";

function NavList() {
	const { t } = useTranslation();
	return (
		<ul className={styles.list}>
			<li>
				<a href={"#About"}>{t("nav.listAbout")}</a>
			</li>
			{/*<li>*/}
			{/*	<a href={"#Education"}>education</a>*/}
			{/*</li>*/}
			<li>
				<a href={"#Skills"}>{t("nav.listSkills")}</a>
			</li>
			<li>
				<a href={"#Projects"}>{t("nav.listProjects")}</a>
			</li>
		</ul>
	);
}

export default NavList;
