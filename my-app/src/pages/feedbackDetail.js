import { Box, Container } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useData } from "../context/useData";

import CommentsHeader from "../components/CommentsHeader";

export default function FeedbackDetail(){
    

    return(
        <Container>
            <CommentsHeader product={product}>
                
            </CommentsHeader>
        </Container>
    )
}