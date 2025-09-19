function TextSection({ children, id }) {
	return (
		<div className={"section-container"} id={id}>
			<div className="section-name">{children.name}</div>
			<section>
				<p className="section-description">{children.description}</p>
			</section>
		</div>
	);
}

export default TextSection;
