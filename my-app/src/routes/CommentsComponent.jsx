import { Box } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';

import AddComment from "../components/addComment";
import CommentsContainer from "../components/CommentsContainer";
import CommentsHeader from "../components/CommentsHeader";

import DataContext from "../context/data/dataContext";

export default function CommentsComponent(){
    

    const dataContext = useContext(DataContext);
    const { activeRequest , setActiveRequest } = dataContext;
    const { comments } = activeRequest;


    return(
        <Box bgColor="greyishWhite10" minH="100vh" pt="20" pb="32">
            <Box maxW="730px" margin="0 auto" >
                <CommentsHeader productReq = {activeRequest} activeReq={setActiveRequest}/>
                <CommentsContainer comments = {comments} />
                <AddComment />
            </Box>
        </Box>
        
    )
}