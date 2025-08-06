function TextSection({children}) {
    return <>
        <div className="section-name">
            {children.name}
        </div>
        <section>
            <p className="section-description">
                {children.description}
            </p>
        </section>
    </>
}

export default TextSection