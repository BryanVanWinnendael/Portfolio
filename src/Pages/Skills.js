import React from 'react'
import { Heading, Box, useColorModeValue, Flex, Text, Grid } from '@chakra-ui/react'
import { RiBracesLine } from "react-icons/ri";
import { IoBuildOutline } from "react-icons/io5";


function Skills() {
  const colorHeader = useColorModeValue('#ffffff89', '#20202380')

  return (
    <Box className='h-screen' mb={12}>
      <Box 
      m="1.25rem"
      p = {2}
      bg={colorHeader}
      borderRadius="lg"
      >
        <Heading >Skills</Heading>
      </Box>

      <Flex m="1.25rem" alignItems="center">
        <RiBracesLine color={useColorModeValue("#414243","#a79f83")} size={30}/>
        <Heading size="lg" ml={1}>Talen</Heading>
      </Flex>
      
      <Grid m="1.25rem" templateColumns='repeat(2, 1fr)' templateRows='repeat(auto, 1fr)' gap={3}>

        <Flex borderRadius="lg" alignItems="center" bg={colorHeader} height="fit-content">
          <Box bg='rgba(230, 80, 10, 0.5)' w='fit-content' p={4} m={2} color='white' borderRadius={"8px"}>
              <img src="/icons/html.svg" alt="html icon" className='w-12'/>
          </Box>
          <Flex justifyContent="center" width="100%">
            <Text>HTML</Text>
          </Flex>
        </Flex>

        <Flex  borderRadius="lg" alignItems="center" bg={colorHeader} height="fit-content">
          <Box bg='rgba(3, 155, 229, 0.5)' w='fit-content' p={4} m={2} color='white' borderRadius={"8px"}>
            <img src="/icons/css.svg" alt="css icon" className='w-12'/>
          </Box>
          <Flex justifyContent="center" width="100%">
            <Text>CSS </Text>
          </Flex>
        </Flex>

        <Flex  borderRadius="lg" alignItems="center" bg={colorHeader} height="fit-content">
          <Box bg='rgba(255, 214, 0, 0.5)' w='fit-content' p={4} m={2} color='white' borderRadius={"8px"}>
            <img src="/icons/js.svg" alt="js icon" className='w-12'/>
          </Box>
          <Flex justifyContent="center" width="100%">
            <Text>JavaScript </Text>
          </Flex>
        </Flex>

        <Flex  borderRadius="lg" alignItems="center" bg={colorHeader} height="fit-content">
          <Box bg='rgba(21, 101, 192, 0.5)' w='fit-content' p={4} m={2} color='white' borderRadius={"8px"}>
            <img src="/icons/java.svg" alt="java icon" className='w-12'/>
          </Box>
          <Flex justifyContent="center" width="100%">
            <Text Text>Java </Text>
          </Flex>
        </Flex>

        <Flex  borderRadius="lg" alignItems="center" bg={colorHeader} height="fit-content">
          <Box bg='rgba(22, 86, 146, 0.5)' w='fit-content' p={4} m={2} color='white' borderRadius={"8px"}>
            <img src="/icons/python.svg" alt="python icon" className='w-12'/>
          </Box>
          <Flex justifyContent="center" width="100%">
            <Text Text>Python </Text>
          </Flex>
        </Flex>

        <Flex  borderRadius="lg" alignItems="center" bg={colorHeader} height="fit-content">
          <Box bg='rgba(2, 119, 189, 0.5)' w='fit-content' p={4} m={2} color='white' borderRadius={"8px"}>
            <img src="/icons/sql.svg" alt="sql icon" className='w-12'/>
          </Box>
          <Flex justifyContent="center" width="100%">
            <Text>PostgreSQL </Text>
          </Flex>
        </Flex>

        <Flex  borderRadius="lg" alignItems="center" bg={colorHeader} height="fit-content">
          <Box bg='rgba(152,160,171, 0.5)' w='fit-content' p={4} m={2} color='white' borderRadius={"8px"}>
            <img src="/icons/c.svg" alt="java icon" className='w-12'/>
          </Box>
          <Flex justifyContent="center" width="100%">
            <Text>C# </Text>
          </Flex>
        </Flex>

        <Flex  borderRadius="lg" alignItems="center" bg={colorHeader} height="fit-content">
          <Box bg='rgba(200,149,232, 0.5)' w='fit-content' p={4} m={2} color='white' borderRadius={"8px"}>
            <img src="/icons/cpp.svg" alt="python icon" className='w-12'/>
          </Box>
          <Flex justifyContent="center" width="100%">
            <Text>C++ </Text>
          </Flex>
        </Flex>

        <Flex  borderRadius="lg" alignItems="center" bg={colorHeader} height="fit-content">
          <Box bg='rgba(143,106,166, 0.5)' w='fit-content' p={4} m={2} color='white' borderRadius={"8px"}>
            <img src="/icons/elixir.svg" alt="sql icon" className='w-12'/>
          </Box>
          <Flex justifyContent="center" width="100%">
            <Text>Elixir </Text>
          </Flex>
        </Flex>
      </Grid>

      <Box>
        <Flex m="1.25rem" alignItems="center">
          <IoBuildOutline color={useColorModeValue("#414243","#a79f83")} size={30}/>
          <Heading size="lg" ml={1}>Tools</Heading>
        </Flex>

        <Grid m="1.25rem" templateColumns='repeat(2, 1fr)' templateRows='repeat(auto, 1fr)' gap={3}>

          <Flex  borderRadius="lg" alignItems="center" bg={colorHeader} height="fit-content">
            <Box bg='rgba(255,255,255, 0.5)' w='fit-content' p={4} m={2} color='white' borderRadius={"8px"}>
              <img src="/icons/figma.svg" alt="java icon" className='w-12'/>
            </Box>
            <Flex justifyContent="center" width="100%">
              <Text>Figma </Text>
            </Flex>
          </Flex>

          <Flex borderRadius="lg" alignItems="center" bg={colorHeader} height="fit-content">
            <Box bg='rgba(245, 122, 51, 0.5)' w='fit-content' p={4} m={2} color='white' borderRadius={"8px"}>
              <img src="/icons/github.svg" alt="python icon" className='w-12'/>
            </Box>
            <Flex justifyContent="center" width="100%">
              <Text>Github </Text>
            </Flex>
          </Flex>
          
          
        </Grid>

      </Box>
    </Box>
  )
}

export default Skills