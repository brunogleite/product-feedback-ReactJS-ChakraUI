import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

import ReplyInput from "./replyInput";
import Comment from "./comment";

export default function CommentsContainer({comments}){

    return(
        <Box bgColor="white" borderRadius="sm">
            <Heading as="h3" fontSize="headingXS">4 Comments</Heading>
            {comments.map((comment, index) => {
                return <Comment key={index} comment={comment} />
            })}
        </Box>
    )
}