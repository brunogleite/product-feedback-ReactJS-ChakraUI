import React, { useReducer } from 'react';
import DataContext from './dataContext';
import dataReducer from './dataReducer';
import {
  GET_DATA,
  UPVOTE_ADD, 
  FILTER_TAGS,
  FILTER_SORTBY,
  ADD_COMMENTS,
  POST_REPLY,
  
  SET_ACTIVEREQ,
  CHANGE_SUGGCLICKED
} from '../types';

const DataState = (props) => {

  const initialState = {
    curUser: {},
    requests: [],
    activeRequest: [], // => why ? to show the details of the suggestion
    activeTag: 'All',
    sortByFilter: 'Most Upvotes',
    suggClicked: false, // => why ? 
    commentsCount: 15,
  };
  const [state, dispatch] = useReducer(dataReducer, initialState);

  console.log(state)

  // Get Data
  const getData = () => {
    // If session storage empty, get data from JSON file
    if (
      sessionStorage.getItem('requests') === null ||
      sessionStorage.getItem('curUser') === null
    ) {
      const data = require('../../data.json');

      // Give each object a key of 'active' set to false
      for (let i = 0; i < data['productRequests'].length; i++) {
        data['productRequests'][i]['active'] = false;
      }

      // Store object to session storage
      sessionStorage.setItem('curUser', JSON.stringify(data['currentUser']));
      sessionStorage.setItem(
        'requests',
        JSON.stringify(data['productRequests'])
      );
    }

    // Declare session storage data as an object
    const curUser = JSON.parse(sessionStorage.getItem('curUser'));
    const requests = JSON.parse(sessionStorage.getItem('requests'));

    dispatch({
      type: GET_DATA,
      payload1: curUser,
      payload2: requests,
    });
  };

  // Update active tag filter
  const updateActiveTag = (clickedTag) => {
    const newTag = clickedTag;

    dispatch({
      type: FILTER_TAGS,
      payload: newTag
    });
  };

  const updateVote = (currentValue ,suggestionId, add) => {
    //this function takes 3 params: one for the currentValue of the upvote number, id, add for styling

    //we have to extract values from requests state
      const currentRequests = state.requests;

    //find the equal index on click event handler to match 
      const requestIndex = currentRequests.findIndex((index) => index.id === suggestionId );

    //find in currentRequests variable through requestIndex the modify the value of upvote 
    currentRequests[requestIndex].upvotes = add ? currentValue = currentValue + 1 : currentValue = currentValue - 1
    currentRequests[requestIndex].active = add;

    //store this on requests state 
    sessionStorage.setItem("requests", JSON.stringify(requestIndex))
    const updatedRequests = sessionStorage.getItem(JSON.parse("requests"))
    
    dispatch({
      type: UPVOTE_ADD,
      payload: updatedRequests
    })
  }

  const addComments = (title, category, details) => {
    // we need to get the requests array 
    let currentRequests = state.requests;

    //we need to get the id for each new array
    const newId = currentRequests[currentRequests.length - 1].id + 1;
   
    //template object to push in requests array
    const newObj = {
      id: newId,
      active: false, 
      category: category,
      comments: [],
      description: details,
      status: "",
      title: title,
      upvotes: 0
    }

    //new Object goes to currentRequests
    currentRequests.push(newObj)

    sessionStorage.setItem("requests", JSON.stringify(currentRequests))
    const updatedReq = JSON.parse(sessionStorage.getItem("requests"))

    dispatch({
      type: ADD_COMMENTS,
      payload: updatedReq
    })
    
  }

  const sugProductClicked = (clickedRequest) => {
    const newStatus = !state.suggClicked;
    setActiveRequest(clickedRequest, false); //=> push into a single array value the active one request 

    dispatch({
      type: CHANGE_SUGGCLICKED,
      payload: newStatus
    })
  } 

  const setActiveRequest = (clickedRequest, comment) => {
    let newActiveRequest;

    if(!comment){
      newActiveRequest = state.suggClicked ? [] : clickedRequest
    } else {
      newActiveRequest = clickedRequest;
    }

    dispatch({
      type: SET_ACTIVEREQ,
      payload: newActiveRequest
    })

  }

    

    const setNewReply = (replyObj) => {

    let curUser = state.requests;

    //template object to push in comments array
    const newObj = {
      id: "",
      content: "",

    }

    replyObj = newObj

      dispatch({
        type: POST_REPLY,
        payload: replyObj
      })

    }


  return (
    <DataContext.Provider
      value={{
        curUser: state.curUser,
        requests: state.requests,
        activeTag: state.activeTag,
        sortByFilter: state.sortByFilter,
        suggClicked: state.suggClicked,
        activeRequest: state.activeRequest,
        commentsCount: state.commentsCount,
        getData,
        updateActiveTag,
        updateVote,
        addComments,
        sugProductClicked,
        setNewReply
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;

