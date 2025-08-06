function Footer() {
    const curYear = (new Date()).getFullYear()
    return <footer className={'section --footer'}>
        <p>© {curYear} Sina Fatemi</p>
        <p>Built with React.js</p>
    </footer>
}

export default Footer

