import React, { useEffect, useState,useRef  } from 'react'
import { Box, ListItem, UnorderedList, Text, Heading, Icon   } from '@chakra-ui/react'
import {Howl,Howler} from 'howler'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { IoMdRefresh } from "react-icons/io"
import { useNav } from '../Contexts/NavContext'

function SecretPage() {
    const { setActivePage } = useNav()
    const mounted = useRef(false)
    const [gameStarted, setGameStarted] = useState(false)
    const [alive, setAlive] = useState(true)


    useEffect(() => {
        mounted.current = true;
        document.addEventListener("keydown",(e) => {
            jump()
        })
        if( mounted.current){
            setInterval(isAlive,10)
        }
        return () => {
            mounted.current = false
        };
        return
    }, [])

    const closeAction = () => {
        Howler.stop()
        const sound = new Howl({
            src: "/click.mp3",
            volume: 0.3,
        })        
        sound.play()
        mounted.current = false
        setActivePage("home")
    }

    const jump = () => {
        if(!gameStarted){
            mounted.current = true
            setAlive(true)
            setGameStarted(true)
            document.getElementById("cactus").style.animation = "movecactus 1s infinite linear"
        }
        const dino = document.getElementById("dino")
        if(!dino.classList.contains("jump") ){
            dino.classList.add("jump")
            setTimeout(() => {
                dino.classList.remove("jump")
            }, 300)
        }
    }

    const isAlive = () => {
        console.log(alive)
        if( mounted.current){
            const dino = document.getElementById("dino")
            const cactus = document.getElementById("cactus")
            if(dino && cactus){
                const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
                const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
                if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 238){
                    setAlive(false)
                    document.getElementById("cactus").style.animation = ""
                }
            }
        }
    }

    const Menu = () => {
        return (
            <Box color="black" display="flex" flexDirection="column" alignItems="center" h="100%">
                <Heading>Start game</Heading>
                <Text>Click space to start the game</Text>
            </Box>
        )
    }

    const DeadMenu = () => {
        return (
            <Box color="black" display="flex" flexDirection="column" alignItems="center" h="100%">
                <Heading>You died...</Heading>
                <Text>Click space to start over</Text>
            </Box>
        )
    }

    const Bar = () => {
        return(
            <Box w="600px" display="flex" alignItems="left" mt="5" >
                <ChevronLeftIcon w="25px" h="25px" color="gray"/>
                <ChevronRightIcon w="25px" h="25px" color="gray"/>
                <Icon color="black" as={IoMdRefresh} w="25px" h="25px" cursor="pointer" onClick={closeAction}/>
                <Text color="black" ml="2" fontSize="lg">https://portfoliobryan.netlify.app/</Text>
            </Box>
        )
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center" backgroundColor="white">
            <Bar/>
            <Box w="600px" h="300px" border="1px solid black">
                    <Box>
                        <Box id='dino' w="50px" h="50px" backgroundImage="/images/trex.png" backgroundSize="50px 50px"  position="relative" top="248px"></Box>
                        <Box id="cactus" w="20px" h="40px" backgroundImage="/images/cactus.png" backgroundSize="20px 40px" position="relative" left="575px" top="208px"></Box>
                    </Box>
                {!gameStarted && alive &&(
                    <Menu></Menu>
                )}

                {!alive && (
                    <DeadMenu/>
                )}
            </Box>
            <Box color="black" w="600px" display="flex" flexDirection="column" alignItems="left">
                <Text fontWeight="bold" fontSize="2xl" mb="5" mt="5">No internet</Text>
                <Text>Try:</Text>
                <UnorderedList pl="20px">
                    <ListItem >Reloading the browser</ListItem>
                </UnorderedList>
            </Box>
        </Box>
    )
}

export default SecretPage