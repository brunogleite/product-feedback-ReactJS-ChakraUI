import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import UpvoteSuggestion from "./upvoteSuggestion";
import { IoChatbubbleSharp } from "react-icons/io5";

export default function SuggestionItemList({product}){
    console.log(product)

    return(
        <Box 
        bgColor="white"
        borderRadius="base"
        w="100%"
        maxW="825px"
        my="5">
            <Flex 
            alignItems="center"
            py="7"
            px="8">
                <Flex alignItems="center">
                    <Box>
                        <UpvoteSuggestion number={product.upvotes} />
                    </Box>
                    <Box>
                        <Heading 
                        as="h3"
                        fontSize="headingXS"
                        mb="1">{product.title}</Heading>
                        <Text mb="3" color="greyColor" fontSize="bodyM">{product.description}</Text>
                        
                        <Box 
                        py="1.5" px="4" 
                        bgColor="greyishWhite20"
                        borderRadius="base"
                        w="max-content"
                        color="secondaryColor">{product.category}
                    </Box>
                    </Box>
                </Flex>
                <Flex alignItems="center" ml="auto">
                    <Box mr="2">
                        <IoChatbubbleSharp color="#CDD2EE" />
                    </Box>
                    <Text color="darkBlue10" fontWeight="bold">{product.comments === undefined ? 0 : product.comments.length }</Text>
                </Flex>
            </Flex>
        </Box>
    )
}