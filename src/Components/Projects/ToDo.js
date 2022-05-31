import React from 'react'
import { Heading, Text, Center,
  Image ,
  Badge,
  Stack,
  Link,
  Code,
  Box,  
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

function ToDo() {
  return (
    <div className='m-5 mb-12'>
      <Center marginTop="1em">
        <Heading as='h2' size='2xl'>ToDo.</Heading>
      </Center>

      <Heading as='h3' size='lg' marginTop="1em">Wat is ToDo?</Heading>
      <Text marginTop="1em">Met ToDo kan je taken maken die je moet voltooien en deze bijhouden wanneer deze moeten worden uitgevoerd.</Text>
      <Text>Met ToDo kun je deze taken ook een cattegory geven om ze snel te filteren.</Text>

      <Heading as='h3' size='lg' marginTop="1em">Tools gebruikt</Heading>
      <Text marginTop="1em">ToDo is gemaakt met 
        <Code children='React' colorScheme='blue' marginLeft="5px" marginRight="5px"/>
        en gebruikt 
        <Code children='Firebase' colorScheme='red' marginLeft="5px" marginRight="5px"/>
        als de database.
      </Text>

      <Stack direction='column' marginTop="1em" marginRight="50px">
        <Stack direction='row' alignItems="center">
          <Badge variant='outline' colorScheme='green' maxWidth="fit-content" margin="0" padding="1">
            Website
          </Badge>
          <Link href='https://todopublic.netlify.app/' isExternal>
            https://todopublic.netlify.app/<ExternalLinkIcon mx='2px' />
          </Link>
        </Stack>
        
        <Stack direction='row' alignItems="center" >
          <Badge variant='outline' colorScheme='red' maxWidth="fit-content" marginRight="0" padding="1">
            Code
          </Badge>
          <Link href='https://github.com/BryanVanWinnendael/ToDo.' isExternal maxWidth="100%">
            https://github.com/BryanVanWinnendael/ToDo<ExternalLinkIcon/>
          </Link>
        </Stack>
      </Stack>

     
      <Box boxSize='sm' marginTop="2em" width="100%" marginBottom="200px">
        <Image src='/images/todoProject.jpg' alt='Dan Abramov' maxHeight="500px"/>
      </Box>

 
   
    </div>
  )
}

export default ToDo