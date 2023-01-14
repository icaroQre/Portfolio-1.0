import React from "react";
import Header from "./components/Header";
import AboutSection from "./sessions/AboutSection";
import ContactSection from "./sessions/ContactSection";
import MainSection from "./sessions/MainSection";
import ProjectsSection from "./sessions/ProjectsSection";
import TransitonSection from "./sessions/TransitionSection";

function App() {

  return (
    <>
      <Header />
      <TransitonSection />
      <MainSection />
      <TransitonSection />
      <AboutSection />
      <TransitonSection />
      <ContactSection />
      <TransitonSection />
    </>
  );
}

export default App;
