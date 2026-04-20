import "./Home.css";

import Hero from "./Hero/Hero";
import About from "./About/About";
import MyProjects from "./MyProjects/MyProjects";
import Education from "./Education/Education";

function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Education />
      <MyProjects />
    </div>
  );
}

export default Home;