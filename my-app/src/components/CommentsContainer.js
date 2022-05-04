import { Box, Heading } from "@chakra-ui/react";


import Comment from "./comment";

export default function CommentsContainer({comments}){

    return(
        <Box bgColor="white" borderRadius="sm" px="8" pt="6">
            <Heading as="h3" fontSize="headingXS">{comments === undefined ? "": comments.length} Comments</Heading>
            {comments === undefined ? "" : comments.map((comment, index) => {
                return <Comment key={index} comment={comment} />
            })}
        </Box>
    )
}