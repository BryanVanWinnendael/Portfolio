import React, { Suspense } from 'react'
import { Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import { Heading,Text ,Center,useColorMode,useColorModeValue} from '@chakra-ui/react'
import Oldcomputer from './Oldcomputer'
function Page1() {
  const themeText = useColorModeValue("text.light","text.dark")


  return (
    <div className='h-screen grid grid-rows-page1'>
      <Canvas className='pt-5'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Oldcomputer/>
        </Suspense>
      </Canvas>
      <Center h='100px' color='black'>
        <div>
          <Heading color={themeText}>My portfolio</Heading>
          <Text color={themeText} fontSize='2xl' className='mt-5'>(2xl) In love with React & Next</Text>
        </div>
      </Center>
    </div>
  )
}

export default Page1