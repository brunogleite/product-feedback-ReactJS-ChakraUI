import { Box, Flex, Text, Heading } from "@chakra-ui/react";


export default function RoadmapComponent(){

    return (
        <Box 
            pos="relative" 
            _before={{content: "''", bgColor: "red.500", w:"full", h:"6px", pos:"absolute", top:"0", left:"0", borderRadius:"5px 5px 0 0"}} 
            p="8" 
            bgColor="white" 
            borderRadius="sm" 
            w="full">
                <Box>
                    <Flex>
                        <Box maxW="8px" minH="8px" borderRadius="full" bgColor="red.500"></Box>
                        <Text>Planned</Text>
                    </Flex>
                    <Box mt="2" mb="4" maxW="286px">
                    <Heading as="h3" fontSize="headingXS" fontWeight="medium">More comprehensive reports</Heading>
                        <Text fontSize="bodyM" color="greyColor">It would be great to see a more detailed breakdown of solutions.</Text>
                     </Box>
                </Box>
                <Box>
                    <Box mb="4">Feature</Box>
                    <Flex>
                        <Box>123</Box>
                        <Box ml="auto">2</Box>
                    </Flex>
                </Box>
            </Box>
    )
}