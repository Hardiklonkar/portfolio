import React from "react";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";
import Certificates from "./components/certificates/Certificates";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
    <Certificates />
    <Contact />
    <Footer />
    </>
  );
}

export default App;