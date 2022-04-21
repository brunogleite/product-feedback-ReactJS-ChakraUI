import { Box, Heading, Text, Flex,Image } from "@chakra-ui/react";

import { useContext, useEffect, useState } from "react";
import dataContext from "../context/data/dataContext";
import Reply from "./Reply";

import ReplyInput from "./replyInput";

export default function Comment({comment}){

    const { content, user, replies, id } = comment;

    const repliesArr = replies ? replies : [] ;

    //component level state - reply click event handler
    const [replyClick, setReplyClick] = useState(false);


    //function that handles the onClick event handler that pushs that into comment 

    const onReplyClick = () => {
        setReplyClick(prevState => !prevState)
    }

    return (
        <Box key={id} pt="6" px="8" pb="12">    
        <Box mt="7" pb="8" borderBottom="1px solid #8C92B3" >
            <Box>
                <Flex alignItems="center" mb="4">
                    <Flex  alignItems="center">
                        <Image />
                        <Box>
                            <Heading color="darkBlue10" fontSize="headingXS" as="h3">{user.name}</Heading>
                            <Text color="greyColor">@{user.username}</Text>
                        </Box>
                    </Flex>
                    <Text 
                    fontSize="bodyXS" 
                    ml="auto" 
                    fontWeight="semibold" 
                    cursor="pointer" 
                    _hover={{color: "secondaryColor", transition: "all 0.3s ease-in-out"}}
                    onClick={onReplyClick}>Reply</Text>
                </Flex>
                <Box>
                    <Text color="greyColor">{content}</Text>
                </Box>
            </Box>
            {replyClick ? <ReplyInput onReplyClick={onReplyClick} id={id} userName={user.username} /> : ""}
            
        </Box>
        {repliesArr.map((reply, index) => {
            console.log(reply);
                <Reply reply={reply} id={id} key={index}/>
        })}
        </Box>
    )
}