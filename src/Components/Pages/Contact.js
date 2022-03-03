import React,{useState,useRef} from 'react'
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

  const nameRef = useRef()
  const emailRef = useRef()
  const textRef = useRef()

  const buttonIconColor = useColorModeValue("purple.400","blue.600")
  const colorHeader = useColorModeValue('#ffffff40', '#20202380')
  const [inputName, setInputName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputText, setInputText] = useState('')
  const [buttonActive, setButtonActive] = useState(false)


  const [isErrorName,setIsErrorName] = useState()
  const [isErrorEmail,setIsErrorEmail] = useState()
  const [isErrorText,setIsErrorText] = useState()


  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) return (true)
    return (false)
  }

  function checkFilledIn(){
    if(nameRef.current.value === "" ) setIsErrorName(true)
    else setIsErrorName(false)

    if(emailRef.current.value === "" ) setIsErrorEmail(true)
    else setIsErrorEmail(false)

    if(textRef.current.value === "" ) setIsErrorText(true)
    else setIsErrorText(false)


    if(nameRef.current.value !== "" && emailRef.current.value !== "" && textRef.current.value !== "" && ValidateEmail(emailRef.current.value)) setButtonActive(true)
    else setButtonActive(false)
  }

  const handleInputChangeName = (e) => {
    setInputName(e.target.value)
  }
  const handleInputChangeEmail = (e) => {
    setInputEmail(e.target.value)

  }
  const handleInputChangeText = (e) => {
    setInputText(e.target.value)
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
      method="POST"
      onChange={() => { checkFilledIn()}}
      noValidate
      >
        <input type="hidden" name="form-name" value="contact"/>
        <FormControl isInvalid={isErrorName} marginBottom="1em">
          <FormLabel htmlFor='name'>Name</FormLabel>
          <Input
            ref={nameRef}
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
            ref={emailRef}
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
            ref={textRef}
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


        <Button  
          _hover={{
              background: useColorModeValue("purple.300", "blue.400")
          }} 
          leftIcon={<EmailIcon />} 
          color="white" 
          background={buttonIconColor} 
          variant='solid'
          type='submit'
          disabled={!buttonActive}
        >
          Send
        </Button>
      </form>


    </div>
  )
}

export default Contact