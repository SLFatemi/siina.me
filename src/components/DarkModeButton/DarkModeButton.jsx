import { IoMoon, IoSunny } from "react-icons/io5";
import { useThemeStore } from "../../store/themeStore.js";
import styles from "./DarkModeButton.module.scss";

function DarkModeButton() {
	const isLight = useThemeStore((store) => store.isLight);
	const setIsLight = useThemeStore((store) => store.setIsLight);

	return (
		<button onClick={setIsLight} type={"button"} className={styles.darkModeBtn}>
			{isLight ? <IoMoon size={24} /> : <IoSunny size={24} />}
		</button>
	);
}

export default DarkModeButton;
