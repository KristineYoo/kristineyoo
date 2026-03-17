import './App.css'
import Navbar from './components/header-buttons'
import photo from './assets/headshot.jpg'
import AuraBackground from "./components/background";
import Experience from './components/resume';


export default function App() {
  return (
    <AuraBackground>


      <div className="header-container">
        <div className="header-name">Kristine Yoo</div>
        <hr className="header-bar" />
        <Navbar />
      </div>





      <div className="about-row">
        <img src={photo} alt="Kristine Yoo" className="headshot" />
        <section id="about">About section</section>
        <div className="about-text-column">
          <p className="about-text-header">Hi, My name is Kristine Yoo</p>
          <p className="about-text-body">I'm an Honors Computer Science and Mathematics student at Drexel University, concentrating in Artificial Intelligence & Machine Learning and Algorithms & Theory. I decided on my majors after taking an Intro to Python class freshman year of high school, but my curiosity started even earlier. As a kid, I would wake up before dawn just to watch SpaceX attempt to land the Falcon 9. That fascination with making the rocket reusable and pushing the boundaries of what's technically possible never left me. At my core, I thrive on hard problems that require you to sit with the complexity until you can reason something out. I'm passionate about applying my knowledge at the intersection of mathematical depth and systems thinking. Finding elegant, efficient solutions to problems that sit at the edge of what's computationally and analytically possible is what drives me.

            I'm also deeply interested in how AI can streamline life in a meaningful, scalable way, not just automating the mundane, but augmenting the way we think, decide, build, and work.</p>
        </div>
      </div>




      < Experience />

    </AuraBackground>



  );
}