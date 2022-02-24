import React,{useState} from 'react'
import {Heading,Box,useColorModeValue,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button, 
  ButtonGroup , 
  Input,
} from '@chakra-ui/react'
import {EmailIcon } from '@chakra-ui/icons'

function Contact() {
  const buttonIconColor = useColorModeValue("purple.400","blue.600")
  const colorHeader = useColorModeValue('#ffffff40', '#20202380')
  const [inputName, setInputName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputText, setInputText] = useState('')

  const [isErrorName,setIsErrorName] = useState()
  const [isErrorEmail,setIsErrorEmail] = useState()
  const [isErrorText,setIsErrorText] = useState()


  const handleInputChangeName = (e) => setInputName(e.target.value)
  const handleInputChangeEmail = (e) => setInputEmail(e.target.value)
  const handleInputChangeText = (e) => setInputText(e.target.value)

  function submitMail(){

    setIsErrorName(inputName === ''?'error':'')
    setIsErrorEmail(inputEmail === ''?'error':'')
    setIsErrorText(inputText === ''?'error':'')
  }
  
  return (
    <div>
     <Box 
      m="1.25rem"
      p = {2}
      bg={colorHeader}
      borderRadius="lg"
      >
        <Heading >Contact</Heading>
      </Box>

      <Box margin="1.25rem" marginBottom="100px">
        <FormControl isInvalid={isErrorName} marginBottom="1em">
          <FormLabel htmlFor='email'>Name</FormLabel>
          <Input
            id='name'
            type='text'
            value={inputName}
            onChange={handleInputChangeName}
          />
          {isErrorName && (
            <FormErrorMessage>Name is required.</FormErrorMessage>
          )}
          </FormControl>

          <FormControl isInvalid={isErrorEmail}  marginBottom="1em">
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input
              id='email'
              type='email'
              value={inputEmail}
              onChange={handleInputChangeEmail}
            />
            {isErrorEmail && (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={isErrorText}  marginBottom="1em">
            <FormLabel htmlFor='email'>Message</FormLabel>
            <Input
              id='text'
              type='text'
              value={inputText}
              onChange={handleInputChangeText}
              height="200px"
            />
            {isErrorText && (
              <FormErrorMessage>Message is required.</FormErrorMessage>
            )}
          </FormControl>


           <Button onClick={() => {submitMail()}}  
              _hover={{
                  background: useColorModeValue("purple.300", "blue.400")
              }} 
              leftIcon={<EmailIcon />} 
              color="white" 
              background={buttonIconColor} 
              variant='solid'
            >
              Send
          </Button>
      </Box>


    </div>
  )
}

export default Contact