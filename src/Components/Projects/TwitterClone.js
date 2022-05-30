import React from 'react'
import { Heading,Text ,Center,
  Image ,
  Badge,
  Stack,
  Link,
  Code,
  Box,  
} from '@chakra-ui/react'
import {ExternalLinkIcon  } from '@chakra-ui/icons'

function ToDo() {
  return (
    <div className='m-5 mb-12'>
      <Center marginTop="1em">
        <Heading as='h2' size='2xl'>TwitterClone.</Heading>
      </Center>

      <Heading as='h3' size='lg' marginTop="1em">Wat is TwitterClone?</Heading>
      <Text marginTop="1em">TwitterClone is net als twitter een social media platform.</Text>

      <Heading as='h3' size='lg' marginTop="1em">Tools gebruikt</Heading>
      <Text marginTop="1em">TwitterClone is gemaakt met 
        <Code children='Phoenix' colorScheme='orange' marginLeft="5px" marginRight="5px"/>
        en gebruikt 
        <Code children='Mysql' colorScheme='blue' marginLeft="5px" marginRight="5px"/>
        als de database.
      </Text>

      <Stack direction='column' marginTop="1em" marginRight="50px">
        
        <Stack direction='row' alignItems="center" >
          <Badge variant='outline' colorScheme='red' maxWidth="fit-content" marginRight="0" padding="1">
            Code
          </Badge>
          <Link href='https://github.com/BryanVanWinnendael/TwitterClone' isExternal maxWidth="100%">
          https://github.com/BryanVanWinnendael/TwitterClone<ExternalLinkIcon/>
          </Link>
        </Stack>
      </Stack>

     
      <Box boxSize='sm' marginTop="2em" width="100%" marginBottom="200px">
        <Image src='/images/twitter.jpg' alt='Dan Abramov' maxHeight="500px"/>
      </Box>

 
   
    </div>
  )
}

export default ToDo