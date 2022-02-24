import React,{useState,Suspense} from 'react'
import './App.css';
import Home from './Components/Pages/Home';
import Skills from './Components/Pages/Skills';
import Projects from './Components/Pages/Projects';
import Contact from './Components/Pages/Contact';
import Navigation from './Components/Navigation/Navigation';

// import { chakra, shouldForwardProp  } from '@chakra-ui/react'
import Oldcomputer from './Components/3D/Oldcomputer'
import { Canvas} from '@react-three/fiber'
import {OrbitControls,ContactShadows} from '@react-three/drei'
import Section from './Components/Pages/Section';


function App() {
  const [active, setActive] = useState("home")
  
  return (
    <div className="App">
      <Navigation setActive={setActive}/>
      <div>
        <div className='mt-24 h-72'>
          <Canvas >
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.3} />
            <Suspense fallback={null}>
              <Oldcomputer/>
              <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.5} width={20} height={10} blur={1} far={0.8} />
            </Suspense>
          </Canvas>
        </div>

        {active === "home" && (
          <Section>
            <Home/>
          </Section>
        )}
        
        {active === "skills" && (
          <Section>
          <Skills/>
          </Section>
        )}

        {active === "projects" && (
          <Section>
            <Projects/>
          </Section>
        )}

        {active === "contact" && (
          <Section>
            <Contact/>
          </Section>
        )}
         
       </div>
    </div>
  );
}

export default App;
