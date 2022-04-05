import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { DataProvider } from "./context/useData";
import { ChakraProvider } from '@chakra-ui/react';
import { myNewTheme } from "./theme/theme";


ReactDOM.render(
  <DataProvider>
    <ChakraProvider theme={myNewTheme}>
      <App />
    </ChakraProvider>
  </DataProvider>
  ,
  document.getElementById('root')
);


