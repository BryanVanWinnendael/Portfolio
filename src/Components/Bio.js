import React from 'react'
import { Heading,Text ,useColorModeValue,Box} from '@chakra-ui/react'

function Bio() {
    const calculateAge = (dob, dt) => {
        dt = dt || new Date();
        var diff = dt.getTime() - new Date(dob).getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      }

    return (
        <Box mt={5} mb={5} >
            <Heading size="md" mb={1}>Over mijzelf</Heading>
            <Text>Leeftijd: {calculateAge("2002-03-29")}</Text>
            <Text>Aantal projecten: 6</Text>
        </Box>
    )
}

export default Bio