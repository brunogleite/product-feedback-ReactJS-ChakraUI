import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";

import { useContext, useState } from "react";
import dataContext from "../context/data/dataContext";
import ReplyInput from "./replyInput";

export default function Reply({reply, id, userName}){
    console.log(reply.user.image)

    const [openInput, setOpenInput] = useState(false)

    const onReplyClick  = () => {
        setOpenInput(prevState => !prevState);
    }

    return (
        <Box pl="8" pb="12">
            <Box pl="6">
                <Box>
                    <Flex alignItems="center" mb="4">
                        <Flex w="full"  alignItems="flex-start" pt="8">
                            <Image boxSize="10" mr="8" borderRadius="full" src={reply.user.image} />
                            <Box w="full">
                                <Flex alignItems="center">
                                <Box>
                                    <Heading color="darkBlue10" fontSize="headingXS" as="h3">{reply.user.name}</Heading>
                                    <Text color="greyColor">@{reply.user.name}</Text>
                                </Box>
                                <Link 
                                fontSize="bodyXS" 
                                ml="auto" 
                                fontWeight="semibold" 
                                cursor="pointer" 
                                color="secondaryColor"
                                onClick={onReplyClick}>Reply
                                </Link>
                                </Flex>
                                <Text pt="2.5" color="greyColor"><Text color="primaryColor" fontWeight="bold">@{reply.replyingTo}</Text>{reply.content}</Text>
                            </Box>
                        </Flex>        
                    </Flex>
                </Box>
                { openInput ?  <ReplyInput id={id} userName={userName} onReplyClick={onReplyClick}  /> : ""}
            </Box>    
        </Box>
    )
}