import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function CommentsContainer({productReq}){

    const {id, title, category, active, description, upvotes, status, comments} = productReq;

    console.log(comments)

    return(
        <Box bgColor="white" borderRadius="sm">
            <Heading as="h3" fontSize="headingXS">4 Comments</Heading>
            {comments.map(comment => {
                console.log(comment)
                if(comment.replies === undefined){
                    return <Box pt="6" px="8" pb="12">
                    <Box mt="7" pb="8" borderBottom="1px solid #8C92B3" >
                        <Box>
                            <Flex alignItems="center" mb="4">
                                <Flex  alignItems="center">
                                    <Image />
                                    <Box>
                                        <Heading color="darkBlue10" fontSize="headingXS" as="h3">{comment.user.name}</Heading>
                                        <Text color="greyColor">@{comment.user.username}</Text>
                                    </Box>
                                </Flex>
                                <Text fontSize="bodyXS" ml="auto" fontWeight="semibold" cursor="pointer" _hover={{color: "secondaryColor", transition: "all 0.3s ease-in-out"}}>Reply</Text>
                            </Flex>
                            <Box>
                                <Text color="greyColor">{comment.content}</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                } else {
                    return <Box pt="6" px="8" pb="12">
                    <Box mt="7" pb="8">
                        <Box>
                            <Flex alignItems="center" mb="4">
                                <Flex  alignItems="center">
                                    <Image />
                                    <Box>
                                        <Heading color="darkBlue10" fontSize="headingXS" as="h3">{comment.user.name}</Heading>
                                        <Text color="greyColor">@{comment.user.username}</Text>
                                    </Box>
                                </Flex>
                                <Text fontSize="bodyXS" ml="auto" fontWeight="semibold" cursor="pointer" _hover={{color: "secondaryColor", transition: "all 0.3s ease-in-out"}}>Reply</Text>
                            </Flex>
                            <Box>
                                <Text color="greyColor">{comment.content}</Text>
                            </Box>
                        </Box>

                    </Box>
                    {/*replies*/}
                    {comment.replies.map(reply => {
                        return <Box>
                            <Box>
                            <Flex alignItems="center" mb="4">
                                <Flex  alignItems="center">
                                    <Image />
                                    <Box>
                                        <Heading color="darkBlue10" fontSize="headingXS" as="h3">{reply.user.name}</Heading>
                                        <Text color="greyColor">@{reply.user.username}</Text>
                                    </Box>
                                </Flex>
                                <Text fontSize="bodyXS" ml="auto" fontWeight="semibold" cursor="pointer" _hover={{color: "secondaryColor", transition: "all 0.3s ease-in-out"}}>Reply</Text>
                            </Flex>
                            <Box>
                                <span>{reply.replyingTo}</span><Text color="greyColor">{reply.content}</Text>
                            </Box>
                        </Box>
                        </Box>
                    })}
                    
                </Box>
                }
                
                
            })}
         
            
            
            
        </Box>
    )
}