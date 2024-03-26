import About from "./components/About";
import Experience from "./components/Experience";
import Experiencess from "./components/Experiencess";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Experiencess />

      <SocialLinks />
      <Experience />
    </div>
  );
}

export default App;
