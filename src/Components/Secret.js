import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Secret = ({ children, delay = 0 }) => (
  <StyledDiv
    initial={{  h: 0,opacity: 0, position: 'absolute', bottom: 0, left: 0 }}
    animate={{   h: 100, opacity: 1,position: 'absolute', top: 0, right: 0  }}
    transition={{ duration: 0.6, delay }}
    position="absolute"
    backgroundColor="white"
  >
    {children}
  </StyledDiv>
)

export default Secret