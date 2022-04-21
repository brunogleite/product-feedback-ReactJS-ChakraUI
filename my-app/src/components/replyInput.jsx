import { Box, Button, Flex, Textarea } from "@chakra-ui/react";
import { useState } from "react";

export default function ReplyInput(){

    //component level state - get value from textarea
    const [msgText, setMsgText] = useState("")

    //function that handles msg state
    const pushMsg = (e) => {
        setMsgText(e.target.value)
    }

    //function that's responsible onClick event handler to push the reply into comment
    

    console.log(msgText)

    return (
        <Flex my="6">
            <Textarea placeholder="Type your comment here" 
            borderRadius="sm"  
            bgColor="greyishWhite10" 
            border="none" 
            p="4" 
            _active={{border: "1px solid secondaryColor"}}
            mr="4"
            value={msgText}
            onChange={pushMsg} />
            <Button variant="primary" size="md">Post Reply</Button>
        </Flex>
    )
}