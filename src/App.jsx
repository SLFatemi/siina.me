import './App.css'
import Intro from "./components/Intro.jsx";
import TextSection from "./components/TextSection.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";

function App() {
    return (
        <div className="container">
            <Intro/>
            <TextSection>{
                {
                    name: "About",
                    description: "Hey 👋, I’m Sina a 19 y/o CS student eager to learn Front-End development"
                }
            }</TextSection>
            <TextSection>{
                {
                    name: "Education",
                    description: "I’m currently majoring in Computer Science at Iran University of Science and Technology (IUST)"
                }
            }</TextSection>
            <Skills/>
            <Projects/>
        </div>
    )
}

export default App
