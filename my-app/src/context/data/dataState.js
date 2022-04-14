import React, { useReducer } from 'react';
import DataContext from './dataContext';
import dataReducer from './dataReducer';
import {
  GET_DATA,
  UPVOTE_ADD, 
  FILTER_TAGS,
  FILTER_SORTBY,
  ADD_COMMENTS,
  REPLY_COMMENTS
} from '../types';

const DataState = (props) => {
  const initialState = {
    curUser: {},
    requests: [],
    activeRequest: [],
    activeTag: 'All',
    sortByFilter: 'Most Upvotes',
    suggClicked: false,
    commentsCount: 15,
  };
  const [state, dispatch] = useReducer(dataReducer, initialState);

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
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;

