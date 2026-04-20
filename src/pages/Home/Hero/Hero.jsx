import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hi, I'm <span>Srija</span>
        </h1>
        <h2>AI & Software Developer</h2>
        <p>
          Passionate about building scalable applications and exploring
          AI-driven technologies.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">View Projects</button>
          <button className="btn-secondary">Contact Me</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;