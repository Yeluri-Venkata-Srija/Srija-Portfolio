import "./Skills.css";

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>

      <div className="skills-container">

        {/* Advanced */}
        <div className="skills-group">
          <h3>Advanced</h3>
          <div className="skills-cloud">
            <span className="skill advanced">HTML</span>
            <span className="skill advanced">CSS</span>
            <span className="skill advanced">JavaScript</span>
            <span className="skill advanced">DBMS</span>
          </div>
        </div>

        {/* Moderate */}
        <div className="skills-group">
          <h3>Intermediate</h3>
          <div className="skills-cloud">
            <span className="skill moderate">React</span>
            <span className="skill moderate">Spring Boot</span>
            <span className="skill moderate">Python</span>
            <span className="skill moderate">Java</span>
            <span className="skill moderate">C</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;