import "./Home.css";

import Hero from "./Hero/Hero";
import About from "./About/About";
import MyProjects from "./MyProjects/MyProjects";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";

function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Education />
      <Skills />
      <MyProjects />
      <Contact />
    </div>
  );
}

export default Home;