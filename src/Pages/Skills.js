import React from 'react'
import { Heading, Box, useColorModeValue, Flex, Text } from '@chakra-ui/react'
import { BsBraces } from "react-icons/bs";
import { RiBracesLine } from "react-icons/ri";
import { IoBuildOutline } from "react-icons/io5";


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
            <Heading >Skills</Heading>
          </Box>

          <Box>
            <Text m="1.25rem" color={useColorModeValue("gray","darkGray")} display="flex">Dit zijn alle talen en tools die ik ken.</Text>

            <Box m="1.25rem">
              <Flex alignItems="center">
                <RiBracesLine color={useColorModeValue("#414243","#a79f83")} size={30}/>
                <Heading size="lg" ml={1}>Talen</Heading>
              </Flex>
              
              <Flex mt={2}>
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

              <Flex>
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

              <Flex>
                <Box bg='rgba(152,160,171, 0.5)' w='fit-content' p={4} m={2} color='white' borderRadius={"8px"}>
                  <img src="/icons/c.svg" alt="java icon" className='w-12'/>
                </Box>
                <Box bg='rgba(200,149,232, 0.5)' w='fit-content' p={4} m={2} color='white' borderRadius={"8px"}>
                  <img src="/icons/cpp.svg" alt="python icon" className='w-12'/>
                </Box>
                <Box bg='rgba(143,106,166, 0.5)' w='fit-content' p={4} m={2} color='white' borderRadius={"8px"}>
                  <img src="/icons/elixir.svg" alt="sql icon" className='w-12'/>
                </Box>
              </Flex>
            </Box>

            <Box m="1.25rem">
              <Flex alignItems="center">
                <IoBuildOutline color={useColorModeValue("#414243","#a79f83")} size={30}/>
                <Heading size="lg" ml={1}>Tools</Heading>
              </Flex>
              
              <Flex>
                <Box bg='rgba(255,255,255, 0.5)' w='fit-content' p={4} m={2} color='white' borderRadius={"8px"}>
                  <img src="/icons/figma.svg" alt="java icon" className='w-12'/>
                </Box>
                <Box bg='rgba(152,152,152, 0.5)' w='fit-content' p={4} m={2} color='white' borderRadius={"8px"}>
                  <img src="/icons/github.svg" alt="python icon" className='w-12'/>
                </Box>
              </Flex>
            </Box>
            
            

            

           

            

          </Box>

      
      
    </div>
  )
}

export default Skills