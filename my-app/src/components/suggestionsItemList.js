import { Box, Heading, Text, Flex } from "@chakra-ui/react";

export default function SuggestionItemList({product}){
    console.log(product.comments)

    return(
        <Box 
        bgColor="white"
        borderRadius="base"
        maxW="825px"
        my="5">
            <Flex 
            alignItems="center"
            py="7"
            px="8">
                <Flex>
                    <Box>

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
                <Box ml="auto">
                    <Text>{product.comments === undefined ? 0 : product.comments.length }</Text>
                </Box>
            </Flex>
        </Box>
    )
}