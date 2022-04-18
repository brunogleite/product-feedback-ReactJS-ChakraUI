import { Box } from "@chakra-ui/react";

import AddComment from "../components/addComment";
import CommentsContainer from "../components/CommentsContainer";
import CommentsHeader from "../components/CommentsHeader";

export default function CommentsComponent(){
    return(
        <Box>
            <CommentsHeader />
            <CommentsContainer />
            <AddComment />
        </Box>
    )
}