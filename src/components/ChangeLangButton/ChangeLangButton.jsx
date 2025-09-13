import "./_ChangeLangButton.scss";
import { useTranslation } from "../../i18n/i18nProvider.js";

function ChangeLangButton() {
	const { t, language, setLanguage } = useTranslation();
	return (
		<button
			onClick={() => {
				setLanguage(language === "en" ? "fa" : "en");
			}}
			type={"button"}
			className={`change-lang-btn secondary-font ${language}`}
		>
			<p>{t("buttons.changeLang")}</p>
		</button>
	);
}

export default ChangeLangButton;
