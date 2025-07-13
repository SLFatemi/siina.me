function Skill({name, svg: Icon}) {
    return <div className="skill">
        <Icon size={64} className={'skill-icon'}/>
        <div className="skill-name">
            {name}
        </div>
    </div>
}


export default Skill
