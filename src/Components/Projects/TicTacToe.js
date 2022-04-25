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

function TicTacToe() {
  return (
    <div className='m-5 mb-12'>
      <Center marginTop="1em">
        <Heading as='h2' size='2xl'>TicTacToe</Heading>
      </Center>

      <Heading as='h3' size='lg' marginTop="1em">What is TicTacToe?</Heading>
      <Text marginTop="1em">TicTacToe is a online tic tac toe game that you can play against a friend.</Text>

      <Heading as='h3' size='lg' marginTop="1em">Tools used</Heading>
      <Text marginTop="1em">For the frontend I used
        <Code children='React' colorScheme='blue' marginLeft="5px" marginRight="5px"/>
        and 
        <Code children='Chakra UI' colorScheme='red' marginLeft="5px"/>. 
        For the backend I used
        <Code children='Express' colorScheme='green' marginLeft="5px" marginRight="5px"/>
        and 
        <Code children='Socket.IO' colorScheme='gray' marginLeft="5px"/>
        .
        
      </Text>

      <Stack direction='column' marginTop="1em" marginRight="50px">
        <Stack direction='row' alignItems="center">
          <Badge variant='outline' colorScheme='green' maxWidth="fit-content" margin="0" padding="1">
            Website
          </Badge>
          <Link href='https://tictactoeonlinegame.netlify.app/' isExternal>
          https://tictactoeonlinegame.netlify.app/<ExternalLinkIcon mx='2px' />
          </Link>
        </Stack>
        
        <Stack direction='row' alignItems="center" >
          <Badge variant='outline' colorScheme='red' maxWidth="fit-content" marginRight="0" padding="1">
            Code
          </Badge>
          <Link href='https://github.com/BryanVanWinnendael/TicTacToe' isExternal maxWidth="100%">
          https://github.com/BryanVanWinnendael/TicTacToe<ExternalLinkIcon/>
          </Link>
        </Stack>
      </Stack>

     
      <Box boxSize='sm' marginTop="2em" width="100%">
        <Image src='/images/tictactoe.jpg' alt='Dan Abramov' />
      </Box>

 
   
    </div>
  )
}

export default TicTacToe