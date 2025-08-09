import Masonry from 'react-masonry-css';
import './_Projects.scss'
import Project from "./Project.jsx";
import SeeMoreButton from "./SeeMoreButton.jsx";

const breakpointColumnsObj = {
    default: 2,
    768: 1
};


const projects = [
    {
        title: 'Code Scrapper',
        description:
            'A modular platform for real estate data collection, processing, and analysis',
        tags: ['Python', 'FastAPI', 'Javascript', 'RabbitMQ'],
        link: 'https://github.com/SLFatemi/CodeScraper'
    },
    {
        title: 'Siina.me',
        description: 'This particular Website',
        tags: ['React.js', 'Figma'],
        link: 'https://github.com/SLFatemi/siina.me',
    },
    {
        title: 'Forkify',
        description: 'A recipe web app using the Forkify API to allow users to search, view, modify, bookmark and add recipes.',
        tags: ['Javascript', 'Course-Project'],
        link: 'https://github.com/SLFatemi/Forkify',
        url: 'https://forkiify.pages.dev/',
    },
    {
        title: 'usePopcorn',
        description: 'An application that provides users with a way to explore movies, rate them, and manage their watched movies list.',
        tags: ['React.js', 'Course-Project'],
        link: 'https://github.com/SLFatemi/usePopcorn',
        url: 'https://usepopcorn-dlg.pages.dev/',
    },
    {
        title: 'CShot',
        description: 'A fast-paced two player shooting game',
        tags: ['Python', 'Pygame'],
        link: 'https://github.com/SLFatemi/CShot'
    },
    {
        title: 'Wall Wizard',
        description: 'A Precise Implementation of the Quoridor board game',
        tags: ['Python'],
        link: 'https://github.com/SLFatemi/WallWizard'
    },

];


function Projects() {
    return <div className={'section-container'}>
        <div className="section-name --projects">
            Projects
        </div>

        <section className={'section --projects'}>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-column"
            >
                {projects.map((p) => (
                    <Project key={p.title} project={p}/>
                ))}
            </Masonry>
            <SeeMoreButton link={'https://github.com/SLFatemi/'}/>
        </section>
    </div>
}

export default Projects

