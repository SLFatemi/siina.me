import profilePicture from '../assets/pfp.png'
import {FaLinkedin, FaGithub, FaTelegram} from "react-icons/fa";

function Intro() {
    return <section className="section-img">
        <img src={profilePicture} alt={"Sina Fatemi's picture"} className="main-img"/>
        <div className="name-links">
            <div className="name">Sina<span className="sm-space"> </span>Fatemi</div>
            <ul className="social-links">
                <li>
                    <a className="link" href="https://www.linkedin.com/in/sinafatemi">
                        <FaLinkedin className={'link-icon'} size={20}/>
                    </a>
                </li>
                <li>
                    <a className="link" href="https://github.com/SLFatemi">
                        <FaGithub className={'link-icon'} size={20}/>
                    </a>
                </li>
                <li>
                    <a className="link" href="https://t.me//SLfatemi">
                        <FaTelegram className={'link-icon'} size={20}/>
                    </a>
                </li>
            </ul>
        </div>
        <div className="description">Front-End Developer</div>
    </section>
}

export default Intro