import { Box, Text, Heading, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export default function FilterRoadmap(){
    return(
        <Box
        bgColor="white"
        borderRadius="base"
        maxW="255px"
        border="1px solid red"
        minH={[ "178px", "178px", "178px", "137px" ]}>
            <Box
            p="6">
                <Flex mb="6" alignItems="center">
                    <Heading color="darkBlue10" as="h3" fontSize="headingXS">Roadmap</Heading>
                        <Text 
                        fontSize="bodyXS" 
                        as="u" 
                        ml="auto" 
                        cursor="pointer"><Link to="/roadmap">View</Link>
                        </Text>
                </Flex>
                <Box>
                    <Flex alignItems="center">
                        <Flex alignItems="center">
                            <Box 
                            bgColor="orangeColor" 
                            w="2" 
                            h="2" 
                            borderRadius="100vw"
                            mr="4"></Box>
                            <Text color="greyColor">Planned</Text>
                        </Flex>
                        <Box ml="auto">
                        <Text color="greyColor" fontWeight="bold">2</Text>
                        </Box>
                    </Flex>
                    <Flex alignItems="center">
                        <Flex alignItems="center">
                            <Box 
                            bgColor="primaryColor" 
                            w="2" 
                            h="2" 
                            borderRadius="100vw"
                            mr="4"></Box>
                            <Text color="greyColor">In-Progress</Text>
                        </Flex>
                        <Box ml="auto">
                        <Text color="greyColor" fontWeight="bold">3</Text>
                        </Box>
                    </Flex>
                    <Flex alignItems="center">
                        <Flex alignItems="center">
                            <Box 
                            bgColor="lightBlue" 
                            w="2" 
                            h="2" 
                            borderRadius="100vw"
                            mr="4"></Box>
                            <Text color="greyColor">Live</Text>
                        </Flex>
                        <Box ml="auto">
                            <Text color="greyColor" fontWeight="bold">1</Text>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}