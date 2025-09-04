import { FaGithub } from "react-icons/fa";

function SeeMoreButton({ link, isLight }) {
	const openInNewTab = () => {
		window.open(link, "_blank", "noopener,noreferrer");
	};
	return (
		<button
			onClick={openInNewTab}
			type={"button"}
			className={`see-more ${isLight ? "light" : "dark"}`}
		>
			<span>See more on</span>
			<FaGithub size={28} />
		</button>
	);
}

export default SeeMoreButton;
