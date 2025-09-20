import { FaGithub } from "react-icons/fa";
import styles from "./Projects.module.scss";

function GithubButton({ link }) {
	return (
		<a
			className={styles.button}
			href={link}
			target={"_blank"}
			rel="noopener noreferrer"
			type={"button"}
		>
			<FaGithub size={20} />
		</a>
	);
}

export default GithubButton;
