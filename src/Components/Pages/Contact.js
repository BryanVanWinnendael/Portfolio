import React,{useState,useRef,useEffect} from 'react'
import {Heading,Box,useColorModeValue,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,  
  Input,
} from '@chakra-ui/react'
import {EmailIcon } from '@chakra-ui/icons'

function Contact() {
  const formRef = useRef()
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
    if(isErrorName === '' && isErrorEmail === '' && isErrorText === '') formRef.current.submit()
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

      <form ref={formRef} className='m-5 mb-28' data-netlify="true" name="contact" 
      
      >
        <input type="hidden" name="form-name" value="contact"/>
        <FormControl isInvalid={isErrorName} marginBottom="1em">
          <FormLabel htmlFor='name'>Name</FormLabel>
          <Input
            id='name'
            type='text'
            name='name'
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
            name='email'
            value={inputEmail}
            onChange={handleInputChangeEmail}
          />
          {isErrorEmail && (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={isErrorText}  marginBottom="1em">
          <FormLabel htmlFor='text'>Message</FormLabel>
          <Input
            id='text'
            type='text'
            name='text'
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
          type='button'
        >
          Send
        </Button>
      </form>


    </div>
  )
}

export default Contact