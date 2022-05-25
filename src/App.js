import React, { useState,useEffect} from 'react'
import './App.css';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Navigation from './Components/Navigation/Navigation';
import ComputerLoader from './Components/3D/ComputerLoader';
import Section from './Components/Section';
import { useToast,Box,Spinner,Text} from '@chakra-ui/react'
import Secret from './Components/Secret'; 
import SecretPage from './Pages/SecretPage';

function App() {
  const [active, setActive] = useState("home")
  const [loaded,setLoaded] = useState(false)
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
    <Box className="App">
      {active === "secret" && (
        <Box w="100vw" h="100vh" >
          <Secret>
              {loaded && (
                <Box w="full" h="full" display="flex" justifyContent="center" alignItems="center" backgroundColor="white">
                  <Text mr={2}  fontSize='xl' color="black">
                    Your site is being loaded
                  </Text>
                  <Spinner size='lg' color="black"/>
                </Box>
              )}
              {!loaded && (
               <SecretPage setActive={setActive}/>
              )}
          </Secret>
        </Box>

      )}

      <Navigation setActive={setActive} />
      
      {active !== "secret" && (
        <div>
          <ComputerLoader setActive={setActive} setLoaded={setLoaded}/>
          {active === "home" && (
            <Section>
              <Home setActive={setActive}/>
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
        
      )}
     
    </Box>
  );
}

export default App;
