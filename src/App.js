import React, {useContext} from 'react';
import Header from "./components/Header";
import AboutSection from "./sessions/AboutSection";
import ContactSection from "./sessions/ContactSection";
import MainSection from "./sessions/MainSection";
import ProjectSection from "./sessions/ProjectsSection";
import TransitonSection from "./sessions/TransitionSection";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeStateContext } from './providers/theme';
import themes from "./styles/themes"
import { ThemeProvider } from 'styled-components';


function App() {

  const { themeState } = useContext(ThemeStateContext)

  return (
    
    <>
      <ThemeProvider theme={themes[themeState]}>
        <GlobalStyle/>
        <Header />
        <MainSection />
        <TransitonSection />
        <AboutSection />
        <TransitonSection />
        <ProjectSection />
        <TransitonSection />
        <ContactSection />
      </ThemeProvider>
    </>
  );
}

export default App;
