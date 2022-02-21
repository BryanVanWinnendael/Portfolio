import React,{useEffect} from 'react'
import { Text,useColorMode,useColorModeValue,Grid, 
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    } 
    from '@chakra-ui/react'
import {HamburgerIcon } from '@chakra-ui/icons'
import ToggleThemeButton from './ToggleThemeButton'

function Navigation() {

    const {colorMode} = useColorMode()
    const navBg = useColorModeValue("#edf2f733","blackAlpha")
    const navText = useColorModeValue("gray.600","whiteAlpha.700")
    const navTitle = useColorModeValue("text.light","text.dark")

    

    useEffect(() => {
        if(colorMode === "light"){
            document.body.classList.remove("dark-theme")
        }
        else{
            document.body.classList.add("dark-theme")
        }
    });
    
    
    
   

    return (
    <Grid templateColumns={{base:'1fr 1fr 0.5fr',sm:'1fr 1fr'}}  position={"sticky"} alignItems={'center'} css={{ backdropFilter: 'blur(10px)' }} background={navBg} zIndex={10} width={"100%"} paddingBottom={"10px"}>
        <div className='flex items-center col-start-1 mr-5 ml-5'>
            <Text color={navTitle} fontSize='2xl' className='mt-5 font-bold text-xl cursor-pointer' >My Portfolio</Text>
        </div>
        
        <ul className='flex justify-center items-center h-full col-start-2' id="nav">
            <li className='mr-5 h-full flex items-center'>
                <a href='#home' className='font-bold '> <Text color={navText} fontSize='l' className='mt-5'>Home</Text></a>
            </li>

            <li className='mr-5 h-full flex items-center'>
                <a href='#competenties' className='font-bold'><Text color={navText} fontSize='l' className='mt-5'>Competenties</Text></a>
            </li>

            <li className='mr-5 h-full flex items-center'>
                <a href='#projects' className='font-bold'><Text color={navText} fontSize='l' className='mt-5'>Projects</Text></a>
            </li>

            <li className='mr-5 h-full flex items-center'>
                <a href='#contact' className='font-bold'><Text color={navText} fontSize='l' className='mt-5'>Contact</Text></a>
            </li>
        </ul>

        <div className='flex justify-end items-center mr-5 mt-5'>
          
            <ToggleThemeButton/>

            <Menu>
                <MenuButton
                    display={{base:'none',sm:''}}
                    marginLeft={"10px"}
                    px={4}
                    py={3}
                    transition='all 0.2s'
                    borderRadius='md'
                    borderWidth='1px'
                    backgroundColor={'gray.600'}
                    _hover={{ bg: 'gray.500' }}
                    _expanded={{ bg: 'gray.500' }}
                    _focus={{ boxShadow: 'outline' }}
                >
                <HamburgerIcon color={"white"}/>
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() =>{window.location.href = "#home"}}>Home</MenuItem>
                    <MenuItem onClick={() =>{window.location.href = "#competenties"}}>Competenties</MenuItem>
                    <MenuItem onClick={() =>{window.location.href = "#projects"}}>Projects</MenuItem>
                    <MenuItem onClick={() =>{window.location.href = "#contact"}}>Contact</MenuItem>

                </MenuList>
            </Menu>
           
        </div>
        
    </Grid>
    )
}

export default Navigation