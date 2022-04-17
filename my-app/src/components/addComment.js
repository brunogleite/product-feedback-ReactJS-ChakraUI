import { Box, Button, Flex, Heading, Textarea, Text } from "@chakra-ui/react";

export default function AddComment(){

    return(
        <Box borderRadius="base" bgColor="white" >
            <Box  p="8">
                <Heading fontSize="headingXS" color="darkBlue10" fontWeight="medium">Add Comment</Heading>
                <Textarea 
                placeholder="Type your comment here" 
                borderRadius="sm" 
                my="6" 
                bgColor="greyishWhite10" 
                border="none" 
                p="4" />
                <Flex alignItems="center">
                    <Text color="greyColor">250 Characters left</Text>
                    <Button ml="auto" variant="primary" size="md">Post Comment</Button>
                </Flex>
            </Box>
        </Box>
    )
}