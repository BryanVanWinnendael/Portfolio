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

function Clne() {
  return (
    <div className='m-5 mb-12'>
      <Center marginTop="1em">
        <Heading as='h2' size='2xl'>Clne</Heading>
      </Center>

      <Heading as='h3' size='lg' marginTop="1em">What is Clne?</Heading>
      <Text marginTop="1em">Clne is social media platform just like Instagram.</Text>

      <Heading as='h3' size='lg' marginTop="1em">Tools used</Heading>
      <Text marginTop="1em">Clne is made with 
        <Code children='React' colorScheme='blue' marginLeft="5px" marginRight="5px"/>
        and uses 
        <Code children='Firebase' colorScheme='red' marginLeft="5px" marginRight="5px"/>
        as a database.
      </Text>

      <Stack direction='column' marginTop="1em" marginRight="50px">
        <Stack direction='row' alignItems="center">
          <Badge variant='outline' colorScheme='green' maxWidth="fit-content" margin="0" padding="0">
            Website
          </Badge>
          <Link href='https://clne.netlify.app/' isExternal>
            https://clne.netlify.app/<ExternalLinkIcon mx='2px' />
          </Link>
        </Stack>
        
        <Stack direction='row' alignItems="center" >
          <Badge variant='outline' colorScheme='red' maxWidth="fit-content" marginRight="0" padding="0">
            Code
          </Badge>
          <Link href='https://github.com/BryanVanWinnendael/Clone' isExternal maxWidth="100%">
            https://github.com/BryanVanWinnendael/Clone<ExternalLinkIcon/>
          </Link>
        </Stack>
      </Stack>

     
      <Box boxSize='sm' marginTop="2em" width="100%">
        <Image src='/images/clneProject.png' alt='Dan Abramov' />
      </Box>

 
   
    </div>
  )
}

export default Clne