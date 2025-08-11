import { FaGlobe } from "react-icons/fa";

function GithubButton({ link }) {
	const openInNewTab = () => {
		window.open(link, "_blank", "noopener,noreferrer");
	};
	return (
		<button onClick={openInNewTab} type={"button"}>
			<FaGlobe size={20} />
		</button>
	);
}

export default GithubButton;
