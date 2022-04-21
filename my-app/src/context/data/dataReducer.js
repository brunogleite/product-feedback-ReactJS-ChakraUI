import {
    UPVOTE_ADD, 
    FILTER_TAGS,
    FILTER_SORTBY,
    ADD_COMMENTS,
    POST_REPLY
} from "../types";

const dataReducer = (state, action) =>{
    switch(action.type) {
        case "GET_DATA" : 
        return {
            ...state,
            curUser: action.payload1,
            requests: action.payload2
        };
        case "FILTER_TAGS" : 
        return {
            ...state,
            activeTag: action.payload
        };
        case "UPVOTE_ADD" : 
        return {
            ...state,
            requests: action.payload
        }
        case "ADD_COMMENTS" : 
        return {
            ...state,
            requests: action.payload
        }
        case "CHANGE_SUGGCLICKED" : 
        return{
            ...state,
            suggClicked: action.payload
        }
        case "SET_ACTIVEREQ" : 
        return {
            ...state,
            activeRequest: action.payload
        }
        case "POST_REPLY" : 
        return {
            ...state,
            requests: action.payload
        }
    }
}

export default dataReducer