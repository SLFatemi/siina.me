import { IoMoon, IoSunny } from "react-icons/io5";
import styles from "./DarkModeButton.module.scss";

function DarkModeButton({ onChangeColorScheme, isLight }) {
	return (
		<button
			onClick={onChangeColorScheme}
			type={"button"}
			className={styles.darkModeBtn}
		>
			{isLight ? <IoMoon size={24} /> : <IoSunny size={24} />}
		</button>
	);
}

export default DarkModeButton;
