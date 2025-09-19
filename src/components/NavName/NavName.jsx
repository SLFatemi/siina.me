import nameTypography from "../../assets/NameTypography.svg";
import styles from "./NavName.module.scss";

function NavName({ isLight }) {
	return (
		<div
			className={styles.wrapper}
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
		>
			<img
				className={`${styles.image} ${!isLight ? styles.dark : styles.light}`}
				src={nameTypography}
				alt={"Sina Lotfi Fatemi's Typography"}
			/>
			<h1 className={styles.name}>Sina Fatemi</h1>
		</div>
	);
}

export default NavName;
