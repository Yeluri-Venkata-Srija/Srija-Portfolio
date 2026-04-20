import "./About.css";
import profileImg from "./srija.jpeg";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        <div className="about-image">
          <img src={profileImg} alt="Srija" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am a B.Tech student specializing in AI-driven technologies with a
            strong interest in backend development and building scalable,
            real-world applications. I enjoy learning new technologies and
            applying them to solve meaningful problems.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;