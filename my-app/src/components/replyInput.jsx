import { Box, Button, Flex, Textarea } from "@chakra-ui/react";

export default function ReplyInput(){

    return (
        <Flex my="6">
            <Textarea placeholder="Type your comment here" 
            borderRadius="sm"  
            bgColor="greyishWhite10" 
            border="none" 
            p="4" 
            _active={{border: "1px solid secondaryColor"}}
            mr="4" />

            <Button variant="primary" size="md">Post Reply</Button>
        </Flex>
    )
}