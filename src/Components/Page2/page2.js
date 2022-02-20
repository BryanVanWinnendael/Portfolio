import React from 'react'
import { Grid,Center,Heading,Box } from '@chakra-ui/react'



function page2() {
  return (
    <div className='h-screen mt-2'>
    
          <Center marginBottom={"20px"}>
            <Heading>Skills</Heading>
          </Center>

          <Center>
            <Grid templateColumns='1fr 1fr 1fr' gap={6}>
              <Box bg='rgba(230, 80, 10, 0.5)' w='fit-content' p={4} color='white' borderRadius={"8px"}>
                <img src="/icons/html.svg" alt="html icon" className='w-12'/>
              </Box>
              <Box bg='rgba(3, 155, 229, 0.5)' w='fit-content' p={4} color='white' borderRadius={"8px"}>
                <img src="/icons/css.svg" alt="css icon" className='w-12'/>
              </Box>
              <Box bg='rgba(255, 214, 0, 0.5)' w='fit-content' p={4} color='white' borderRadius={"8px"}>
                <img src="/icons/js.svg" alt="js icon" className='w-12'/>
              </Box>
            </Grid>
          </Center>

          <Center marginTop={"20px"}>
            <Grid templateColumns='1fr 1fr 1fr' gap={6}>
              <Box bg='rgba(21, 101, 192, 0.5)' w='fit-content' p={4} color='white' borderRadius={"8px"}>
                <img src="/icons/java.svg" alt="java icon" className='w-12'/>
              </Box>
              <Box bg='rgba(22, 86, 146, 0.5)' w='fit-content' p={4} color='white' borderRadius={"8px"}>
                <img src="/icons/python.svg" alt="python icon" className='w-12'/>
              </Box>
              <Box bg='rgba(2, 119, 189, 0.5)' w='fit-content' p={4} color='white' borderRadius={"8px"}>
                <img src="/icons/sql.svg" alt="sql icon" className='w-12'/>
              </Box>
            </Grid>
          </Center>

      
      
    </div>
  )
}

export default page2