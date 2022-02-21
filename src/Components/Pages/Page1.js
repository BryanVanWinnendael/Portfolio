import React, { Suspense } from 'react'
import { Canvas} from '@react-three/fiber'
import {OrbitControls,ContactShadows} from '@react-three/drei'
import { Heading,Text ,Center,useColorModeValue} from '@chakra-ui/react'
import Oldcomputer from '../3D/Oldcomputer'
import Typewriter from "typewriter-effect";

function Page1() {
  const themeText = useColorModeValue("text.light","text.dark")

  return (
    <div className='h-screen grid grid-rows-page1 bg-transparent'>
      <Canvas >
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.3} />
        <Suspense fallback={null}>
          <Oldcomputer/>
          <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.5} width={20} height={10} blur={1} far={0.8} />
        </Suspense>
      </Canvas>
      <Center h='100px' color='black'>
        <div>
          <Heading color={themeText}>
            <Typewriter
            onInit={(typewriter)=> {
            typewriter
            .typeString("My Portfolio")
            .start();
            }}
            />
          </Heading>
          <Text color={themeText} fontSize='2xl' className='mt-5'>(2xl) In love with React & Next</Text>
        </div>
      </Center>
    </div>
  )
}

export default Page1