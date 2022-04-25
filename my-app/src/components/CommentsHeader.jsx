import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Box, Heading, Flex, Text, Button } from "@chakra-ui/react";
import { IoChatbubbleSharp } from "react-icons/io5";
import UpvoteSuggestion from "./upvoteSuggestion";

import SuggestionItemList from "./suggestionsItemList";
import EditFeedback from "./editFeedback";


const CommentsHeader = ({productReq, activeReq}) => {
    const {id, title, category, active, description, upvotes, status, comments} = productReq;
    const { setActiveRequest } = activeReq;
    console.log(productReq)

    const [ showEditModal, setShowEditModal ] = useState(false);

    const triggerModal = () => {
        setShowEditModal(true)
    }

    const resetActiveState = () => {
        setActiveRequest([], false); 
    }

    return (
        <>
            {showEditModal ? 
            (
                <EditFeedback
                 title={title}
                 description={description}
                 category={category}
                 status={status}
                 id={id}/>
            ) : (
                <Box>
            <Flex alignItems="center">
                <Text 
                fontWeight="bold" 
                fontSize="bodyXXS" 
                color="greyColor" 
                cursor="pointer"><Link to="/" onClick={resetActiveState}>Go Back</Link></Text>
                <Button variant="primary" size="md" ml="auto" onClick={triggerModal}>Edit Feedback</Button>
            </Flex>
            <Box 
                bgColor="white"
                borderRadius="base"
                w="100%"
                maxW="825px"
                my="5"
                transition="all 0.3s ease-in-out"
                _hover={{boxShadow:'lg'}}>
            <Flex 
                alignItems="center"
                py="7"
                px="8">
                <Flex alignItems="center">
                    <Box>
                        <UpvoteSuggestion number={upvotes} />
                    </Box>
                    <Box>
                        <Heading 
                            as="h3"
                            fontSize="headingXS"
                            mb="1">{title}</Heading>
                            <Text mb="3" color="greyColor" fontSize="bodyM">{description}</Text>
                        
                        <Box 
                            py="1.5" px="4" 
                            bgColor="greyishWhite20"
                            borderRadius="base"
                            w="max-content"
                            color="secondaryColor">{category}
                    </Box>
                    </Box>
                </Flex>
                <Flex alignItems="center" ml="auto">
                    <Box mr="2">
                        <IoChatbubbleSharp color="#CDD2EE" />
                    </Box>
                    <Text color="darkBlue10" fontWeight="bold">{comments === undefined ? 0 : comments.length }</Text>
                </Flex>
            </Flex>
            </Box>
            </Box>
            )}
        </>
    )
}


export default CommentsHeader