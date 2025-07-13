import Skill from "./Skill.jsx";

function Skills({skillsList}) {
    return <>
        <div className="section-name --skills">
            Skills
        </div>
        <section className="section --skills">
            <div className="section-description">
                <div className="skills">
                    {skillsList.map(skill => {
                        return <Skill name={skill.name} svg={skill.svg}/>
                    })}
                </div>
            </div>
        </section>
    </>

}

export default Skills