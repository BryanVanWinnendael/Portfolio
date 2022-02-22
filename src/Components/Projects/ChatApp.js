import React from 'react'
import { Heading,Text ,Center,Grid,
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

function ChatApp() {
  return (
    <div className='m-5 mb-12'>
      <Grid templateColumns='repeat(3, 1fr)' alignItems="center">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink onClick={() => {window.location.href = "/#projects" }}><Text color={useColorModeValue("purple.600", "blue.400")}>Projects</Text></BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Text fontSize="xl" fontWeight="bold">ChatApp</Text>
          </BreadcrumbItem>
        </Breadcrumb>
      </Grid>
      <Center>
        <Heading as='h2' size='2xl'>ChatApp</Heading>
      </Center>

      <Heading as='h3' size='lg' marginTop="1em">What is ChatApp?</Heading>
      <Text marginTop="1em">ChatApp is social media platform just like Messenger.</Text>

      <Heading as='h3' size='lg' marginTop="1em">Tools used</Heading>
      <Text marginTop="1em">ChatApp is made with 
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
          <Link href='https://clne.netlify.app/' isExternal>
            https://clne.netlify.app/<ExternalLinkIcon mx='2px' />
          </Link>
        </Stack>
        
        <Stack direction='row' alignItems="center">
          <Badge variant='outline' colorScheme='red' maxWidth="fit-content">
            Code
          </Badge>
          <Link href='https://clne.netlify.app/' isExternal>
            https://clne.netlify.app/<ExternalLinkIcon mx='2px' />
          </Link>
        </Stack>
      </Stack>

     
      <Box boxSize='sm' marginTop="2em" width="100%">
        <Image src='/images/chatProject.jpg' alt='Dan Abramov' />
      </Box>

 
   
    </div>
  )
}

export default ChatApp