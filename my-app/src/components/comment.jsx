import { Box, Heading, Text, Flex, Image, Link } from "@chakra-ui/react";

import { useState } from "react";
import Reply from "./Reply";

import ReplyInput from "./replyInput";


export default function Comment({comment}){

    const { content, user, replies, id } = comment;
    console.log(user.image)

    const repliesArr = replies ? replies : [] ;

    //component level state - reply click event handler
    const [replyClick, setReplyClick] = useState(false);

    console.log(repliesArr)

    //function that handles the onClick event handler that pushs that into comment 

    const onReplyClick = () => {
        setReplyClick(prevState => !prevState)
    }

    return (
        <Box key={id} pt="6" pb="12">    
        <Box mt="7" pb="8" borderBottom="1px solid #8C92B340">
            <Box>
                <Flex alignItems="flex-start" mb="4">
                        <Flex mr="8" flexDirection="column" alignItems="center" justifyContent="center" pos="relative">
                            <Image boxSize={10} borderRadius="full" src={user.image} alt="image profile" />
                            {repliesArr.length !== 0 && <Box bgColor="greyColor" w="1px" minH="267px" opacity="0.1" pos="absolute" top="50px"></Box>  } 
                        </Flex>
                    <Box w="full"> 
                        <Flex alignItems="center">
                            <Box>
                                <Heading color="darkBlue10" fontSize="headingXS" as="h3">{user.name}</Heading>
                                <Text color="greyColor">@{user.username}</Text>
                            </Box>
                            <Link 
                            fontSize="bodyXS" 
                            ml="auto" 
                            color="secondaryColor"
                            fontWeight="semibold" 
                            cursor="pointer" 
                            onClick={onReplyClick}>Reply
                            </Link>
                        </Flex>
                        <Box pt="4">
                            <Text color="greyColor">{content}</Text>
                        </Box>
                    </Box>
                </Flex>
                {replyClick ? <ReplyInput onReplyClick={onReplyClick} id={id} userName={user.username} /> : ""}
            </Box>
            {repliesArr.map((reply, index) => {
                return <Reply reply={reply} id={id} key={index} userName={user.username} />
            })}
        </Box>
    </Box>
    )
}