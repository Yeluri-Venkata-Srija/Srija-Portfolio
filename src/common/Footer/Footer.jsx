import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <h2 className="footer_title">Srija</h2>

        <div className="footer_links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="footer_copy">
          © 2026 Srija. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;