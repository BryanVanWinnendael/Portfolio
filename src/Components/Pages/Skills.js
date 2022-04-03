import React from 'react'
import {Heading,Box,useColorModeValue,Flex } from '@chakra-ui/react'


function Skills() {
  const colorHeader = useColorModeValue('#ffffff89', '#20202380')

  return (
    <div className='h-screen'>
          <Box 
          m="1.25rem"
          p = {2}
          bg={colorHeader}
          borderRadius="lg"
          >
            <Heading >Competenties</Heading>
          </Box>

            <Flex m="1.25rem">
              <Box bg='rgba(230, 80, 10, 0.5)' w='fit-content' p={4} m={2} color='white' borderRadius={"8px"}>
                <img src="/icons/html.svg" alt="html icon" className='w-12'/>
              </Box>
              <Box bg='rgba(3, 155, 229, 0.5)' w='fit-content' p={4} m={2} color='white' borderRadius={"8px"}>
                <img src="/icons/css.svg" alt="css icon" className='w-12'/>
              </Box>
              <Box bg='rgba(255, 214, 0, 0.5)' w='fit-content' p={4} m={2} color='white' borderRadius={"8px"}>
                <img src="/icons/js.svg" alt="js icon" className='w-12'/>
              </Box>
            </Flex>

            <Flex m="1.25rem">
              <Box bg='rgba(21, 101, 192, 0.5)' w='fit-content' p={4} m={2} color='white' borderRadius={"8px"}>
                <img src="/icons/java.svg" alt="java icon" className='w-12'/>
              </Box>
              <Box bg='rgba(22, 86, 146, 0.5)' w='fit-content' p={4} m={2} color='white' borderRadius={"8px"}>
                <img src="/icons/python.svg" alt="python icon" className='w-12'/>
              </Box>
              <Box bg='rgba(2, 119, 189, 0.5)' w='fit-content' p={4} m={2} color='white' borderRadius={"8px"}>
                <img src="/icons/sql.svg" alt="sql icon" className='w-12'/>
              </Box>
            </Flex>

      
      
    </div>
  )
}

export default Skills