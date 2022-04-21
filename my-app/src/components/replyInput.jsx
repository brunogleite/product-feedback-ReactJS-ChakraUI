import { Box, Button, Flex, Textarea } from "@chakra-ui/react";
import { useState, useContext } from "react";
import dataContext from "../context/data/dataContext";

export default function ReplyInput({id, userName, onReplyClick}){
    const DataContext = useContext(dataContext);
    const { setNewReply } = DataContext;


    

    //component level state - get value from textarea
    const [msgText, setMsgText] = useState("");
    console.log(userName, id, msgText)

    //function that handles msg state
    const pushMsg = (e) => {
        setMsgText(e.target.value)
    }

    //function that's responsible onClick event handler to push the reply into comment
    const pushReplyToComment = (e) => {
        e.preventDefault();
        onReplyClick();
        setMsgText("")
        setNewReply(id , msgText, userName ) 
    }

    return (
        <form autoComplete="off" onSubmit={pushReplyToComment}>
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
                <Button type="submit" variant="primary" size="md">Post Reply</Button>
            </Flex>
        </form>
        
    )
}