import "./MyProjects.css";

function MyProjects() {
  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <div className="project-content">
            <h3>Play Your Mood</h3>
            <p>
              Mood-based music recommendation app built using React,
              Spring Boot, and MySQL.
            </p>
          </div>
        </div>

        <div className="project-card">
          <div className="project-content">
            <h3>ESA – Exam Seating Arrangement</h3>
            <p>
              A frontend tool to automate exam hall seating using
              HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default MyProjects;