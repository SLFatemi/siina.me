import nameTypography from "../../assets/NameTypography.svg";
import { useTranslation } from "../../i18n/i18nProvider";
import styles from "./NavName.module.scss";

function NavName({ isLight }) {
	const { t } = useTranslation();

	return (
		<div
			className={styles.wrapper}
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
		>
			<img
				className={`${styles.image} ${!isLight ? styles.dark : styles.light}`}
				src={nameTypography}
				alt={t("nav.altText")}
			/>
			<h1 className={`${styles.name} secondary-font`}>
				{t("intro.firstName")}
				<span className={styles.smSpace}> </span>
				{t("intro.lastName")}
			</h1>
		</div>
	);
}

export default NavName;
