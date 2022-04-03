import React, { useState} from 'react'
import './App.css';
import Home from './Components/Pages/Home';
import Skills from './Components/Pages/Skills';
import Projects from './Components/Pages/Projects';
import Contact from './Components/Pages/Contact';
import Navigation from './Components/Navigation/Navigation';
import ComputerLoader from './Components/3D/ComputerLoader';
import Section from './Components/Pages/Section';



function App() {
  const [active, setActive] = useState("home")

  return (
    <div className="App">
      <Navigation setActive={setActive} />
      <div>
        <ComputerLoader />
          
        {active === "home" && (
          <Section>
            <Home />
          </Section>
        )}

        {active === "skills" && (
          <Section>
            <Skills />
          </Section>
        )}

        {active === "projects" && (
          <Section>
            <Projects />
          </Section>
        )}

        {active === "contact" && (
          <Section>
            <Contact />
          </Section>
        )}

      </div>
    </div>
  );
}

export default App;
