import { Box } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';

import AddComment from "../components/addComment";
import CommentsContainer from "../components/CommentsContainer";
import CommentsHeader from "../components/CommentsHeader";

import DataContext from "../context/data/dataContext";

export default function CommentsComponent(){
    

    const dataContext = useContext(DataContext);
    const { activeRequest, comments  } = dataContext;
    
    console.log("Active Request: " + activeRequest)

    



    return(
        <>
            <CommentsHeader />
            <CommentsContainer />
            <AddComment />
        </>
    )
}