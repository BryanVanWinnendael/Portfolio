import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()
  const navIconColor = useColorModeValue("purple.400","blue.600")

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
            size='lg'
            bg={navIconColor}
            aria-label="Toggle theme"
            icon={useColorModeValue(<MoonIcon color={"white"}/>, <SunIcon />)}
            onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton

  {/* <IconButton
            bg={navIconColor}
            aria-label='Call Segun'
            size='lg'
            icon={colorMode === 'light' ? <MoonIcon color={"white"}/> : <SunIcon/> }
            onClick={() => {changeTheme()}}
            /> */}