import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { DataProvider } from "./context/useData";
import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.render(
  <ChakraProvider>
      <App />
  </ChakraProvider>,
  document.getElementById('root')
);


