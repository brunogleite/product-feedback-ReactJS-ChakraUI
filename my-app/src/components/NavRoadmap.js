import { Box, Text, Heading, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NavRoadmap(){

    return(
        <Box bgColor="darkBlue20" borderRadius="base" px="8" py="7">
            <Flex alignItems="center">
                <Box color="white" fontSize="headingL" >
                    <Text> Go Back </Text>
                    <Heading>Roadmap</Heading>
                </Box>
                <Box ml="auto">
                    <Link to="/addfeedback">
                        <Button size="md" variant='primary'>
                            Add feeedback
                        </Button>
                    </Link>
                </Box>
            </Flex>
        </Box>
    )
}