import React,{useEffect} from 'react'
import { Text,IconButton,useColorMode,useColorModeValue,Grid, 
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    } 
    from '@chakra-ui/react'
import { MoonIcon,SunIcon,HamburgerIcon } from '@chakra-ui/icons'

function Navigation() {

    const {colorMode,toggleColorMode} = useColorMode()
    const navBg = useColorModeValue("white","gray.900")
    const navText = useColorModeValue("text.light","text.dark")
    const navIconColor = useColorModeValue("blue.400","blue.600")

    useEffect(() => {
        if(colorMode === "light"){
            document.body.classList.remove("dark-theme")
        }
        else{
            document.body.classList.add("dark-theme")
        }
    });
    
    function changeTheme(){
        toggleColorMode()
        if(colorMode === "light"){
            document.body.classList.add("dark-theme")
        }
        else{
            document.body.classList.remove("dark-theme")
        }
    }
    
   

    return (
    <Grid templateColumns={{base:'1fr 1fr 1fr',sm:'1fr 1fr'}} position={"sticky"} background={navBg} zIndex={10} width={"100%"} paddingBottom={"10px"}>
        <div className='flex items-center col-start-1 ml-5'>
            <p className='font-bold text-xl cursor-pointer' onClick={() =>{window.location.href = "#home"}}><Text color={navText} fontSize='2xl' className='mt-5'>My Portfolio</Text></p>
        </div>
        
        <ul className='flex justify-center items-center h-full col-start-2 text-l' id="nav">
            <li className='mr-12'>
                <a href='#home' className='font-bold '> <Text color={navText} fontSize='xl' className='mt-5'>Home</Text></a>
            </li>

            <li className='mr-12'>
                <a href='#skills' className='font-bold'><Text color={navText} fontSize='xl' className='mt-5'>Skills</Text></a>
            </li>

            <li className='mr-12'>
                <a href='#third' className='font-bold'><Text color={navText} fontSize='xl' className='mt-5'>Home</Text></a>
            </li>
        </ul>

        <div className='flex justify-end items-center mr-5 mt-5'>
            <IconButton
            bg={navIconColor}
            aria-label='Call Segun'
            size='lg'
            icon={colorMode === 'light' ? <MoonIcon color={"white"}/> : <SunIcon/> }
            onClick={() => {changeTheme()}}
            />

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
                    <MenuItem onClick={() =>{window.location.href = "#skills"}}>Skills</MenuItem>
                    <MenuItem onClick={() =>{window.location.href = "#third"}}>test</MenuItem>
                </MenuList>
            </Menu>

            {/* <IconButton
           display={{base:'none',sm:''}}
            marginRight={"10px"}
            bg={navIconColor}
            aria-label='Call Segun'
            size='lg'
            icon={<HamburgerIcon/> }
            onClick={() => {changeTheme()}}
            /> */}

           
        </div>
        
    </Grid>
    )
}

export default Navigation