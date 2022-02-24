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

function Navigation(props) {

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

    function handleChange(param){
        console.log(param)
        props.setActive(param)
        // setActive(param)
    }
    
    
    
   

    return (
    <Grid templateColumns={{base:'1fr 1fr 0.5fr',sm:'1fr 1fr'}}  position={"fixed"} alignItems={'center'} css={{ backdropFilter: 'blur(10px)' }} background={navBg} zIndex={10} width={"100%"} paddingBottom={"10px"}>
        <div className='flex items-center col-start-1 mr-5 ml-5'>
            <Text onClick={() => {handleChange("home")}} color={navTitle} fontSize='2xl' className='mt-5 font-bold text-xl cursor-pointer'>My Portfolio</Text>
        </div>
        
        <ul className='flex justify-center items-center h-full col-start-2' id="nav">
            <li className='mr-5 h-full flex items-center'>
               <Text cursor="pointer" onClick={() => {handleChange("home")}} color={navText} fontSize='l' className='mt-5'>Home</Text>
            </li>

            <li className='mr-5 h-full flex items-center'>
                <Text cursor="pointer" onClick={() => {handleChange("skills")}} color={navText} fontSize='l' className='mt-5'>Competenties</Text>
            </li>

            <li className='mr-5 h-full flex items-center'>
                <Text cursor="pointer" onClick={() => {handleChange("projects")}} color={navText} fontSize='l' className='mt-5'>Projects</Text>
            </li>

            <li className='mr-5 h-full flex items-center'>
                <Text cursor="pointer" onClick={() => {handleChange("contact")}} color={navText} fontSize='l' className='mt-5'>Contact</Text>
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
                    <MenuItem onClick={() => {handleChange("home")}}>Home</MenuItem>
                    <MenuItem onClick={() => {handleChange("skills")}}>Competenties</MenuItem>
                    <MenuItem onClick={() => {handleChange("projects")}}>Projects</MenuItem>
                    <MenuItem onClick={() => {handleChange("contact")}}>Contact</MenuItem>

                </MenuList>
            </Menu>
           
        </div>
        
    </Grid>
    )
}

export default Navigation