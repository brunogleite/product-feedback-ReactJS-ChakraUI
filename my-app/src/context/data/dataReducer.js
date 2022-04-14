import {
    UPVOTE_ADD, 
    FILTER_TAGS,
    FILTER_SORTBY,
    ADD_COMMENTS,
    REPLY_COMMENTS
} from "../types";

const dataReducer = (state, action) =>{
    switch(action.type) {
        case "FILTER_TAGS" : 
        return {
            ...state,
            activeTag: action.payload
        }
    }
}

export default dataReducer