import React from 'react'
import { Heading,Text ,Center,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image ,
  Badge,
  Stack,
  Link,
  Code,
  Box,
  useColorModeValue
} from '@chakra-ui/react'
import {ExternalLinkIcon  } from '@chakra-ui/icons'
import ToggleThemeButton from '../Navigation/ToggleThemeButton'

function ToDo() {
  return (
    <div className='m-5 mb-12'>
      
      <Center marginTop="1em">
        <Heading as='h2' size='2xl'>ToDo</Heading>
      </Center>

      <Heading as='h3' size='lg' marginTop="1em">What is ToDo?</Heading>
      <Text marginTop="1em">ToDo lets you create tasks that you need to complete and keep track of them when these are needed to be done.</Text>
      <Text>With ToDo you can also give these tasks a cattegory to filter them quickly.</Text>


      <Heading as='h3' size='lg' marginTop="1em">Tools used</Heading>
      <Text marginTop="1em">ToDo is made with 
        <Code children='React' colorScheme='blue' marginLeft="5px" marginRight="5px"/>
        and uses 
        <Code children='Firebase' colorScheme='red' marginLeft="5px" marginRight="5px"/>
        as a database.
      </Text>

      <Stack direction='column' marginTop="1em">
        <Stack direction='row' alignItems="center">
          <Badge variant='outline' colorScheme='green' maxWidth="fit-content">
            Website
          </Badge>
          <Link href='https://todopublic.netlify.app/' isExternal>
            https://todopublic.netlify.app/<ExternalLinkIcon mx='2px' />
          </Link>
        </Stack>
        
        <Stack direction='row' alignItems="center">
          <Badge variant='outline' colorScheme='red' maxWidth="fit-content">
            Code
          </Badge>
          <Link href='https://github.com/BryanVanWinnendael/ToDo.' isExternal>
            https://github.com/BryanVanWinnendael/ToDo.<ExternalLinkIcon mx='2px' />
          </Link>
        </Stack>
        
      </Stack>

     
      <Box boxSize='sm' marginTop="2em" width="100%">
        <Image src='/images/todoProject.jpg' alt='Dan Abramov' maxHeight="400px"/>
      </Box>

 
   
    </div>
  )
}

export default ToDo