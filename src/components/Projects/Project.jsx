import GithubButton from "./GithubButton.jsx";

function Project({project}) {
    return <div key={project.title} className="project-card">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="tags">
            {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
            ))}
        </div>
        <GithubButton link={project.link}/>
    </div>
}

export default Project

