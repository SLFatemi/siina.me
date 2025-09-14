import { useTranslation } from "../../i18n/i18nProvider.js";
import styles from "./ChangeLangButton.module.scss";

function ChangeLangButton() {
	const { t, language, setLanguage } = useTranslation();
	return (
		<button
			onClick={() => {
				setLanguage(language === "en" ? "fa" : "en");
			}}
			type={"button"}
			className={`${styles.changeLangBtn} secondary-font ${language === "fa" ? styles.fa : ""}`}
		>
			<p>{t("buttons.changeLang")}</p>
		</button>
	);
}

export default ChangeLangButton;
