import React from 'react'
import { Heading ,Center,Grid, GridItem, useColorModeValue,Tooltip,useMediaQuery   } from '@chakra-ui/react'


function Page3() {
  const [isLargerThan690] = useMediaQuery('(max-width: 690px)')

  return (
    <div className='h-screen'>
      <Center>
        <Heading>Projects</Heading>
      </Center>
      <div className='overflow-x-hidden overflow-y-visible m-5'>
        <Grid
          marginTop='25px'
          h='400px'
          templateRows='repeat(3, 1fr)'
          templateColumns= {isLargerThan690? 'repeat(3, 1fr)':'repeat(5, 1fr)'}
          gap={4}
          position='relative'
        > 
          <Tooltip label="ToDo." aria-label='A tooltip'>
            <GridItem onClick={() => {window.location.href = "/todo" }} rowSpan={2} colSpan={1}  bg={useColorModeValue('#ffffff40', '#20202380')}  cursor='pointer' css={{ backdropFilter: 'blur(10px)' }} transitionDuration='0.5s' _hover={{transform:'scale(1.1)'}} boxShadow='2px 1px 8px 2px rgb(0 0 0 / 10%)' borderRadius='5px'  backgroundImage='/images/todoProject.jpg' backgroundSize='cover' backgroundRepeat='no-repeat' backgroundPosition="center"/>
          </Tooltip>

          <Tooltip label="Clne" aria-label='A tooltip'>
            <GridItem onClick={() => {window.location.href = "/clne" }} colSpan={2} cursor='pointer' bg={useColorModeValue('#ffffff40', '#20202380')} css={{ backdropFilter: 'blur(10px)' }} transitionDuration='0.5s' _hover={{transform:'scale(1.1)'}} boxShadow='2px 1px 8px 2px rgb(0 0 0 / 10%)' borderRadius='5px'  backgroundImage='/images/clneProject.png' backgroundSize='cover' backgroundRepeat='no-repeat'/>
          </Tooltip>

          <Tooltip label="ChatApp" aria-label='A tooltip'>
            <GridItem onClick={() => {window.location.href = "/chatapp" }} colSpan={2} bg={useColorModeValue('#ffffff40', '#20202380')}  cursor='pointer' css={{ backdropFilter: 'blur(10px)' }} transitionDuration='0.5s' _hover={{transform:'scale(1.1)'}} boxShadow='2px 1px 8px 2px rgb(0 0 0 / 10%)' borderRadius='5px' backgroundImage='/images/chatProject.jpg' backgroundSize='cover' backgroundRepeat='no-repeat' backgroundPosition="center"/>
          </Tooltip>

          <Tooltip label="" aria-label='A tooltip'>
            <GridItem colSpan={4} bg={useColorModeValue('#ffffff40', '#20202380')}  cursor='pointer' css={{ backdropFilter: 'blur(10px)' }} />
          </Tooltip>

          <Tooltip label="" aria-label='A tooltip'>
            <GridItem colSpan={2} bg={useColorModeValue('#ffffff40', '#20202380')}  cursor='pointer' css={{ backdropFilter: 'blur(10px)' }} />
          </Tooltip>

          <Tooltip label="" aria-label='A tooltip'>
            <GridItem colSpan={3} bg={useColorModeValue('#ffffff40', '#20202380')}  cursor='pointer' css={{ backdropFilter: 'blur(10px)' }} />
          </Tooltip>

        </Grid>
      </div>


    </div>
  )
}

export default Page3