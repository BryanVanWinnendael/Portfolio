import React from 'react'
import { Text ,useColorModeValue,
    Box,  
    Heading
} from '@chakra-ui/react'

function SkillCard(props) {
  return (
    <Box marginBottom={5} backgroundColor={useColorModeValue('#ffffff89', '#20202380')} borderRadius="lg" p="2">
        <Box display="flex" alignItems="center">
            <Heading size='md' fontWeight="bold"  marginRight={2}>{props.titel}</Heading>
            {props.icon}
        </Box>
        <Text color={useColorModeValue("gray","darkGray")}>{props.tekst}</Text>
    </Box>

  )
}

export default SkillCard