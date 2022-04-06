import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { DataProvider } from "./context/useData";
import { ChakraProvider } from '@chakra-ui/react';
import { myNewTheme } from "./theme/theme";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
  <DataProvider>
    <ChakraProvider theme={myNewTheme}>
      <App />
    </ChakraProvider>
  </DataProvider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);


