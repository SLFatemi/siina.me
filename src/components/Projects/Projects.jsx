import Masonry from "react-masonry-css";
import { useTranslation } from "../../i18n/i18nProvider.js";
import Project from "./Project.jsx";
import styles from "./Projects.module.scss";
import SeeMoreButton from "./SeeMoreButton.jsx";

const breakpointColumnsObj = {
	default: 2,
	768: 1,
};

function Projects({ isLight }) {
	const { t } = useTranslation();

	const projects = [
		{
			title: "FitBit",
			description: t("projects.descriptions.fitbit"),
			tags: ["React.js", "Figma", "SCSS"],
			link: "https://github.com/SLFatemi/fitbit",
			url: "https://fit-bit.pages.dev",
		},
		{
			title: "Siina.me",
			description: t("projects.descriptions.siina"),
			tags: ["React.js", "Figma", "SCSS"],
			link: "https://github.com/SLFatemi/siina.me",
		},
		{
			title: "Forkify",
			description: t("projects.descriptions.forkify"),
			tags: ["Javascript", "Course-Project"],
			link: "https://github.com/SLFatemi/Forkify",
			url: "https://forkiify.pages.dev/",
		},
		{
			title: "Code Scrapper",
			description: t("projects.descriptions.codeScraper"),
			tags: ["Python", "FastAPI", "Javascript", "RabbitMQ"],
			link: "https://github.com/SLFatemi/CodeScraper",
		},
		{
			title: "usePopcorn",
			description: t("projects.descriptions.usePopcorn"),
			tags: ["React.js", "Course-Project"],
			link: "https://github.com/SLFatemi/usePopcorn",
			url: "https://usepopcorn-dlg.pages.dev/",
		},
		{
			title: "CShot",
			description: t("projects.descriptions.cshot"),
			tags: ["Python", "Pygame"],
			link: "https://github.com/SLFatemi/CShot",
		},
		{
			title: "Wall Wizard",
			description: t("projects.descriptions.wallWizard"),
			tags: ["Python"],
			link: "https://github.com/SLFatemi/WallWizard",
		},
	];

	return (
		<div className={"section-container"} id={"projects"}>
			<div className="section-name --projects">
				{t("sections.projects.name")}
			</div>

			<section className={"section --projects"}>
				<Masonry
					breakpointCols={breakpointColumnsObj}
					className={styles.masonryGrid}
					columnClassName="masonry-column"
				>
					{projects.map((p) => (
						<Project isLight={isLight} key={p.title} project={p} />
					))}
				</Masonry>
				<SeeMoreButton
					isLight={isLight}
					link={"https://github.com/SLFatemi/"}
				/>
			</section>
		</div>
	);
}

export default Projects;
