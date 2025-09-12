import "./_Footer.scss";
import { useTranslation } from "../../i18n/i18nProvider.js";

function Footer() {
	const { t } = useTranslation();
	const curYear = new Date().getFullYear();
	return (
		<footer className={"section --footer secondary-font"}>
			<p>
				{"©"} {curYear} {t("footer.copyright")}
			</p>
			<p>
				{t("footer.builtWith")} <span>{t("footer.framework")}</span>
			</p>
		</footer>
	);
}

export default Footer;
