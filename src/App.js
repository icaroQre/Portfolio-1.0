import React from "react";
import Header from "./components/Header";
import AboutSection from "./sessions/AboutSection";
import ContactSection from "./sessions/ContactSection";
import MainSection from "./sessions/MainSection";
import ProjectSection from "./sessions/ProjectsSection";
import TransitonSection from "./sessions/TransitionSection";

function App() {

  return (
    <>
      <Header />
      <MainSection />
      <AboutSection />
      <TransitonSection />
      <ProjectSection />
      <TransitonSection />
      <ContactSection />
    </>
  );
}

export default App;
