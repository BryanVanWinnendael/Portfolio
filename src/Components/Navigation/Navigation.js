import React,{useEffect} from 'react'
import { Text,IconButton,useColorMode,useColorModeValue,Grid } from '@chakra-ui/react'
import { MoonIcon,SunIcon } from '@chakra-ui/icons'

function Navigation() {

    const {colorMode,toggleColorMode} = useColorMode()
    const navBg = useColorModeValue("white","gray.800")
    const navText = useColorModeValue("text.light","text.dark")
    const navIconColor = useColorModeValue("gray.400","gray.600")


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
        // document.getElementById("fp-nav ").style.backgroundColor = "white"
        if(colorMode === "light"){
            document.body.classList.add("dark-theme")
        }
        else{
            document.body.classList.remove("dark-theme")
        }
    }
    
    // const navIcon = 
    // const clasNav = "w-full h-14 fixed z-10 text-[#26282b] grid grid-cols-3 bg-[" + navBg + "]"

    return (
    <Grid templateColumns='1fr 1fr 1fr' background={navBg} position="fixed" zIndex={10} width={"100%"} paddingBottom={"10px"}>
        <div className='flex items-center col-start-1 ml-5'>
            <p className='font-bold text-xl cursor-pointer' onClick={() =>{window.location.href = "#first"}}><Text color={navText} fontSize='2xl' className='mt-5'>My Portfolio</Text></p>
        </div>
        
        <ul className='flex justify-center items-center h-full col-start-2 text-l'>
            <li className='mr-12'>
                <a href='#first' className='font-bold '> <Text color={navText} fontSize='xl' className='mt-5'>Home</Text></a>
            </li>

            <li className='mr-12'>
                <a href='#second' className='font-bold'><Text color={navText} fontSize='xl' className='mt-5'>Home</Text></a>
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
            icon={colorMode === 'light' ? <MoonIcon/> : <SunIcon/> }
            onClick={() => {changeTheme()}}
            />
        </div>
        
    </Grid>
    )
}

export default Navigation