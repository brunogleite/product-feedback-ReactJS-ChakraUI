import { Box, Button, Flex, Heading, Textarea, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import dataContext from "../context/data/dataContext";

export default function AddComment(){

    const DataContext = useContext(dataContext);
    const { addComment } = DataContext;

    //declare component level state
    const [textMsg, setTextMsg ] = useState("");

    const valueLeft = 250 - textMsg.length;

    const addCommentOnClick = () => {
        addComment(textMsg)
    }


    return(
        <Box borderRadius="base" bgColor="white" >
            <Box  p="8">
                <Heading fontSize="headingXS" color="darkBlue10" fontWeight="medium">Add Comment</Heading>
                {valueLeft < 0 ? 
                 <Textarea disabled></Textarea> : <Textarea 
                 placeholder="Type your comment here" 
                 borderRadius="sm" 
                 my="6" 
                 bgColor="greyishWhite10" 
                 border="none" 
                 p="4"
                 onChange={(e) => setTextMsg(e.target.value)}
                 value={textMsg}
                  /> }
                
                <Flex alignItems="center">
                    <Text color="greyColor">{valueLeft} Characters left</Text>
                    <Button ml="auto" variant="primary" size="md" onClick={addCommentOnClick}>Post Comment</Button>
                </Flex>
            </Box>
        </Box>
    )
}