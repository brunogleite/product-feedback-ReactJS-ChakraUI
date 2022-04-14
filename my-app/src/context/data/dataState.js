import dataReducer from "./dataReducer";
import {
    UPVOTE_ADD, 
    FILTER_TAGS,
    FILTER_SORTBY,
    ADD_COMMENTS,
    REPLY_COMMENTS
} from "../types";
import { useReducer } from "react";


const dataState = (props) => {

    const initialState = {
        curUser : {},
        requests : [],
        activeRequest : [],
        activeTag : "All",
        sortByFilter : "Most Upvotes",
        suggClicked : false,
        commentsCount: 15
    }

    const [state, dispatch] = useReducer(dataReducer, initialState);

    //getting data

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
            updateSortByFilter,
            updateUpvote,
            suggCompClicked,
            addComment,
            setActiveRequest,
            updateCommentCount,
            addReply,
            addFeedback,
            deleteFeedback,
            editFeedback,
          }}
        >
          {props.children}
        </DataContext.Provider>
      );
}

export default dataState;
