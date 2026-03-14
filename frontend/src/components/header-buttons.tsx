import '../App.css'


export default function Navbar() {
    return (
        <nav className="nav">
            <a href="#about" className="nav-button">About</a>
            <a href="#work" className="nav-button">Work Experience</a>
            <a href="#leadership" className="nav-button">Leadership</a>
            <a href="#projects" className="nav-button"> Projects</a>
            <a href="#contact" className="nav-button">Contact</a>
        </nav>
    )
}
