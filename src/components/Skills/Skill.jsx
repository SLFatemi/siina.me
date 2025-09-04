function Skill({ name, svg: Icon, isLight }) {
	return (
		<div className={`skill ${isLight ? "light" : "dark"}`}>
			<Icon size={64} className={"skill-icon"} />
			<div className="skill-name">{name}</div>
		</div>
	);
}

export default Skill;
