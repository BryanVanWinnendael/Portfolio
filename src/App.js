import React, { useState,useEffect} from 'react'
import './App.css';
import Home from './Components/Pages/Home';
import Skills from './Components/Pages/Skills';
import Projects from './Components/Pages/Projects';
import Contact from './Components/Pages/Contact';
import Navigation from './Components/Navigation/Navigation';
import ComputerLoader from './Components/3D/ComputerLoader';
import Section from './Components/Pages/Section';
import { useToast } from '@chakra-ui/react'


function App() {
  const [active, setActive] = useState("home")
  const toast = useToast()

  useEffect(() => { 
    if(localStorage.getItem("mail")){
      toast({
        title: 'Mail send.',
        description: "Your mail has been send.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      localStorage.removeItem("mail")
    }

  }, [])

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
