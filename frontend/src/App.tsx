import './App.css'
import Navbar from './components/header-buttons'
import photo from './assets/headshot.jpg'
import AuraBackground from "./components/background";


export default function App() {
  return (
    <AuraBackground>
      <div className="header-name">Kristine Yoo</div>
      <hr className="header-bar" />

      <Navbar />
      <div className="about-row">
        <img src={photo} alt="Kristine Yoo" className="headshot" />
        <div className="about-text-column">
          <p className="about-text-header">Hi, My name is Kristine Yoo</p>
          <p className="about-text-body">I'm an Honors Computer Science and Mathematics student at Drexel University, concentrating in Artificial Intelligence & Machine Learning and Algorithms & Theory.  </p>
        </div>
      </div>
      <section id="about">About section</section>
      <section id="work">Work section</section>
      <section id="leadership">Leadership section</section>
      <section id="projects">Projects Section</section>
      <section id="contact">Contact section</section>
    </AuraBackground>
  );
}