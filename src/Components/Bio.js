import React from 'react'
import { Heading, Text , useColorModeValue, Box, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useNav } from '../Contexts/NavContext'

function Bio() {
    const { setActivePage } = useNav()

    const calculateAge = (dob, dt) => {
        dt = dt || new Date()
        var diff = dt.getTime() - new Date(dob).getTime()
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
    }

    return (
        <Box mt={5} mb={6}>
            <Heading size="md" mb={1} as='u' >Over mijzelf</Heading>
            <Text color={useColorModeValue("gray","darkGray")} display="flex" >Leeftijd: <Text color="#b8af8e" ml={1}>{calculateAge("2002-03-29")}</Text></Text>
            <Text color={useColorModeValue("gray","darkGray")} display="flex">Aantal projecten: <Link onClick={() => setActivePage("projects")} color="#b8af8e" ml={1}>5</Link></Text>
            <Text color={useColorModeValue("gray","darkGray")} display="flex">Aantal skills: <Link onClick={() => setActivePage("skills")} color="#b8af8e" ml={1}>11</Link></Text>
            <Link href='https://youtu.be/Tps_Vmy0Oj4' isExternal>
                Korte introductie <ExternalLinkIcon mx='2px' />
            </Link>
        </Box>
    )
}

export default Bio