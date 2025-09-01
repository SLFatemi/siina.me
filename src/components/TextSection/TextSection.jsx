import "./_TextSection.scss";

function TextSection({ children }) {
	return (
		<div className={"section-container"}>
			<div className="section-name">{children.name}</div>
			<section>
				<p className="section-description">{children.description}</p>
			</section>
		</div>
	);
}

export default TextSection;
