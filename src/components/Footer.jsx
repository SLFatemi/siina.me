function Footer() {
    const curYear = (new Date()).getFullYear()
    return <footer className={'section --footer'}>
        <p>© {curYear} Sina Fatemi</p>
        <p>Built with <span>React.js</span></p>
    </footer>
}

export default Footer

