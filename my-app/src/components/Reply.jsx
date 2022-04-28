import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

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
        <Box px="8" pb="12">
            <Box pl="6">
                <Box>
                    <Flex alignItems="center" mb="4">
                        <Flex  alignItems="center">
                            <Image src={reply.user.image} />
                                <Box>
                                    <Heading color="darkBlue10" fontSize="headingXS" as="h3">{reply.user.name}</Heading>
                                    <Text color="greyColor">@{reply.replyingTo}</Text>
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
                                <Text color="greyColor"><Text color="primaryColor" fontWeight="bold">{reply.replyingTo}</Text>{reply.content}</Text>
                    </Box>
                </Box>
            </Box>  
            { openInput ?  <ReplyInput id={id} userName={userName} onReplyClick={onReplyClick}  /> : ""}
        </Box>
    )
}