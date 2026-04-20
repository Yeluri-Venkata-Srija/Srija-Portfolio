import "./Education.css";

function Education() {
  return (
    <section className="education-section" id="education">
      <h2>Education</h2>

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>B.Tech - CSE (AI)</h3>
            <p>KL University (2023–2027)</p>
            <span>CGPA: 9.11</span>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Intermediate</h3>
            <p>Rishi Junior College</p>
            <span>94.8%</span>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Schooling</h3>
            <p>Sarada English Medium High School</p>
            <span>10 CGPA</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;