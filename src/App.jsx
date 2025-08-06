import './App.css'
import Intro from "./components/Intro.jsx";
import TextSection from "./components/TextSection.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <div className="container">
            <Intro/>
            <TextSection>{
                {
                    name: "About",
                    description: `Hey 👋, I’m Sina a 19 y/o Software Engineer eager to learn more about Front-End technologies.
                       I try to build interfaces that feel as good as they look, from pixel-perfect designs in Figma to live, responsive apps in the browser`
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
            <Footer/>
        </div>
    )
}

export default App
