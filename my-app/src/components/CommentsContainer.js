import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import ReplyInput from "./replyInput";
import Comment from "./comment";

export default function CommentsContainer({comments}){

    console.log(comments)

    return(
        <Box bgColor="white" borderRadius="sm">
            <Heading as="h3" fontSize="headingXS">{comments === undefined ? "": comments.length} Comments</Heading>
            {comments === undefined ? "" : comments.map((comment, index) => {
                return <Comment key={index} comment={comment} />
            })}
        </Box>
    )
}