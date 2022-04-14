import {
    UPVOTE_ADD, 
    FILTER_TAGS,
    FILTER_SORTBY,
    ADD_COMMENTS,
    REPLY_COMMENTS
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
        }
    }
}

export default dataReducer