import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    icon: {
      100: "#b2b1a7",
      900: "#1a202c",
    },
    text:{
      light: "#26282b",
      dark:"white"
    }
  },
})


ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);

