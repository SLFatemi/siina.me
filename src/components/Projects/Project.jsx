import GithubButton from "./GithubButton.jsx";
import styles from "./Projects.module.scss";
import UrlButton from "./UrlButton.jsx";

function Project({ project, isLight }) {
	return (
		<div
			key={project.title}
			className={`${styles.projectCard} ${isLight ? "light" : "dark"}`}
		>
			<h2>{project.title}</h2>
			<p>{project.description}</p>
			<div className={styles.tags}>
				{project.tags.map((tag) => (
					<span key={tag} className={styles.tag}>
						{tag}
					</span>
				))}
			</div>

			<div className={styles.buttons}>
				<GithubButton link={project.link} />
				{project.url && <UrlButton link={project.url} />}
			</div>
		</div>
	);
}

export default Project;
