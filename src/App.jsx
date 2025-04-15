import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Education from "./components/education/Education";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Project from "./components/project/Project";
import Services from "./components/services/Services";
// import Test from "./Test"


function App() {
  return (
    <>
      <div>
        <Cursor />
        <section id="Homepage">
          <Navbar />
          <Hero />
        </section>
        <section id="Services">
          <Parallax type="services" />
        </section>
        <section>
          <Education/>
        </section>
        {/* <section>
          <Services />
        </section> */}
        <section id="MYproject">
          <Project/>
        </section>
        <section id="Portfolio">
          <Parallax type="portfolio" />
        </section>
        <Portfolio />
        <section id="Contact">
          <Contact />
        </section>
        <section id="About">
          <About />
        </section>
        {/* <Test/>
      <Test/> */}
      </div>
    </>
  );
}

export default App;
