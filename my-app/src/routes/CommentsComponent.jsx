import { Box } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';

import AddComment from "../components/addComment";
import CommentsContainer from "../components/CommentsContainer";
import CommentsHeader from "../components/CommentsHeader";

import DataContext from "../context/data/dataContext";

export default function CommentsComponent(){
    

    const dataContext = useContext(DataContext);
    const { requests, getData } = dataContext;

    //get Data in initial render
    useEffect(() => {
        getData();
    }, [])
    
    console.log(requests)

    return(
        <>
            <CommentsHeader />
            <CommentsContainer />
            <AddComment />
        </>
    )
}