import GithubButton from "./GithubButton.jsx";
import UrlButton from "./UrlButton.jsx";

function Project({project}) {
    return <div key={project.title} className="project-card">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="tags">
            {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
            ))}
        </div>
        <div className={'buttons'}>
            <GithubButton link={project.link}/>
            {project.url && <UrlButton link={project.url}/>}
        </div>
    </div>
}

export default Project

