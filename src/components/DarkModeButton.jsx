import { IoMoon, IoSunny } from "react-icons/io5";

function DarkModeButton({ onChangeColorScheme, isLight }) {
	return (
		<button
			onClick={onChangeColorScheme}
			type={"button"}
			className={"dark-mode-btn"}
		>
			{isLight ? <IoMoon size={24} /> : <IoSunny size={24} />}
		</button>
	);
}

export default DarkModeButton;
