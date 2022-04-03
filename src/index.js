import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bg: mode('#EEEFF6', 'blackAlpha.900')(props),
    },
  }),
};

const breakpoints = createBreakpoints({
  base: '800px',
 
})

const theme = extendTheme({
  fonts:{
    body: 'Nunito, sans-serif, Roboto, sans-serif',
  },
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
  breakpoints,
  styles
})


ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);

