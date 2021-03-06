import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import DataState from './context/data/dataState';
import { ChakraProvider } from '@chakra-ui/react';
import { myNewTheme } from "./theme/theme";

import FeedbackDetail from "./pages/feedbackDetail";
import SuggestionList from "./components/suggestionList";
import AddFeedback from "./routes/addFeedback";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Roadmap from './routes/roadmap';
import CommentsComponent from "./routes/CommentsComponent";



ReactDOM.render(
  
    <DataState>
      <ChakraProvider theme={myNewTheme}>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}></Route>
          {/*<Route path="feedback/:feedbackId" element={<FeedbackDetail />} />*/}
          <Route path="addfeedback" element={<AddFeedback />} />
          <Route path="roadmap" element={<Roadmap />} />
          <Route path="comments/:commentsId" element={<CommentsComponent/>}></Route>
        </Routes> 
        </BrowserRouter>
      </ChakraProvider>
    </DataState>
  
  ,
  document.getElementById('root')
);


