import React,{useState,useRef} from 'react'
import {Heading,Box,useColorModeValue,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,  
  Input,
  Textarea,
  Text,
  Icon,
  Link
} from '@chakra-ui/react'
import {EmailIcon } from '@chakra-ui/icons'
import { IoLogoGithub,IoLogoLinkedin } from "react-icons/io5";


function Contact() {
  const formRef = useRef()

  const nameRef = useRef()
  const emailRef = useRef()
  const textRef = useRef()

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
        <Heading >Contacteer</Heading>
      </Box>

      <Text color={useColorModeValue("gray","darkGray")} m="1.3rem">Je kunt contact met me opnemen door het formulier in te vullen of door mijn social media te bekijken.</Text>

      <form action="" ref={formRef} className='m-5 mb-10' data-netlify="true" name="contact" 
      method="POST"
      noValidate
      >
        <input type="hidden" name="form-name" value="contact"/>
        <FormControl isInvalid={isErrorName} marginBottom="1em">
          <FormLabel htmlFor='name'>Naam</FormLabel>
          <Input
            ref={nameRef}
            id='name'
            type='text'
            name='name'
          />
          {isErrorName && (
            <FormErrorMessage>Naam mag niet leeg zijn.</FormErrorMessage>
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
            <FormErrorMessage>Email mag niet leeg zijn.</FormErrorMessage>
          )}
           {isErrorEmail === "invalid" && (
            <FormErrorMessage>Email is niet geldig.</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={isErrorText}  marginBottom="1em">
          <FormLabel htmlFor='text'>Bericht</FormLabel>
          <Textarea 
            ref={textRef}
            id='text'
            type='text'
            name='text'
            size='lg'
          />
          
          {isErrorText && (
            <FormErrorMessage>Bericht mag niet leeg zijn.</FormErrorMessage>
          )}
        </FormControl>

        <Button  
          _hover={{
              background: useColorModeValue("#555657", "#b8af8e")
          }} 
          leftIcon={<EmailIcon />} 
          color="white" 
          background={useColorModeValue("#414243","#a79f83")} 
          variant='solid'
          onClick={sumbitForm}
        >
          Verstuur
        </Button>
      </form>
      <Text m="1.3rem" as='u' fontSize='xl'>Vind me online</Text>
      <Box m="1.3rem" mb="5rem">
       
        <Link href='https://github.com/BryanVanWinnendael' isExternal mr={5}>
            Github<Icon as={IoLogoGithub} ml={2}  mb={1}/>
        </Link>

        <Link href='https://linkedin.com/in/bryanvanwinnendael' isExternal>
          LinkedIn<Icon as={IoLogoLinkedin} ml={2}  mb={1}/>
        </Link>

      </Box>


    </div>
  )
}

export default Contact