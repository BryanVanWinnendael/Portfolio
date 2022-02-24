import React from 'react'
import {Heading,Box,useColorModeValue } from '@chakra-ui/react'

function Contact() {
  const colorHeader = useColorModeValue('#ffffff40', '#20202380')

  return (
    <div>
     <Box 
      m="1.25rem"
      p = {2}
      bg={colorHeader}
      borderRadius="lg"
      boxShadow='2px 1px 8px 2px rgb(0 0 0 / 10%)'
      >
        <Heading >Contact</Heading>
      </Box>

    </div>
  )
}

export default Contact