import React from 'react'
import { Heading,Text ,useColorModeValue,Box} from '@chakra-ui/react'
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
          <Box 
            mt="1.25rem"
            p={1.5}
            bg={useColorModeValue('#ffffff89', '#20202380')}
            borderRadius="lg"
            >
              <Text color={themeText} fontSize='2xl'>My name is Bryan Van Winnendael</Text>
          </Box>
        </div>
    </div>
  )
}

export default Home