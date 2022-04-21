import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

export default function Reply({comment}){

    return (
        <Box key={comment.id} px="8" pb="12">
            {comment.replies === undefined ? "" : comment.replies.map(reply => {
                return <Box key={reply.id} pl="6">
                            <Box border="1px solid red">
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
                                <Text color="greyColor"><Text color="primaryColor" fontWeight="bold">{reply.replyingTo}</Text>{reply.content}</Text>
                            </Box>
                        </Box>
                        </Box>
                       })}
                   </Box>
    )
}