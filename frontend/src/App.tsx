import './App.css'
import Navbar from './components/header-buttons'
import photo from './assets/headshot.jpg'


export default function App() {
  return (
    <div>
      <div className="header-name">Kristine Yoo</div>
      <hr className="header-bar" />
      <div className="blob" />

      <Navbar />
      <div className="about-row">
        <img src={photo} alt="Kristine Yoo" className="headshot" />
        <p className="about-text">Your text here.</p>
      </div>
      <section id="about">About section</section>
      <section id="work">Work section</section>
      <section id="leadership">Leadership section</section>
      <section id="projects">Projects Section</section>
      <section id="contact">Contact section</section>

    </div>

  )
}