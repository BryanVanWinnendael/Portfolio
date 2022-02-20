import React from 'react'
import { Grid,Flex,Center,Heading} from '@chakra-ui/react'

function page2() {
  return (
    <div className='h-screen mt-8'>
      <Center>
       
      
        <Flex
        direction={"column"}
        >
          <Heading>Skills</Heading>

          <Grid templateColumns='1fr 1fr 1fr'>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
          </Grid>

          <Grid templateColumns='1fr 1fr 1fr'>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
          </Grid>

        </Flex>
      </Center>
    </div>
  )
}

export default page2