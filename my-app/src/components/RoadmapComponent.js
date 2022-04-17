import { Box, Flex, Text, Heading } from "@chakra-ui/react";


export default function RoadmapComponent({product}){

    return (
        <Box 
            pos="relative" 
            _before={{content: "''", bgColor: product.status === "live" ? "lightBlue": product.status === "planned" ? "orangeColor": "primaryColor" , w:"full", h:"6px", pos:"absolute", top:"0", left:"0", borderRadius:"5px 5px 0 0"}} 
            p="8" 
            bgColor="white" 
            borderRadius="sm" 
            w="full">
                <Box>
                    <Flex alignItems="center">
                        <Box maxW="8px" w="full" h="8px" borderRadius="full" mr="4" bgColor={product.status === "live" ? "lightBlue": product.status === "planned" ? "orangeColor": "primaryColor"}></Box>
                        <Text>{product.status}</Text>
                    </Flex>
                    <Box mt="2" mb="4" maxW="286px">
                        <Heading as="h3" fontSize="headingXS" fontWeight="medium">{product.title}</Heading>
                        <Text fontSize="bodyM" color="greyColor">{product.description}</Text>
                    </Box>
                </Box>
                <Box>
                    <Box mb="4">Feature</Box>
                    <Flex>
                        <Box>{product.upvotes}</Box>
                        <Box ml="auto">{product.comments === undefined ? 0 : product.comments.length}</Box>
                    </Flex>
                </Box>
            </Box>
    )
}