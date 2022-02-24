import React from 'react'
import { Heading,Text ,useColorModeValue} from '@chakra-ui/react'
import Typewriter from "typewriter-effect";

function Home() {
  const themeText = useColorModeValue("text.light","text.dark")

  return (
    <div className='h-screen grid grid-rows-page1 bg-transparent'>
        <div className='m-5'>
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
    </div>
  )
}

export default Home