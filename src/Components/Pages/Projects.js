import React,{useState} from 'react'
import { Heading ,Box,Grid, GridItem,Tooltip,useMediaQuery,
  Text,
  useColorModeValue,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/react'
import MakeProject from '../Projects/MakeProject'
const NavProject = ({active,setActive}) => (
  <Breadcrumb width="full" display="flex" alignItems="center" marginLeft="1.25rem">
    <BreadcrumbItem >
      <BreadcrumbLink onClick={() => {setActive() }}><Text color={useColorModeValue("purple.600", "blue.400")}>Projects</Text></BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <Text fontSize="xl" fontWeight="bold">{active}</Text>
    </BreadcrumbItem>
  </Breadcrumb>
)



function Projects() {
  const [isLargerThan690] = useMediaQuery('(max-width: 690px)')
  const [active,setActive] = useState()
  const colorHeader = useColorModeValue('#ffffff40', '#20202380')

  return (
    <div className='h-screen'>
      {!active && (
        <Box 
        m="1.25rem"
        p = {2}
        boxShadow='2px 1px 8px 2px rgb(0 0 0 / 10%)'
        bg={colorHeader}
        borderRadius="lg"
        >
          <Heading >Project</Heading>
        </Box>
      )}

      {active && (
       <NavProject active={active} setActive={setActive}/>
      )}

      
      <div className='overflow-hidden m-5'>
        {active && (
          <MakeProject active={active}/>
        )}
        <Grid
          display={ active? "none":"grid"}
          marginTop='25px'
          h='500px'
          templateRows='repeat(3, 1fr)'
          templateColumns= {isLargerThan690? 'repeat(3, 1fr)':'repeat(5, 1fr)'}
          gap={4}
          position='relative'
        > 
          <Tooltip label="ToDo." aria-label='A tooltip'>
            <GridItem onClick={() => {setActive("todo")}} rowSpan={2} colSpan={1}  bg={useColorModeValue('#ffffff40', '#20202380')}  cursor='pointer'  transitionDuration='0.5s' _hover={{transform:'scale(1.1)'}} boxShadow='2px 1px 8px 2px rgb(0 0 0 / 10%)' borderRadius='5px'  backgroundImage='/images/todoProject.jpg' backgroundSize='cover' backgroundRepeat='no-repeat' backgroundPosition="center"/>
          </Tooltip>

          <Tooltip label="Clne" aria-label='A tooltip'>
            <GridItem onClick={() => {setActive("clne") }} colSpan={2} cursor='pointer' bg={useColorModeValue('#ffffff40', '#20202380')} transitionDuration='0.5s' _hover={{transform:'scale(1.1)'}} boxShadow='2px 1px 8px 2px rgb(0 0 0 / 10%)' borderRadius='5px'  backgroundImage='/images/clneProject.png' backgroundSize='cover' backgroundRepeat='no-repeat'/>
          </Tooltip>

          <Tooltip label="ChatApp" aria-label='A tooltip'>
            <GridItem onClick={() => {setActive("chatapp")}} colSpan={2} bg={useColorModeValue('#ffffff40', '#20202380')}  cursor='pointer' transitionDuration='0.5s' _hover={{transform:'scale(1.1)'}} boxShadow='2px 1px 8px 2px rgb(0 0 0 / 10%)' borderRadius='5px' backgroundImage='/images/chatProject.jpg' backgroundSize='cover' backgroundRepeat='no-repeat' backgroundPosition="center"/>
          </Tooltip>

          <Tooltip label="" aria-label='A tooltip'>
            <GridItem colSpan={4} bg={useColorModeValue('#ffffff40', '#20202380')}  cursor='pointer' css={{ backdropFilter: 'blur(10px)' }} transitionDuration='0.5s' _hover={{transform:'scale(1.1)'}} boxShadow='2px 1px 8px 2px rgb(0 0 0 / 10%)' borderRadius='5px' display="flex" justifyContent="center" alignItems="center">
              <Text fontSize='lg' className='mt-5'>Check out more...</Text>
            </GridItem>
          </Tooltip>

          

          {/* <Tooltip label="" aria-label='A tooltip'>
            <GridItem colSpan={2} bg={useColorModeValue('#ffffff40', '#20202380')}  cursor='pointer' css={{ backdropFilter: 'blur(10px)' }} />
          </Tooltip>

          <Tooltip label="" aria-label='A tooltip'>
            <GridItem colSpan={3} bg={useColorModeValue('#ffffff40', '#20202380')}  cursor='pointer' css={{ backdropFilter: 'blur(10px)' }} />
          </Tooltip> */}

        </Grid>
      </div>


    </div>
  )
}

export default Projects