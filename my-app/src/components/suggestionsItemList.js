import { Box, Heading, Text } from "@chakra-ui/react";

export default function SuggestionItemList({product}){
    console.log(product.comments)

    return(
        <Box>
            <Box>
                <Box></Box>
                <Box>
                    <Heading 
                    as="h3"
                    fontSize="headingXS">{product.title}</Heading>
                    <Text color="greyColor" fontSize="bodyM">{product.description}</Text>
                    
                    <Box 
                    py="1.5" px="4" 
                    bgColor="greyishWhite20"
                    borderRadius="base"
                    w="max-content">{product.category}
                  </Box>
                </Box>
            </Box>
            <Box>
                <Text>{product.comments === undefined ? 0 : product.comments.length }</Text>
            </Box>
        </Box>
    )
}