import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header_container">
        <h1 className="header_title">Srija</h1>

        <nav className="header_nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">My Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;