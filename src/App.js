import React, { useState, useEffect } from 'react'
import './App.css'
import Home from './Pages/Home'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Navigation from './Components/Navigation/Navigation'
import ComputerLoader from './Components/3D/ComputerLoader'
import Section from './Components/Section'
import { useToast, Box, Spinner, Text } from '@chakra-ui/react'
import Secret from './Components/Secret'
import SecretPage from './Pages/SecretPage'
import { useNav } from './Contexts/NavContext'

function App() {
  const { activePage } = useNav();
  const [loaded, setLoaded] = useState(false)
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
      {activePage === "secret" && (
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
               <SecretPage/>
              )}
          </Secret>
        </Box>
      )}

      <Navigation/>
      
      {activePage !== "secret" && (
        <>
          <ComputerLoader setLoaded={setLoaded}/>
          {activePage === "home" && (
            <Section>
              <Home/>
            </Section>
          )}

          {activePage === "skills" && (
            <Section>
              <Skills />
            </Section>
          )}

          {activePage === "projects" && (
            <Section>
              <Projects />
            </Section>
          )}

          {activePage === "contact" && (
            <Section>
              <Contact />
            </Section>
          )}
        </>
      )}
     
    </Box>
  );
}

export default App;
