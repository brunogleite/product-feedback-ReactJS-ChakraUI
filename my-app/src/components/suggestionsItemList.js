import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import UpvoteSuggestion from "./upvoteSuggestion";
import { IoChatbubbleSharp } from "react-icons/io5";

export default function SuggestionItemList({product}){
    const {upvotes, title, description, category, comments} = product;

    console.log(product)

    return(
        <Box 
        bgColor="white"
        borderRadius="base"
        w="100%"
        maxW="825px"
        my="5"
        transition="all 0.3s ease-in-out"
        _hover={{boxShadow:'lg'}}>
            <Flex 
            alignItems="center"
            py="7"
            px="8">
                <Flex alignItems="center">
                    <Box>
                        <UpvoteSuggestion number={upvotes} />
                    </Box>
                    <Box>
                        <Heading 
                        as="h3"
                        fontSize="headingXS"
                        mb="1">{title}</Heading>
                        <Text mb="3" color="greyColor" fontSize="bodyM">{description}</Text>
                        
                        <Box 
                        py="1.5" px="4" 
                        bgColor="greyishWhite20"
                        borderRadius="base"
                        w="max-content"
                        color="secondaryColor">{category}
                    </Box>
                    </Box>
                </Flex>
                <Flex alignItems="center" ml="auto">
                    <Box mr="2">
                        <IoChatbubbleSharp color="#CDD2EE" />
                    </Box>
                    <Text color="darkBlue10" fontWeight="bold">{comments === undefined ? 0 : comments.length }</Text>
                </Flex>
            </Flex>
        </Box>
    )
}