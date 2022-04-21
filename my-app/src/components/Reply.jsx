import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

export default function Reply({reply}){
    console.log(reply)

    return (
        <Box px="8" pb="12">
            <Box pl="6">
                            <Box border="1px solid red">
                               <Flex alignItems="center" mb="4">
                                   <Flex  alignItems="center">
                                       <Image />
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
                                   _hover={{color: "secondaryColor", transition: "all 0.3s ease-in-out"}}>Reply</Text>
                               </Flex>
                            <Box>
                                <Text color="greyColor"><Text color="primaryColor" fontWeight="bold">{reply.replyingTo}</Text>{reply.content}</Text>
                            </Box>
                        </Box>
                </Box>  
            </Box>
    )
}