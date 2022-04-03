import React,{useState,useRef} from 'react'
import {Heading,Box,useColorModeValue,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,  
  Input,
  Textarea 
} from '@chakra-ui/react'
import {EmailIcon } from '@chakra-ui/icons'

function Contact() {
  const formRef = useRef()

  const nameRef = useRef()
  const emailRef = useRef()
  const textRef = useRef()

  const buttonIconColor = useColorModeValue("purple.400","blue.600")
  const colorHeader = useColorModeValue('#ffffff89', '#20202380')
 
  const [isErrorName,setIsErrorName] = useState()
  const [isErrorEmail,setIsErrorEmail] = useState()
  const [isErrorText,setIsErrorText] = useState()


  //check if mail is valid
  const checkEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const sumbitForm = (e) =>{
    e.preventDefault()

    if(nameRef.current.value === ''){
      setIsErrorName(true)
    }else{
      setIsErrorName(false)
    }

    if(emailRef.current.value === ''){
      setIsErrorEmail("required")
    }else{
      if(checkEmail(emailRef.current.value)){
        setIsErrorEmail(false)
      }else{
        setIsErrorEmail("invalid")
      }
    }

    if(textRef.current.value === ''){
      setIsErrorText(true)
    }else{
      setIsErrorText(false)
    }

    if(!isErrorName && !isErrorEmail && !isErrorText && isErrorName !== undefined && isErrorEmail !== undefined && isErrorText !== undefined){

      localStorage.setItem('mail',"send")
      formRef.current.submit()
      formRef.current.reset() 
    }

   
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

      <form action="" ref={formRef} className='m-5 mb-28' data-netlify="true" name="contact" 
      method="POST"
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
          />
          {isErrorEmail === "required" && (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
           {isErrorEmail === "invalid" && (
            <FormErrorMessage>Email is invalid.</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={isErrorText}  marginBottom="1em">
          <FormLabel htmlFor='text'>Message</FormLabel>
          <Textarea 
            ref={textRef}
            id='text'
            type='text'
            name='text'
            size='lg'
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
          onClick={sumbitForm}
        >
          Send
        </Button>
      </form>


    </div>
  )
}

export default Contact