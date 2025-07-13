function TextSection({children}) {
    return <>
        <div className="section-name --about">
            {children.name}
        </div>
        <section className="section --about">
            <div className="section-description --about">
                {children.description}
            </div>
        </section>
    </>
}

export default TextSection