import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Experiencess";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Skills />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
